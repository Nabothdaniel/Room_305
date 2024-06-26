import React, { useEffect } from "react";
import ClientProfile from "./ClientProfile";
import EscortProfile from "./EscortProfile";
import { useProfileQuery } from "../redux/ApiSlice";
import Loading from "../components/Loading";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Profile = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.Util.token);
  const navigate = useNavigate();
  const { data, isLoading } = useProfileQuery(1, {
    skip: !token,
  });

  useEffect(() => {
    if (!token) {
      navigate("/");
      return;
    }
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  if (!data) {
    navigate("/");
    return;
  }

  return (
    <div>
      {data?.profile?.user_type == "client" && <ClientProfile />}
      {data?.profile?.user?.user_type == "escort" && <EscortProfile />}
    </div>
  );
};

export default Profile;

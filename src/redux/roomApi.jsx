import { ApiSlice } from "./ApiSlice";

const roomApi = ApiSlice.injectEndpoints({
  endpoints: (build) => ({
    getAllRooms: build.query({
      query: () => "room/all",
    }),
    getFilteredRoom: build.query({
      query: ({ country, city }) =>
        `room/filter/?country=${country}&city=${city}`,
    }),
    getMyRooms: build.query({
      query: () => ({
        url: "/room/my_rooms/",
        method: "GET",
        headers: {
          Authorization: "Bearer " + JSON.parse(localStorage.getItem("token")),
        },
      }),
    }),
    getRoomById: build.query({
      query: (id) => ({
        url: `/room/${id}/`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useGetAllRoomsQuery,
  useGetMyRoomsQuery,
  useGetRoomByIdQuery,
  useGetFilteredRoomQuery,
} = roomApi;

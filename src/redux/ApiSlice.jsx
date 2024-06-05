import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const ApiSlice = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://room35backend.onrender.com/api/",
  }),
  refetchOnReconnect: true,
  refetchOnFocus: true,
  keepUnusedDataFor: 60,
  tagTypes: ["Post"],
  endpoints: (build) => ({
    registerEscort: build.mutation({
      query: (body) => ({
        url: "auth/register_escort/",
        method: "POST",
        body,
      }),
    }),

    wallet: build.query({
      query: () => ({
        url: "/profile/userwallet/",
        method: "GET",
        headers: {
          Authorization: "Bearer " + JSON.parse(localStorage.getItem("token")),
        },
      }),
    }),

    channelById: build.query({
      query: (id) => ({
        url: `channels/${id}/`,
        method: "GET",
      }),
    }),

    sendMessage: build.mutation({
      query: (id) => ({
        url: `channels/${id}/messages/send/`,
        method: "POST",
        headers: {
          Authorization: "Bearer " + JSON.parse(localStorage.getItem("token")),
        },
      }),
    }),

    channelMessages: build.query({
      query: (id) => ({
        url: `channels/${id}/messages/`,
        method: "GET",
        headers: {
          Authorization: "Bearer " + JSON.parse(localStorage.getItem("token")),
        },
      }),
      providesTags: (result) =>
        result
          ? [
              { type: "Post", id: "LIST" },
              ...result.map(({ id }) => ({ type: "Post", id })),
            ]
          : [{ type: "Post", id: "LIST" }],
    }),

    channel: build.query({
      query: () => ({
        url: "channels",
        method: "GET",
      }),
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Post", id })),
              { type: "Post", id: "LIST" },
            ]
          : [{ type: "Post", id: "LIST" }],
    }),

    transaction: build.query({
      query: () => ({
        url: "escort/mytransactions/",
        method: "GET",
        headers: {
          Authorization: "Bearer " + JSON.parse(localStorage.getItem("token")),
        },
      }),
    }),

    profile: build.query({
      query: () => ({
        url: "/profile/",
        method: "GET",
        headers: {
          Authorization: "Bearer " + JSON.parse(localStorage.getItem("token")),
        },
      }),
      providesTags: ["Post"],
    }),
    updateClient: build.mutation({
      query: (body) => ({
        url: "/profile/edit/",
        method: "PUT",
        headers: {
          Authorization: "Bearer " + JSON.parse(localStorage.getItem("token")),
        },
        body,
      }),
    }),

    getProfileById: build.query({
      query: (username) => `/profile/username/${username}/`,
    }),
    UploadImage: build.mutation({
      query: (body) => ({
        url: "/profile/upload-photo/",
        method: "PUT",
        headers: {
          Authorization: "Bearer " + JSON.parse(localStorage.getItem("token")),
        },
        body,
      }),
    }),
    login: build.mutation({
      query: (body) => ({
        url: "/auth/login/",
        method: "POST",
        body,
      }),
    }),

    ResetPassword: build.mutation({
      query: (body) => ({
        url: "auth/forgot-password/",
        method: "POST",
        body,
      }),
    }),

    NewPassword: build.mutation({
      query: (body) => ({
        url: "/auth/reset-password/",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const {
  useRegisterEscortMutation,
  useProfileQuery,
  useUpdateClientMutation,
  useLoginMutation,
  useUploadImageMutation,
  useGetProfileByIdQuery,
  useResetPasswordMutation,
  useNewPasswordMutation,
  useTransactionQuery,
  useWalletQuery,
  useChannelQuery,
  useChannelByIdQuery,
  useChannelMessagesQuery,
  useSendMessageMutation,
} = ApiSlice;

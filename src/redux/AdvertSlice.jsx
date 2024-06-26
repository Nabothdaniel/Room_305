import { ApiSlice } from "./ApiSlice";

const advertApi = ApiSlice.injectEndpoints({
  endpoints: (build) => ({
    getAllAdverts: build.query({
      query: () => "/advert/all/",
    }),

    createAdvert: build.mutation({
      query: (body) => ({
        url: "/advert/create/",
        method: "POST",
        headers: {
          Authorization: "Bearer " + JSON.parse(localStorage.getItem("token")),
        },
        body,
      }),
    }),

    myAdvert: build.query({
      query: () => ({
        url: "/advert/user/",
        method: "GET",
        headers: {
          Authorization: "Bearer " + JSON.parse(localStorage.getItem("token")),
        },
      }),
    }),

    advertFavorite: build.mutation({
      query: (id) => ({
        url: `/advert/adverts/favorite/${id}/`,
        method: "POST",
        headers: {
          Authorization: "Bearer " + JSON.parse(localStorage.getItem("token")),
        },
      }),
    }),

    favoriteAdvert: build.query({
      query: () => ({
        url: `/advert/my_favorite_advets/`,
        method: "GET",
        headers: {
          Authorization: "Bearer " + JSON.parse(localStorage.getItem("token")),
        },
      }),
    }),
  }),
});

export const {
  useGetAllAdvertsQuery,
  useCreateAdvertMutation,
  useAdvertFavoriteMutation,
  useFavoriteAdvertQuery,
  useMyAdvertQuery,
} = advertApi;

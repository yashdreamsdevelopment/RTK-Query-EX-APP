import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiResources = {
  baseUrl: "https://jsonplaceholder.typicode.com/",
  users: "users",
  posts: "posts",
  todos: "todos",
};

export const jsonFakeAPI = createApi({
  reducerPath: "jsonFakeAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: () => "users",
    }),
    getSingleUser: builder.query({
      query: (id) => `users/${id}`,
    }),
    getAllPosts: builder.query({
      query: () => "posts",
    }),
    getPostsOfUser: builder.query({
      query: (id) => `posts?userId=${id}`,
    }),
    getSinglePost: builder.query({
      query: (id) => `posts/${id}`,
    }),
    getPostComments: builder.query({
      query: (id) => `posts/${id}/comments`,
    }),
  }),
});

export const {
  useGetAllUsersQuery,
  useGetAllPostsQuery,
  useGetSingleUserQuery,
  useGetPostCommentsQuery,
  useGetSinglePostQuery,
  useGetPostsOfUserQuery,
} = jsonFakeAPI;

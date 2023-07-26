import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface Notes {
  title: string;
  note: string;
  user: {
    email: string;
  };
}

export const notesApi = createApi({
  reducerPath: "notes",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api",
    credentials: "include",
  }),
  endpoints: (builder) => ({
    getAllNotes: builder.query<Notes[], void>({
      query: () => ({
        url: "/notes",
      }),
    }),
  }),
});

export const { useGetAllNotesQuery } = notesApi;

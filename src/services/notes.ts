import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface Note {
  _id: string;
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
    getAllNotes: builder.query<Note[], void>({
      query: () => ({
        url: "/notes",
      }),
    }),
    getSingleNote: builder.query<Note, string>({
      query: (id) => ({
        url: `/notes/${id}`,
      }),
    }),
  }),
});

export const { useGetAllNotesQuery, useGetSingleNoteQuery } = notesApi;

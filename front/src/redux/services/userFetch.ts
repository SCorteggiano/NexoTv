import { IUser } from "@/interfaces";
import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const userFetch = createApi({
    reducerPath: 'userFetch',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000' }),

    endpoints: (build) => ({
        getUser: build.query<IUser[], string>({
            query: () => `users`,
        }),
        getUserById: build.query<IUser, {id: string}>({
            query: ({id}) => `users/${id}`,
        })
    }),
})

export const {useGetUserQuery, useGetUserByIdQuery} = userFetch
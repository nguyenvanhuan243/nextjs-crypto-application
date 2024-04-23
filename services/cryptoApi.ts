"use client";

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoApiHeaders = {
  "X-RapidAPI-Key": process.env.NEXT_PUBLIC_COINRANKING_RAPID_API_KEY || "f9469087eamsh2038fc6e1292049p1e1ba9jsn4593ccceaa6a",
  "X-RapidAPI-Host": process.env.NEXT_PUBLIC_COINRANKING_RAPID_API_HOST || "coinranking1.p.rapidapi.com",
};

const baseUrl = process.env.NEXT_PUBLIC_COINRANKING_RAPID_API_URL || "https://coinranking1.p.rapidapi.com";

const createRequest = (url: string) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
  reducerPath: "cryptoAPI",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => createRequest(`/coins?limit=${count}`),
    }),
    getCryptoFullList: builder.query({
      query: () => createRequest("/coins"),
    }),
  }),
});

export const { useGetCryptosQuery, useGetCryptoFullListQuery } = cryptoApi;

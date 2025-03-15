import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IPost } from '../../interfaces/post.interface'

export const PostAPI= createApi({
  reducerPath: 'PostAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
  tagTypes: ['Post'],
  endpoints: (build) => ({
    fetchPosts: build.query<IPost[], {page:number, per_page:number}>({
        query: ({page, per_page}) => ({
            url: 'posts',
            params:{
                page,
                per_page
            } 
        })
    })
  }),
})

export const {useFetchPostsQuery} = PostAPI


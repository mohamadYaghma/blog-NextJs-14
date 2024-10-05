// import { Suspense } from "react";
// import Spinner from "@/ui/Spinner";
import PostList from "../-components/PostList";
import { getPosts } from "@/services/PostServices";
import setCookieOnReq from "@/utils/setCookieOnReq";
import { cookies } from "next/headers";
import queryString from 'query-string';

// ppr start
// every section get in Suspense is dynamic rendring and other side static
// export const experimental_ppr = true; //static + dynamic => ppr
// end ppr

export default async function BlogsPage({searchParams }) {

      const queries = queryString.stringify(searchParams);

      // get data from cookies
      const cookieStore = cookies();
      const options = setCookieOnReq(cookieStore);
        // end cook
        // shot options in get post for get data => Like and bookmark and comment
      const posts = await getPosts(queries,options);

  return <PostList posts={posts}/>
}

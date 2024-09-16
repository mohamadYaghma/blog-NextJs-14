// import { Suspense } from "react";
// import Spinner from "@/ui/Spinner";
import PostList from "../-components/PostList";
import { getPosts } from "@/services/PostServices";
import setCookieOnReq from "@/utils/setCookieOnReq";
import { cookies } from "next/headers";

// ppr start
// evry section get in Suspense is dynamic rendring and other side static
// export const experimental_ppr = true; //static + dynamic => ppr
// end ppr

export default async function BlogsPage() {
      // get data from cookies
      const cookieStore = cookies();
      const options = setCookieOnReq(cookieStore);
        // end cook
        // shot options in get post for get data => Like and bookmark and comment
      const posts = await getPosts(options);

  return (
    <div>
      <h1 className="text-secondary-500 mb-4">لیست بلاگ ها</h1>
      {/* <Suspense fallback={<Spinner />}> */}
        <PostList posts={posts}/>
      {/* </Suspense> */}
    </div>
  );
}

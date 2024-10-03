import { getPosts } from "@/services/PostServices";
import setCookieOnReq from "@/utils/setCookieOnReq";
import PostList from "app/blogs/-components/PostList";
import { cookies } from "next/headers";
import queryString from "query-string";

export default async function Category({ params , searchParams}) {

  const { categorySlug } = params;

      const queries = queryString.stringify(searchParams+ '&' +`categorySlug=${categorySlug}`);
      const cookieStore = cookies();
      const options = setCookieOnReq(cookieStore);
      const posts = await getPosts(queries ,options);

  return (
    <div>
      {posts.length === 0 ? (
        <p className="text-ls text-secondary-600">
          پستی در این دسته بندی پیدا نشد !
        </p>
      ) : (
        <PostList posts={posts}/>
      )}
    </div>
  );
}

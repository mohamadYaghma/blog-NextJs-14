import { getPosts } from "@/services/PostServices";
import setCookieOnReq from "@/utils/setCookieOnReq";
import PostList from "app/blogs/-components/PostList";
import { cookies } from "next/headers";
import queryString from "query-string";

export default async function Category({ params, searchParams }) {
  const { categorySlug } = params;
  const queries = queryString.stringify(searchParams) 
    ? `?${queryString.stringify(searchParams)}&categorySlug=${categorySlug}`
    : `?categorySlug=${categorySlug}`;
    
  const cookieStore = cookies();
  const options = setCookieOnReq(cookieStore);

  try {
    const posts = await getPosts(queries, options);

    return (
      <div>
        {posts && Array.isArray(posts) && posts.length > 0 ? (
          <PostList posts={posts} />
        ) : (
          <p className="text-ls text-secondary-600">
            پستی در این دسته‌بندی پیدا نشد!
          </p>
        )}
      </div>
    );
  } catch (error) {
    console.error("Error fetching posts:", error);
    return (
      <div>
        <p className="text-ls text-red-600">خطایی در دریافت پست‌ها رخ داد!</p>
      </div>
    );
  }
}

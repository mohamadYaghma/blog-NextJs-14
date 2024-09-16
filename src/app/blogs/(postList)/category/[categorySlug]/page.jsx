import PostList from "app/blogs/-components/PostList";

export default async function Category({ params }) {
  const { categorySlug } = params;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/post/list?categorySlug=${categorySlug}`
  );
  const { data } = await res.json();
  const { posts } = data || {};

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

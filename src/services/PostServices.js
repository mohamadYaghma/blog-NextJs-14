import http from "./httpServices"

export async function getPostBySlug(slug){
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/post/slug/${slug}`
    )
    const {data} = await res.json()
    const {post} = data || {} 
    return post
}

export async function getPosts(queries, options) {
    const url = `${process.env.NEXT_PUBLIC_BASE_URL}/post/list${queries ? `?${queries}` : ''}`;
    console.log("Request URL:", url);
  
    try {
      const res = await fetch(url, options);
  
      if (!res.ok) {
        throw new Error("Failed to fetch posts");
      }
  
      const { data } = await res.json();
      const { posts } = data || {};
  
      return posts;
    } catch (error) {
      console.error("Error fetching posts:", error);
      return [];
    }
  }
  
export async function likePostApi(postId){
    return http.post(`/post/like/${postId}`).then(({data})=>data.data)
}

export async function bookmarkPostApi(postId){
    return http.post(`/post/bookmark/${postId}`).then(({data})=>data.data)
}
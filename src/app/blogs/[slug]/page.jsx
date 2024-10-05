import { getPostBySlug, getPosts } from "@/services/PostServices";
import Image from "next/image"
import { notFound } from "next/navigation";
import RelatedPost from "../-components/RelatedPost";

// ssg
export const dynamicParams = false;
export async function generateStaticParams() {
  const posts = await getPosts();
  const slugs = posts.map((post) => ({ slug: post.slug }));
  return slugs;
}
// metaData
export async function generateMetadata({params}){
    const post = await getPostBySlug(params.slug);

    return{
        title:`پست ${post.title}` ,
    }
}
// start
export default async function singlePost({params}) {

    const post = await getPostBySlug(params.slug);
    if (!post) notFound();

    return (
        <div className="text-secondary-600 max-w-screen-md mx-auto">
            <h1 className="text-secondary-700 text-2xl font-bold mb-8">
                {post.title}
            </h1>
            <p className="mb-4">{post.briefText}</p>
            <p className="mb-8">{post.text}</p>
            <div className="relative aspect-video overflow-hidden rounded-lg mb-10">
                <Image 
                    className="object-cover object-center hover:scale-110 transition-all duration-300 ease-out"
                    fill
                    src={post.coverImageUrl}
                />
            </div>
            {post.related.length>0 && <RelatedPost posts={post.related} /> }
        </div>
    )
}

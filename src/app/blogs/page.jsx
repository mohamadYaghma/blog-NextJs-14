import { Suspense } from "react";
import PostList from "./-components/PostList";
import Spinner from "@/ui/Spinner";

export default async function BlogsPage() {
  return (
    <div>
        
        <h1 className="text-secondary-500 mb-4">لیست بلاگ ها</h1>    
        <Suspense fallback={<Spinner />}>
          <PostList />
        </Suspense>
        
    </div>
  )
}

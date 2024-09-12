import { Suspense } from "react";
import Spinner from "@/ui/Spinner";
import PostList from "../-components/PostList";


export const experimental_ppr = true ;

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

import React, { Suspense } from "react";
import PostsTable from "./_/components/PostsTable";
import Spinner from "@/ui/Spinner";
import Search from "@/ui/search";
import { CreatePost } from "./_/components/Buttons";
import queryString from "query-string";

export default function Page({searchParams}) {
  const query = queryString.stringify(searchParams);

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-secondary-700 mb-12 items-center">
        <h1 className="text-xl mb-8 text-secondary-600">مدیریت پست ها :</h1>
        <Search />
        <CreatePost />
      </div>
      <Suspense fallback={<Spinner />} key={query}>
        <PostsTable query={query}/>
      </Suspense>
    </div>
  );
}
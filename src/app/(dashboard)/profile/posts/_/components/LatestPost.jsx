import React from "react";
import PostsTable from "./PostsTable";

export default function LatestPost() {
  const query = "sort=latest&limit=4";
  return <PostsTable query={query} />
}

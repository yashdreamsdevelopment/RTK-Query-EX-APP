import React from "react";
import { useGetAllPostsQuery } from "../services/api/jsonFakeAPI";
import PostCard from "./PostCard";
import { useSearchParams } from "react-router-dom";

const Posts = () => {
  const [searchParams] = useSearchParams();
  console.log(searchParams.get("userId"));
  const { data, isFetching, isLoading, isSuccess, error } =
    useGetAllPostsQuery();

  return (
    <div>
      <div className="p-2 text-center capitalize">
        {isLoading && <h2 className="text-lg text-yellow-600">Loading...</h2>}
        {isFetching && <h2 className="text-lg text-green-600">Fetching...</h2>}
        {error && (
          <h2 className="text-lg text-red-600">Something went wrong</h2>
        )}
      </div>

      <div className="grid grid-cols-4 gap-4 py-5">
        {isSuccess &&
          data.map((post) => (
            <PostCard key={post.id} post={post} isIndividual={false} />
          ))}
      </div>
    </div>
  );
};

export default Posts;

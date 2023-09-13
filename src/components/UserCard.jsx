import React from "react";
import { useGetPostsOfUserQuery } from "../services/api/jsonFakeAPI";
import { Link } from "react-router-dom";

const UserCard = ({ user }) => {
  const {
    id,
    name,
    username,
    email,
    company: { name: cName },
  } = user;

  const { data, isLoading, isSuccess, error } = useGetPostsOfUserQuery(id);

  return (
    <div className="border rounded p-3">
      <div className="mb-3">
        <h3 className="text-lg mb-1 font-bold">{name}</h3>
        <span className="text-xs bg-slate-900 border border-slate-950 rounded py-1 px-3">
          @{username}
        </span>
      </div>

      <div className="space-y-2">
        <a
          href={`mailto:${email}`}
          className="text-base flex items-center gap-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect width="20" height="16" x="2" y="4" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
          </svg>
          <span>{email}</span>
        </a>
        <Link
          to={`/posts?userId=4`}
          className="text-base flex items-center gap-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
            <path d="M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4Z" />
          </svg>
          <span>Posts {isSuccess && data.length}</span>
        </Link>

        <p className="italic text-base">Works in {cName}</p>
      </div>
    </div>
  );
};

export default UserCard;

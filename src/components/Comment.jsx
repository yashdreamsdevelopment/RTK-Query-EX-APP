import React from "react";

const Comment = ({ comment }) => {
  const { postId, id, name, email, body } = comment;
  return (
    <article className="mb-5">
      <a href="#" className="flex items-center gap-2 capitalize mb-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="10" r="3" />
          <path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662" />
        </svg>
        <span className="text-base">{email.split("@")[0]}</span>
      </a>
      <h2 className="text-lg font-semibold capitalize mb-1">{name}</h2>
      <p className="text-base text-slate-500">{body}</p>
    </article>
  );
};

export default Comment;

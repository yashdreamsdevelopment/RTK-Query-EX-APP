import { Link } from "react-router-dom";
import {
  useGetSingleUserQuery,
  useGetPostCommentsQuery,
} from "../services/api/jsonFakeAPI";

const PostCard = ({ post, isIndividual }) => {
  const { userId, id, title, body } = post;

  const { isLoading, data, error, isSuccess } = useGetSingleUserQuery(userId);
  const {
    data: cData,
    error: cError,
    isSuccess: cIsSuccess,
  } = useGetPostCommentsQuery(id);

  return (
    <div
      className={`${
        !isIndividual ? "border border-slate-700" : ""
      } rounded p-3`}
    >
      {isLoading && <h2>Loading...</h2>}
      {error && <h2>Anonomous</h2>}

      {isSuccess && (
        <a href="/" className="flex items-center gap-2 capitalize mb-3">
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
          <span>{data.name}</span>
        </a>
      )}

      <article className="space-y-3">
        <h2
          className={`${
            isIndividual ? "text-4xl" : "text-lg"
          } capitalize font-semibold`}
        >
          {title}
        </h2>
        <div className="flex items-center gap-4">
          <a href="#" className="flex items-center gap-1 text-slate-300">
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
              <path d="M7 10v12" />
              <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" />
            </svg>
            <span className="text-xs mb-0">
              {Math.floor(Math.random() * 100)}
            </span>
          </a>
          {!isIndividual ? (
            <Link
              to={`${id}/comments`}
              className="flex items-center gap-1 text-slate-300"
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
                <path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z" />
              </svg>
              <span className="text-xs mb-0">{cIsSuccess && cData.length}</span>
            </Link>
          ) : (
            ""
          )}

          <a href="#" className="flex items-center gap-1 text-slate-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m2 9 3-3 3 3" />
              <path d="M13 18H7a2 2 0 0 1-2-2V6" />
              <path d="m22 15-3 3-3-3" />
              <path d="M11 6h6a2 2 0 0 1 2 2v10" />
            </svg>
            <span className="text-xs mb-0">
              {Math.floor(Math.random() * 100)}
            </span>
          </a>
        </div>
        <p
          className={`text-sm text-slate-500 line-clamp-4 ${
            isIndividual ? "line-clamp-none text-xl" : ""
          }`}
        >
          {body}
        </p>
      </article>
    </div>
  );
};

export default PostCard;

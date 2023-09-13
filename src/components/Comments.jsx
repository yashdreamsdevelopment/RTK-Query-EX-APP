import { useParams } from "react-router-dom";
import {
  useGetSinglePostQuery,
  useGetPostCommentsQuery,
} from "../services/api/jsonFakeAPI";
import PostCard from "./PostCard";
import Comment from "./Comment";

const Comments = () => {
  const { id } = useParams();

  const {
    data: pData,
    isLoading: pIsLoading,
    error: pError,
    isSuccess: pIsSuccess,
  } = useGetSinglePostQuery(id);

  const {
    data: cData,
    isLoading: cIsLoading,
    error: cError,
    isSuccess: cIsSuccess,
  } = useGetPostCommentsQuery(id);

  return (
    <div className="grid grid-cols-2 gap-5 relative">
      <div className="sticky top-[200px]">
        {pIsSuccess && <PostCard post={pData} isIndividual={true} />}
      </div>
      <div>
        <h2 className="text-2xl capitalize font-bold">
          Comments ({cIsSuccess && cData.length})
        </h2>
        <hr className="my-5" />
        {cIsSuccess &&
          cData.map((comment) => (
            <Comment key={comment.id} comment={comment} />
          ))}
      </div>
    </div>
  );
};

export default Comments;

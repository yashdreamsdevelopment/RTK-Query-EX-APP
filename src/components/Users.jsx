import { useGetAllUsersQuery } from "../services/api/jsonFakeAPI";
import UserCard from "./UserCard";

const Users = () => {
  const { data, isFetching, isLoading, isSuccess, error } =
    useGetAllUsersQuery();

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
          data.map((user) => <UserCard key={user.id} user={user} />)}
      </div>
    </div>
  );
};

export default Users;

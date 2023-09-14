import "./App.css";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import { useGetAllUsersQuery } from "./services/api/jsonFakeAPI";
import Home from "./components/Home";
import Posts from "./components/Posts";
import Dashboard from "./components/Dashboard";
import Users from "./components/Users";
import Comments from "./components/Comments";
import Temp from "./components/Temp";

function App() {
  return (
    <BrowserRouter>
      <h1 className="text-4xl text-center font-semibold">RTK Query Example</h1>

      <div className="space-x-2 my-8 text-center">
        <Link
          to="/"
          className="border py-2 px-3 capitalize rounded-md text-slate-300 bg-slate-800"
        >
          Home
        </Link>
        <Link
          to="/users"
          className="border py-2 px-3 capitalize rounded-md text-slate-300 bg-slate-800"
        >
          Users
        </Link>
        <Link
          to="/posts"
          className="border py-2 px-3 capitalize rounded-md text-slate-300 bg-slate-800"
        >
          Posts
        </Link>
      </div>

      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route index element={<Home />} />
          <Route path="/users">
            <Route index element={<Users />} />
            <Route path=":id/posts" element={<Temp />} />
          </Route>
          <Route path="/posts">
            <Route index element={<Posts />} />
            <Route path=":id/comments" element={<Comments />} />
            {/* <Route path="?userId=4" element={<Temp />} /> */}
          </Route>
        </Route>
      </Routes>
      <Outlet />
    </BrowserRouter>
  );
}

export default App;

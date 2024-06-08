import { Route, Routes } from "react-router-dom";
import Wrapper from "./component/Wrapper";
import Home from "./page/Home";
import Login from "./page/Login";
import Register from "./page/Register";
import Search from "./page/Search";
import Details from "./page/Details";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Wrapper />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/search" element={<Search />} />
          <Route path="/details" element={<Details />}>
            <Route path=":id" element={<Details />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;

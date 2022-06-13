import "./App.css";
import Main from "./Main";
import { Route, Routes } from "react-router-dom";
import Category from "./Category";
import Login from "./Login";
import Signup from "./Singup";
import Modify from "./Modify";
import Add from "./Add";
import Detail from "./Detail";
import MyRecife from "./MyRecife";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/category" element={<Category />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/modify" element={<Modify />} />
        <Route path="/add" element={<Add />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/myrecife" element={<MyRecife />} />
      </Routes>
    </div>
  );
}

export default App;

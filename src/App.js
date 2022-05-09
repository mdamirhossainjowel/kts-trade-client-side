import "./App.css";
import Footer from "./Component/Footer/Footer";
import Header from "./Component/Header/Header";
import Home from "./Component/Home/Home/Home";
import { Route, Routes } from "react-router-dom";
import ManageProducts from "./Component/ManageProducts/ManageProducts";
import Inventory from "./Component/Inventory/Inventory";
import AddItems from "./Component/AddItems/AddItems";
import Login from "./Component/Login&Registration/Login";
import Registration from "./Component/Login&Registration/Registration";
import RequireAuth from "./Component/Shared/RequireAuth";
import PagenotFound from "./Component/PagenotFound/PagenotFound";
import Blogs from "./Component/Blogs/Blogs";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route
          path="/inventory"
          element={
            <RequireAuth>
              <Inventory></Inventory>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/additems"
          element={
            <RequireAuth>
              <AddItems></AddItems>
            </RequireAuth>
          }
        ></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Registration></Registration>}></Route>

        <Route
          path="items/:item_id"
          element={
            <RequireAuth>
              <ManageProducts></ManageProducts>
            </RequireAuth>
          }
        ></Route>
        <Route path="*" element={<PagenotFound></PagenotFound>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;

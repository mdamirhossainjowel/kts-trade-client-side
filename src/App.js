import "./App.css";
import Footer from "./Component/Footer/Footer";
import Header from "./Component/Header/Header";
import Home from "./Component/Home/Home/Home";
import { Route, Routes } from "react-router-dom";
import ManageProducts from "./Component/ManageProducts/ManageProducts";
import Inventory from "./Component/Inventory/Inventory";
import AddItems from "./Component/AddItems/AddItems";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/inventory" element={<Inventory></Inventory>}></Route>
        <Route path="/additems" element={<AddItems></AddItems>}></Route>

        <Route
          path="items/:item_id"
          element={<ManageProducts></ManageProducts>}
        ></Route>
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
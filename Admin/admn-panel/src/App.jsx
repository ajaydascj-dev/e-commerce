import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Landing, Error, Login, ProtectedRoute } from "./pages";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  SharedLayout,
  Products,
  Users,
  Stats,
  Orders,
  Settings,
} from "./pages/dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            // <ProtectedRoute>
              <SharedLayout />
            // </ProtectedRoute>
          }
        >
          <Route index element={<Stats />} />
          <Route path="Users" element={<Users />} />
          <Route path="Products" element={<Products />} />
          <Route path="Orders" element={<Orders />} />
          <Route path="Profile" element={<Settings />} />
        </Route>
        <Route path="landing" element={<Landing />} />
        <Route path="Login" element={<Login />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <ToastContainer position="top-center" />
    </BrowserRouter>
  );
}

export default App;

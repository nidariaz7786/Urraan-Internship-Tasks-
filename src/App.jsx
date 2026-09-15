import { BrowserRouter, Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar"
import Users from "./pages/Users"
import UserDetails from "./pages/UserDetails"
import AddUser from "./pages/AddUser"
import EditUser from "./pages/EditUser"

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route path="/" element={<Users />} />

        <Route path="/users/:id" element={<UserDetails />} />

        <Route path="/add-user" element={<AddUser />} />

        <Route path="/users/:id/edit" element={<EditUser />} />

      </Routes>

    </BrowserRouter>
  )
}

export default App
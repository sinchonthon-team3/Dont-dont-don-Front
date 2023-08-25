import React from "react"
import { Route, Routes } from "react-router-dom"
import Main from "./../pages/Main"
import Signup from "../pages/Signup"
import Start from "../pages/Start"
import Login from "../pages/Login"

function Router() {
  return (
    <Routes>
      <Route path="/login" element={<Main />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/" element={<Start />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  )
}

export default Router

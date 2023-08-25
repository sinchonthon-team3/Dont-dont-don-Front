import React from "react"
import { Route, Routes } from "react-router-dom"
import Main from "./../pages/Main"
import Signup from "../pages/Signup"

function Router() {
  return (
    <Routes>
      <Route path="/login" element={<Main />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  )
}

export default Router

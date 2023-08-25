import React from "react"
import { Route, Routes } from "react-router-dom"
import Main from "./../pages/Main"
import Signup from "../pages/Signup"
import Start from "../pages/Start"
import Drink from "../pages/Drink"
import Travel from "../pages/Travel"

function Router() {
  return (
    <Routes>
      <Route path="/login" element={<Main />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/" element={<Start />} />
      <Route path="/main" element={<Main />} />
      <Route path="/drink" element={<Drink />} />
      <Route path="/travel" element={<Travel />} />
    </Routes>
  )
}

export default Router

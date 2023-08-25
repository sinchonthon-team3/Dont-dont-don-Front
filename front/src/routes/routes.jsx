import React from "react"
import { Route, Routes } from "react-router-dom"
import Main from "./../pages/Main"
import Signup from "../pages/Signup"
import Start from "../pages/Start"
import Login from "../pages/Login"
import DrinkDetail from "../pages/DrinkDetail"
import TravelDetail from "../pages/TravelDetail"

function Router() {
  return (
    <Routes>
      <Route path="/main" element={<Main />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/" element={<Start />} />
      <Route path="/main" element={<Main />} />
      <Route path="/drink/detail" element={<DrinkDetail />} />
      <Route path="/travel/detail" element={<TravelDetail />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  )
}

export default Router

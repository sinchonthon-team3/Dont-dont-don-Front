import React from "react"
import { Route, Routes } from "react-router-dom"
import Main from "./../pages/Main"
import Signup from "../pages/Signup"
import Start from "../pages/Start"
import Drink from "../pages/Drink"
import Travel from "../pages/Travel"
import Login from "../pages/Login"
import TravelParticipants from "../pages/TravelParticipants"
import DrinkParticipants from "../pages/DrinkParticipants"

function Router() {
  return (
    <Routes>
      <Route path="/main" element={<Main />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/" element={<Start />} />
      <Route path="/main" element={<Main />} />
      <Route path="/drink" element={<Drink />} />
      <Route path="/drink/participants" element={<DrinkParticipants />} />
      <Route path="/travel" element={<Travel />} />
      <Route path="/travel/participants" element={<TravelParticipants />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  )
}

export default Router

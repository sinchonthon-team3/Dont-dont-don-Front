import React from "react"
import { Route, Routes } from "react-router-dom"
import Main from "./../pages/Main"
import Signup from "../pages/Signup"
import Start from "../pages/Start"
import Login from "../pages/Login"
import DrinkDetail from "../pages/DrinkDetail"
import TravelDetail from "../pages/TravelDetail"
import TravelParticipants from "../pages/TravelParticipants"
import DrinkParticipants from "../pages/DrinkParticipants"
import RandomParticipants from "../pages/RandomParticipants"
import ViewDon from "../pages/ViewDon"

function Router() {
  return (
    <Routes>
      <Route path="/main" element={<Main />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/" element={<Start />} />
      <Route path="/main" element={<Main />} />
      <Route path="/drink/detail" element={<DrinkDetail />} />
      <Route path="/travel/detail" element={<TravelDetail />} />
      <Route path="/drink/participants" element={<DrinkParticipants />} />
      <Route path="/travel/participants" element={<TravelParticipants />} />
      <Route path="/random/participants" element={<RandomParticipants />} />
      <Route path="/login" element={<Login />} />
      <Route path="/view" element={<ViewDon />} />
    </Routes>
  )
}

export default Router

import React from "react"
import { Route, Routes } from "react-router-dom"
import Main from "./../pages/Main"
import MainMenu from "../pages/MainMenu"
import Signup from "../pages/Signup"
import Start from "../pages/Start"
import Login from "../pages/Login"
import DrinkDetail from "../pages/DrinkDetail"
import TravelDetail from "../pages/TravelDetail"
import TravelParticipants from "../pages/TravelParticipants"
import DrinkParticipants from "../pages/DrinkParticipants"
import RandomParticipants from "../pages/RandomParticipants"
import ViewDon from "../pages/ViewDon"
import RandomDetail from "../pages/RandomDetail"
import DrinkResult from "../pages/DrinkResult"
import TravelResult from "../pages/TravelResult"

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Start />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      <Route path="/main" element={<Main />} />
      <Route path="/main" element={<Main />} />
      <Route path="/mainmenu" element={<MainMenu />} />
      <Route path="/drink/detail" element={<DrinkDetail />} />
      <Route path="/travel/detail" element={<TravelDetail />} />
      <Route path="/random/detail" element={<RandomDetail />} />
      <Route path="/drink/participants" element={<DrinkParticipants />} />
      <Route path="/travel/participants" element={<TravelParticipants />} />
      <Route path="/random/participants" element={<RandomParticipants />} />
      <Route path="/drink/result" element={<DrinkResult />} />
      <Route path="/travel/result" element={<TravelResult />} />
      <Route path="/view" element={<ViewDon />} />
    </Routes>
  )
}

export default Router

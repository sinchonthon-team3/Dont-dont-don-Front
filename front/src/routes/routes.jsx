import React from "react"
import { Route, Routes } from "react-router-dom"
import Main from "./../pages/Main"
import Start from "../pages/Start"

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Start />} />
    </Routes>
  )
}

export default Router

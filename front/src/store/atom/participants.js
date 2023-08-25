import { atom } from "recoil"

import localStorageEffect from "../localStorageEffect"

const participants = atom({
  key: "participants",
  default: [],
  effects: [localStorageEffect("participants")],
})

export default participants

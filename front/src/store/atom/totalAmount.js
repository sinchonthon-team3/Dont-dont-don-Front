import { atom } from "recoil"

import localStorageEffect from "../localStorageEffect"

const totalAmount = atom({
  key: "totalAmount",
  default: 0,
  effects: [localStorageEffect("totalAmount")],
})

export default totalAmount

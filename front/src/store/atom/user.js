import { atom } from "recoil"
import localStorageEffect from "../localStorageEffect"

const user = atom({
  key: "user",
  default: {},
  effects: [localStorageEffect("user")],
})

export default user

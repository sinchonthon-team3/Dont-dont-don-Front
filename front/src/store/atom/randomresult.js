import { atom } from "recoil"
import localStorageEffect from "../localStorageEffect"

const randomResult = atom({
  key: "randomResult",
  default: {},
  effects: [localStorageEffect("randomResult")],
})

export default randomResult

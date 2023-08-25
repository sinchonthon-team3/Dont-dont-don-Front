import { atom } from "recoil"
import localStorageEffect from "../localStorageEffect"

const travelResult = atom({
  key: "travelResult",
  default: {},
  effects: [localStorageEffect("travelResult")],
})

export default travelResult

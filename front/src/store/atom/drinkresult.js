import { atom } from "recoil"
import localStorageEffect from "../localStorageEffect"

const drinkResult = atom({
  key: "drinkResult",
  default: {},
  effects: [localStorageEffect("drinkResult")],
})

export default drinkResult

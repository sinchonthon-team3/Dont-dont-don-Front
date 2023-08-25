import { atom } from "recoil"

const drinkDetail = atom({
  key: "drinkDetail",
  default: [],
})

export const curDrinkDetailName = atom({
  key: "curDrinkDetailName",
  default: undefined,
})

export default drinkDetail

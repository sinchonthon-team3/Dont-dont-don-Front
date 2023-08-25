import { atom } from "recoil"

const travelDetail = atom({
  key: "travelDetail",
  default: [],
})

export const curTravelDetailName = atom({
  key: "curTravelDetailName",
  default: undefined,
})

export default travelDetail

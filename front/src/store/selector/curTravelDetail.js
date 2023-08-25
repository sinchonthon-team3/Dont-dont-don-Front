import { selector } from "recoil"
import travelDetail, { curTravelDetailName } from "./../atom/traveldetail"

const changeTravelDetail = selector({
  key: "changeTravelDetail",

  get: ({ get }) => {
    const data = get(travelDetail)
    const curIndex = get(curTravelDetailName)

    return data.find(item => item.name === curIndex)
  },

  set: ({ set, get }, newValue) => {
    let changeTravelDetail = get(travelDetail)
    const curIndex = get(curTravelDetailName)

    changeTravelDetail = changeTravelDetail.map(detail => {
      if (detail.name === curIndex) {
        return newValue
      } else {
        return detail
      }
    })

    set(travelDetail, changeTravelDetail)
  },
})

export default changeTravelDetail

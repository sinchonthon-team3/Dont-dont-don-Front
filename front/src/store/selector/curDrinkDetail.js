import { selector } from "recoil"
import drinkDetail, { curDrinkDetailName } from "../atom/drinkdetail"

const changeDrinkDetail = selector({
  key: "changeDrinkDetail",

  get: ({ get }) => {
    const data = get(drinkDetail)
    const curIndex = get(curDrinkDetailName)

    return data.find(item => item.name === curIndex)
  },

  set: ({ set, get }, newValue) => {
    let changeDrinkDetail = get(drinkDetail)
    const curIndex = get(curDrinkDetailName)

    changeDrinkDetail = changeDrinkDetail.map(detail => {
      if (detail.name === curIndex) {
        return newValue
      } else {
        return detail
      }
    })

    set(drinkDetail, changeDrinkDetail)
  },
})

export default changeDrinkDetail

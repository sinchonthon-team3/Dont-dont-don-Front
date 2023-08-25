import { useEffect, useState } from "react"
import { styled } from "styled-components"
import theme from "../../styles/theme"
import useSelect from "../../hooks/useSelect"
import { optionEnum } from "./../../constants/optionEnum"
import { useSetRecoilState } from "recoil"
import changeDrinkDetail from "../../store/selector/curDrinkDetail"
import { curDrinkDetailName } from "../../store/atom/drinkdetail"

function EachDetail({ eachDetail }) {
  const [achievement, setAchievement] = useSelect(3)
  const [addition, setAddition] = useSelect(0)
  const [weight_ids, setWeight_ids] = useState([])
  const [content, setContent] = useState([])
  const setChangeDrinkDetail = useSetRecoilState(changeDrinkDetail)
  const setCurIndex = useSetRecoilState(curDrinkDetailName)

  useEffect(() => {
    setCurIndex(eachDetail.name)
    setContent(prev => [...prev, <AddtionBox view={addition === 0 ? 0 : 1}>{optionEnum[addition]}</AddtionBox>])
    setWeight_ids(prev => [...prev, Number(addition)])
  }, [addition])

  useEffect(() => {
    setChangeDrinkDetail(prev => {
      return {
        ...prev,
        weight_ids,
      }
    })
  }, [weight_ids])

  useEffect(() => {
    setCurIndex(eachDetail.name)
    setChangeDrinkDetail(prev => {
      return {
        ...prev,
        achievement: Number(achievement),
      }
    })
  }, [achievement])

  return (
    <EachDetailContainer>
      <Name>{eachDetail.name}</Name>

      <Select defaultValue={3} onChange={setAchievement}>
        <Option view={1} value={1}>
          {optionEnum[1]}
        </Option>
        <Option view={1} value={2}>
          {optionEnum[2]}
        </Option>
        <Option view={1} value={3}>
          {optionEnum[3]}
        </Option>
        <Option view={1} value={4}>
          {optionEnum[4]}
        </Option>
        <Option view={1} value={5}>
          {optionEnum[5]}
        </Option>
      </Select>

      <AdditionContainer>
        {content}
        <Select defaultValue={0} onChange={setAddition}>
          <Option value={0} view={0}>
            없음
          </Option>
          {eachDetail.addition.map((addition, index) => (
            <Option view={1} key={`option${index}`} value={addition.number}>
              {addition.name}
            </Option>
          ))}
        </Select>
      </AdditionContainer>
    </EachDetailContainer>
  )
}

export default EachDetail

const EachDetailContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: start;

  margin-bottom: 35px;
`

const Name = styled.div`
  margin-top: 4px;
  color: ${theme.colors.black};
  ${theme.fontstyles.paragraphKor};
`

const Select = styled.select`
  width: 90px;
  height: 30px;

  border-radius: 6px;
  border: 2px solid ${theme.colors.gray};

  color: ${theme.colors.black};
  ${theme.fontstyles.paragraphKor};
`

const Option = styled.option`
  display: ${props => (props.view ? "block" : "none")};
  width: 90px;
  height: 30px;

  color: ${theme.colors.black};
  ${theme.fontstyles.paragraphKor};
`

const AdditionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`

const AddtionBox = styled.div`
  display: ${props => (props.view ? "block" : "none")};
  width: 90px;
  height: 30px;
  margin-bottom: 8px;
  padding-top: 5px;

  border-radius: 6px;
  border: 2px solid ${theme.colors.gray};

  color: ${theme.colors.black};
  ${theme.fontstyles.paragraphKor};
  text-align: center;
`

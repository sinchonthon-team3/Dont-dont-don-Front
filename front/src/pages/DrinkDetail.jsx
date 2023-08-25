import { styled } from "styled-components"
import theme from "../styles/theme"
import EachDetail from "../components/each/EachDetail"
import { drinkAddition } from "./../constants/addition"
import { useRecoilState, useRecoilValue } from "recoil"
import drinkDetail from "../store/atom/drinkdetail"
import { useEffect } from "react"
import participants from "../store/atom/participants"
import totalAmount from "./../store/atom/totalAmount"
import { request } from "../util/axios"

function DrinkDetail() {
  const [drinkDetails, setDrinkDetails] = useRecoilState(drinkDetail)
  const getParticipants = useRecoilValue(participants)
  const getTotalAmount = useRecoilValue(totalAmount)

  useEffect(() => {
    setDrinkDetails(
      getParticipants.map(participant => ({
        name: participant,
        weight_ids: [],
        addition: drinkAddition,
        achievement: 3,
      })),
    )
  }, [])

  function deleteZero(array) {
    return array.filter(item => item !== 0)
  }

  const onDon = async () => {
    const details = drinkDetails.map(detail => {
      return {
        ...detail,
        weight_ids: deleteZero(detail.weight_ids),
      }
    })

    const body = {
      total_price: getTotalAmount,
      user: details.map(detail => {
        return {
          name: detail.name,
          weight_ids: [...detail.weight_ids, detail.achievement],
        }
      }),
    }

    try {
      const response = await request("post", "/api/don", body)
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <DrinkDetailContainer>
      <Circle />
      <Title>
        술자리
        <DonText>{` DON`}</DonText>
      </Title>
      <TotalMoney>N분의 1 정산시 금액: {getTotalAmount / getParticipants.length}원</TotalMoney>
      <Section>
        <TableTitleRow>
          <Blank />
          <TableTitle>활약상</TableTitle>
          <TableTitle>추가옵션</TableTitle>
        </TableTitleRow>
        {drinkDetails.length > 0 &&
          drinkDetails.map((detail, idx) => <EachDetail key={`detail${idx}`} eachDetail={detail} />)}
      </Section>
      <DonButton onClick={onDon}>
        술자리 <DonTextButton>{` DON`}</DonTextButton>
      </DonButton>
    </DrinkDetailContainer>
  )
}

export default DrinkDetail

const DrinkDetailContainer = styled.div`
  position: relative;
`

const Circle = styled.div`
  position: fixed;
  z-index: -1;

  top: 7%;
  left: 50%;

  transform: translate(-50%, -50%);

  width: 337px;
  height: 337px;
  border-radius: 50%;
  background-color: rgba(0, 69, 255, 0.2);
`

const Title = styled.div`
  margin-top: 52px;
  margin-bottom: 25px;
  color: ${theme.colors.black};
  ${theme.fontstyles.subtitleKor};
  text-align: center;
`

const DonText = styled.span`
  ${theme.fontstyles.DonButtonEng};
`

const TotalMoney = styled.div`
  margin-bottom: 110px;
  color: ${theme.colors.black};

  ${theme.fontstyles.labelKor};
  text-align: center;
`

const Section = styled.section`
  padding: 0 15px;
`

const TableTitleRow = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 5px;
`

const Blank = styled.div`
  width: 10px;
  height: 10px;
`

const TableTitle = styled.div`
  color: ${theme.colors.black};
  ${theme.fontstyles.paragraphKor};
`

const DonButton = styled.div`
  width: 172px;
  height: 54px;

  margin: 0 auto;
  border-radius: 56px;
  background: ${theme.colors.blue80per};
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  padding: 14px;

  color: ${theme.colors.black};
  ${theme.fontstyles.labelKor};
  text-align: center;
`

const DonTextButton = styled.span`
  color: ${theme.colors.black};
  ${theme.fontstyles.labelEng};
`

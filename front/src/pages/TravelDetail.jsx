import { styled } from "styled-components"
import theme from "../styles/theme"
import EachDetail from "../components/each/EachDetail"
import { travelAddition } from "../constants/addition"

function TravelDetail() {
  return (
    <>
      <Title>
        술자리
        <DonText>{` DON`}</DonText>
      </Title>
      <TotalMoney>N분의 1 정산시 금액: ????원</TotalMoney>
      <Section>
        <TableTitleRow>
          <Blank />
          <TableTitle>활약상</TableTitle>
          <TableTitle>추가옵션</TableTitle>
        </TableTitleRow>
        <EachDetail eachDetail={{ name: "김아무개", addition: travelAddition }} />
        <EachDetail eachDetail={{ name: "박아무개", addition: travelAddition }} />
        <EachDetail eachDetail={{ name: "이아무개", addition: travelAddition }} />
        <EachDetail eachDetail={{ name: "최아무개", addition: travelAddition }} />
        <EachDetail eachDetail={{ name: "정아무개", addition: travelAddition }} />
      </Section>
    </>
  )
}

export default TravelDetail

const Title = styled.div`
  margin-top: 10px;
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

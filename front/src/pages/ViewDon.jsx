import { styled } from "styled-components"
import theme from "../styles/theme"
import { useState } from "react"
import { viewdonData } from "../constants/viewdonData"

function ViewDon() {
  const [month, setMonth] = useState(6)

  const plusMonth = () => {
    if (month < 8) setMonth(prev => prev + 1)
  }

  const minusMonth = () => {
    if (month > 6) setMonth(prev => prev - 1)
  }

  return (
    <>
      <Title>{`Don't don't don`}</Title>
      <SubTitle>
        이달의 <DonText>{` DON`}</DonText>
      </SubTitle>
      <MonthBar>
        <Left onClick={minusMonth} blur={month === 6 ? 1 : 0}>
          ◁
        </Left>
        <Year>2023.0{month}</Year>
        <Right onClick={plusMonth} blur={month === 8 ? 1 : 0}>
          ▷
        </Right>
      </MonthBar>
      <DrinkDon>
        <SubTitle>
          술자리 <DonText>{` DON`}</DonText>
        </SubTitle>
        <StatisContainer>
          <DonStatistics>
            <DonLabel>With DON</DonLabel>
            <Value>{viewdonData[month].drink.with}</Value>
          </DonStatistics>
          <DonStatistics>
            <DonLabel>Without DON</DonLabel>
            <Value>{viewdonData[month].drink.without}</Value>
          </DonStatistics>
        </StatisContainer>
      </DrinkDon>
      <TravelDon>
        <SubTitle>
          여행 <DonText>{` DON`}</DonText>
        </SubTitle>
        <StatisContainer>
          <DonStatistics>
            <DonLabel>With DON</DonLabel>
            <Value>{viewdonData[month].travel.with}</Value>
          </DonStatistics>
          <DonStatistics>
            <DonLabel>Without DON</DonLabel>
            <Value>{viewdonData[month].travel.without}</Value>
          </DonStatistics>
        </StatisContainer>
      </TravelDon>
      <RandomDon>
        <SubTitle>
          랜덤 <DonText>{` DON`}</DonText>
        </SubTitle>
        <StatisContainer>
          <DonStatistics>
            <DonLabel>With DON</DonLabel>
            <Value>{viewdonData[month].random.with}</Value>
          </DonStatistics>
          <DonStatistics>
            <DonLabel>Without DON</DonLabel>
            <Value>{viewdonData[month].random.without}</Value>
          </DonStatistics>
        </StatisContainer>
      </RandomDon>
      <WholeDon>
        <SubTitle>
          모든 <DonText>{` DON`}</DonText>
        </SubTitle>
        <StatisContainer>
          <DonStatistics>
            <DonLabel>With DON</DonLabel>
            <Value>{viewdonData[month].whole.with}</Value>
          </DonStatistics>
          <DonStatistics>
            <DonLabel>Without DON</DonLabel>
            <Value>{viewdonData[month].whole.without}</Value>
          </DonStatistics>
        </StatisContainer>
      </WholeDon>
    </>
  )
}

export default ViewDon

const Title = styled.div`
  margin-top: 52px;
  margin-bottom: 4px;
  color: ${theme.colors.blue};
  ${theme.fontstyles.subtitleEng};

  text-align: center;
`

const SubTitle = styled.div`
  color: ${theme.colors.black};
  ${theme.fontstyles.viewDonTitleKor};

  text-align: center;
`

const DonText = styled.span`
  color: ${theme.colors.black};
  ${theme.fontstyles.inputEng};
`

const MonthBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 50%;
  margin: 0 auto;
`

const Left = styled.div`
  margin-right: 2px;
  font-weight: 900;
  color: ${props => (props.blur ? theme.colors.gray : theme.colors.black)};
`

const Right = styled.div`
  margin-left: 2px;
  font-weight: 900;
  color: ${props => (props.blur ? theme.colors.gray : theme.colors.black)};
`

const Year = styled.div`
  color: ${theme.colors.black};
  ${theme.fontstyles.viewDonTitleKor};
`

const DrinkDon = styled.div`
  width: 100%;
  height: 130px;
  margin-top: 16px;
  padding: 17px;

  background-color: ${theme.colors.gray80per};
`

const TravelDon = styled.div`
  width: 100%;
  height: 130px;
  padding: 17px;

  background-color: ${theme.colors.gray50per};
`

const RandomDon = styled.div`
  width: 100%;
  height: 130px;
  padding: 17px;

  background-color: ${theme.colors.gray20per};
`

const WholeDon = styled.div`
  width: 100%;
  height: 130px;
  padding: 17px;

  background: rgba(221, 221, 221, 0.2);
`

const StatisContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 50px;
  margin-top: 20px;
`

const DonStatistics = styled.div`
  display: flex;
`

const DonLabel = styled.div`
  width: 120px;
  color: ${theme.colors.black};
  ${theme.fontstyles.paragraphEng};
  margin-right: 75px;
`

const Value = styled.div`
  color: ${theme.colors.black};
  ${theme.fontstyles.paragraphEng};
`

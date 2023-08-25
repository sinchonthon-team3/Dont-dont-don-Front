import { styled } from "styled-components"
import theme from "../styles/theme"
import { useRecoilValue } from "recoil"
import drinkResult from "./../store/atom/drinkresult"
import EachResult from "../components/each/EachResult"

function DrinkResult() {
  const resultValue = useRecoilValue(drinkResult)

  return (
    <DrinkResultContainer>
      <Circle />
      <Title>
        술자리
        <DonText>{` DON`}</DonText>
      </Title>
      <TotalMoney>N분의 1 정산시 금액: {resultValue.total}원</TotalMoney>
      <Section>
        {resultValue.map((result, idx) => (
          <EachResult key={`result${idx}`} eachResult={result} />
        ))}
      </Section>
      <Total>
        <Key>총액</Key>
        <Value>{resultValue.total}</Value>
      </Total>
    </DrinkResultContainer>
  )
}

export default DrinkResult

const DrinkResultContainer = styled.div`
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
  padding: 0 60px;
`

const Total = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  margin-bottom: 30px;
`

const Key = styled.div`
  color: ${theme.colors.black};
  ${theme.fontstyles.paragraphKor};
`

const Value = styled.div`
  color: ${theme.colors.black};
  ${theme.fontstyles.paragraphKor};
`

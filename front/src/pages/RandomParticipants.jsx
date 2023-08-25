import { styled } from "styled-components"
import theme from "../styles/theme"
import { Link } from "react-router-dom"
import { useRecoilState } from "recoil"
import { useState } from "react"

import participants from "../store/atom/participants"
import totalAmount from "../store/atom/totalAmount"

import add_icon from "../asset/img/add_icon.png"

import EachInput from "../components/each/EachInput"

function RandomParticipants() {
  const [participant, setParticipant] = useRecoilState(participants)
  const [total, setTotal] = useRecoilState(totalAmount)
  const [count, setCount] = useState(4)

  const participantsArr = []

  function registerInfo() {
    const inputs = document.getElementsByClassName("name")
    const money = document.getElementsByClassName("money")

    for (let item of inputs) {
      if (item.value !== "") participantsArr.push(item.value)
    }

    setParticipant(participantsArr)
    setTotal(money[0].value)
  }

  return (
    <Container>
      <Title>
        <TitleKor>랜덤</TitleKor>
        &nbsp;
        <TitleEng>DON</TitleEng>
      </Title>
      <Subtitle>참가인원</Subtitle>
      <InputContainer>
        {new Array(count).fill(0).map((item, idx) => {
          return <EachInput key={idx} />
        })}
      </InputContainer>
      <IconContainer>
        <img src={add_icon} width="38" height="38" alt="추가" onClick={() => setCount(prev => prev + 1)} />
      </IconContainer>
      <Subtitle>정산금액입력</Subtitle>
      <InputContainer>
        <AmountInput placeholder="총금액 입력" className="money" />
      </InputContainer>
      <ButtonContainer>
        <DonButton onClick={registerInfo}>
          <Link to="/random/detail" style={{ textDecoration: "none", color: `${theme.colors.black}` }}>
            <DonButtonEn>DON</DonButtonEn>
            &nbsp;
            <DonButtonKr>하러가기</DonButtonKr>
          </Link>
        </DonButton>
      </ButtonContainer>
    </Container>
  )
}

export default RandomParticipants

const Container = styled.div`
  width: 100dvw;
  height: 100dvh;
  display: flex;
  flex-direction: column;
`

const Title = styled.div`
  margin-top: 52px;
  margin-bottom: 21px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: baseline;
`

const TitleKor = styled.span`
  ${theme.fontstyles.subtitleKor}
  font-weight: 500;
`

const TitleEng = styled.span`
  ${theme.fontstyles.subtitleEng}
  font-weight: 400;
`

const Subtitle = styled.div`
  ${theme.fontstyles.subtitleKor}
  font-weight: 500;
  margin-left: 22px;
`

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 23px;
  margin-top: 11px;
  margin-bottom: 23px;
`

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 22px;
`

const AmountInput = styled.input`
  width: 261px;
  height: 44px;
  background-color: ${theme.colors.gray60per};
  border: none;
  border-radius: 6px;
  padding: 0px 9px;
  ${theme.fontstyles.labelKor}
`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const DonButton = styled.button`
  width: 172px;
  height: 54px;
  border: none;
  border-radius: 56px;
  background-color: ${theme.colors.blue80per};
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  margin-bottom: 39.7px;
`

const DonButtonKr = styled.span`
  ${theme.fontstyles.DonButtonKor}
  font-size: 20px;
`

const DonButtonEn = styled.span`
  ${theme.fontstyles.inputEng}
`

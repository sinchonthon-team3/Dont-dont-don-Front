import { styled } from "styled-components"
import { ReactComponent as Image } from "../../asset/img/clickme.svg"
import theme from "../../styles/theme"

function AfterClick() {
  return (
    <ClickMe>
      <ImageContainer>
        <Image />
      </ImageContainer>
      <DoDonButton>
        <DonText>{`DON `}</DonText>
        하러가기
      </DoDonButton>
      <ViewDonButton>
        그동안의
        <DonText>{` DON`}</DonText>
      </ViewDonButton>
      <Nickname>반갑습니다. 닉네임님</Nickname>
    </ClickMe>
  )
}

export default AfterClick

const ClickMe = styled.div`
  position: relative;
`

const DoDonButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 175px;
  background-color: ${theme.colors.gray60per};

  color: ${theme.colors.black};
  ${theme.fontstyles.DonButtonKor}
`

const ViewDonButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 175px;
  background-color: ${theme.colors.gray40per};

  color: ${theme.colors.black};
  ${theme.fontstyles.DonButtonKor}
`

const DonText = styled.span`
  ${theme.fontstyles.DonButtonEng};
`

const ImageContainer = styled.div`
  position: absolute;
  z-index: 1;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -96%);
`

const Nickname = styled.div`
  margin-top: 90px;
  color: ${theme.colors.black};
  ${theme.fontstyles.labelKor};
  text-align: center;
`

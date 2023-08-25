import { styled, keyframes } from "styled-components"
import theme from "../styles/theme"
import { Link, useNavigate } from "react-router-dom"
import { request } from "../util/axios"
import useInput from "./../hooks/useInput"
import { useSetRecoilState } from "recoil"
import user from "./../store/atom/user"

function Login() {
  const [id, setId] = useInput("")
  const [pw, setPw] = useInput("")

  const setUserInfo = useSetRecoilState(user)
  const navigate = useNavigate()

  const onLogin = async () => {
    try {
      const response = await request("post", "/random1/login/", { username: id, password: pw })

      setUserInfo({
        access: response.access,
      })

      navigate("/main")
    } catch (error) {
      console.log(error)
      alert(error.message)
    }
  }
  return (
    <Container>
      <CircleImg />
      <Title>
        돈, 돈 하지말고
        <br />
        <span style={{ color: "#0045FF" }}>‘돈돈돈’</span>하세요
      </Title>
      <LowerContainer>
        <InputForm>
          <InputContainer>
            <InputLabel htmlFor="id">ID</InputLabel>
            <Input type="text" id="id" value={id} onChange={setId} required />
          </InputContainer>
          <InputContainer>
            <InputLabel htmlFor="pw">PW</InputLabel>
            <Input type="password" id="pw" value={pw} onChange={setPw} required />
          </InputContainer>
        </InputForm>
        <LoginButton onClick={onLogin}>로그인하기</LoginButton>
        <OptionContainer>
          <OptionButton>
            <Link to="/signup" style={{ textDecoration: "none", color: `${theme.colors.blue}` }}>
              가입하기
            </Link>
          </OptionButton>
          <OptionButton>ID/PW찾기</OptionButton>
        </OptionContainer>
      </LowerContainer>
    </Container>
  )
}

export default Login

const Container = styled.div`
  width: 100dvw;
  height: 100dvh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
`

const Title = styled.div`
  ${theme.fontstyles.titleKor}
  color: #102311;
  margin-left: 20px;
  margin-top: 114px;
`

const LowerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

const InputForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 0px 31px;
  gap: 22px;
  width: 100%;
`

const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`

const InputLabel = styled.label`
  ${theme.fontstyles.subtitleEng}
`

const Input = styled.input`
  width: 201px;
  height: 26px;
  border: none;
  background-color: ${theme.colors.gray40per};
  border-bottom: 5px solid ${theme.colors.blue};
  outline: none;
  padding-left: 4px;
`

const LoginButton = styled.button`
  width: 152px;
  height: 54px;
  ${theme.fontstyles.buttonKor}
  color: ${theme.colors.blue};
  border: none;
  border-radius: 56px;
  background-color: ${theme.colors.gray};
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  margin: 21px 0px;
`

const OptionContainer = styled.div`
  width: 100%;
  display: flex;
`

const OptionButton = styled.button`
  ${theme.fontstyles.smallKor}
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${theme.colors.blue};
  border: none;
  background-color: transparent;
  padding-bottom: 13.7px;
  &:active {
    opacity: 0.5;
  }
`

const move = keyframes`
    0% {
        bottom: 581.7px;
        right: 45.3px;
    }

    100% {
        bottom: 304.7px;
        right: -49.87px;
    }
`

const CircleImg = styled.div`
  width: 554px;
  height: 554px;
  background-color: ${theme.colors.gray40per};
  border-radius: 50%;
  position: fixed;
  bottom: 304.7px;
  right: -49.87px;
  animation: ${move} 1.4s ease-out;
  z-index: -1;
`

import { styled } from "styled-components"
import theme from "../styles/theme"
import { useForm } from "react-hook-form"
import { RegEx } from "./../constants/RegEx"
import SignupInput from "../components/input/signupInput"
import { useNavigate } from "react-router-dom"
import { request } from "../util/axios"

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const navigate = useNavigate()

  const onSubmit = async data => {
    try {
      const response = await request("post", "/api/signup", { data })
      console.log(response)

      navigate("/login")
    } catch (error) {
      alert(error.message)
    }
  }

  return (
    <>
      <Subtitle>가입하기</Subtitle>
      <SignupSection onSubmit={handleSubmit(onSubmit)}>
        <SignupInput
          label="닉네임"
          name="nickname"
          type="text"
          minLength={1}
          maxLength={12}
          register={register}
          errors={errors.nickname}
          pattern={RegEx.nickname.pattern}
          errorMessage={RegEx.nickname.errorMessage}
          checkPassword={false}
        />
        <SignupInput
          label="아이디"
          name="id"
          type="text"
          minLength={6}
          maxLength={14}
          register={register}
          errors={errors.id}
          pattern={RegEx.id.pattern}
          errorMessage={RegEx.id.errorMessage}
          checkPassword={false}
        />
        <SignupInput
          label="비밀번호"
          name="password"
          type="password"
          minLength={8}
          maxLength={16}
          register={register}
          errors={errors.password}
          pattern={RegEx.password.pattern}
          errorMessage={RegEx.password.errorMessage}
          checkPassword={false}
        />
        <SignupInput
          label="비밀번호 확인"
          name="checkpassword"
          type="password"
          minLength={8}
          maxLength={16}
          register={register}
          errors={errors.checkpassword}
          pattern={RegEx.password.pattern}
          errorMessage={RegEx.password.errorMessage}
          checkPassword={true}
        />
        <TOS>
          <Checkbox type="checkbox" required />
          <Ment>돈돈돈 이용약관 동의 (필수)</Ment>
        </TOS>
        <SignupButton type="submit">가입하기</SignupButton>
      </SignupSection>
    </>
  )
}

export default Signup

const Subtitle = styled.div`
  margin: 26px 0 52px 18px;

  color: ${theme.colors.blue};
  ${theme.fontstyles.subtitleKor};
`

const SignupSection = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  width: 100%;
  height: 100%;
  padding: 0 35px;
`

const TOS = styled.div`
  display: flex;
  justify-content: center;

  width: 50%;
  margin: 40px 0 20px 0;
`

const Checkbox = styled.input`
  width: 14px;
  height: 14px;
`

const Ment = styled.div`
  margin-left: 5px;
  color: ${theme.colors.black};

  ${theme.fontstyles.smallKor};
  white-space: nowrap;
`

const SignupButton = styled.button`
  width: 152px;
  height: 54px;
  margin-bottom: 25px;

  border: none;
  border-radius: 56px;
  background: ${theme.colors.gray};
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  outline: none;

  color: ${theme.colors.blue};
  ${theme.fontstyles.buttonKor};
`

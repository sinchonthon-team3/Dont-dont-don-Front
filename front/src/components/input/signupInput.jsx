import { styled } from "styled-components"
import theme from "../../styles/theme"

function SignupInput(props) {
  return (
    <InputRow first={props.name === "nickname" ? 1 : 0}>
      <Label>{props.label}</Label>
      <InputContainer>
        <Input
          type={props.type}
          maxLength={props.maxLength}
          {...props.register(props.name, {
            required: {
              value: true,
              message: props.errorMessage,
            },
            minLength: {
              value: props.minLength,
              message: "글자수가 너무 적어요",
            },
            pattern: {
              value: props.pattern,
              message: props.errorMessage,
            },
            validate: {
              check: val => {
                if (!props.checkPassword) return
                if (props.checkPassword() !== val) {
                  return "비밀번호가 일치하지 않습니다"
                }
              },
            },
          })}
        />
        <ErrorIcon>{props.errors ? "X" : null}</ErrorIcon>
      </InputContainer>

      <ErrorMessage>{props.errorMessage}</ErrorMessage>
    </InputRow>
  )
}

export default SignupInput

const InputRow = styled.div`
  display: grid;
  grid-template-areas:
    "label ."
    "input input"
    "error error";
  grid-row-gap: 5px;
  justify-content: flex-start;

  width: 100%;
  margin-bottom: ${props => (props.first ? "90px;" : "15px")};
`

const Label = styled.label`
  grid-area: label;
  color: ${theme.colors.black};

  ${theme.fontstyles.labelKor};
`

const InputContainer = styled.div`
  grid-area: input;
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 241px;
  height: 26px;

  background: ${theme.colors.gray40per};
  border: none;
  border-bottom: 5px solid ${theme.colors.blue};
`

const Input = styled.input`
  width: 190px;
  height: 26px;

  color: ${theme.colors.black};
  background-color: transparent;
  border: none;
  ${theme.fontstyles.inputEng};

  &:focus {
    outline: none;
  }
`

const ErrorMessage = styled.span`
  grid-area: error;

  ${theme.fontstyles.smallKor};
  white-space: pre-line;
`

const ErrorIcon = styled.div`
  margin-right: 10px;
  ${theme.fontstyles.labelEng};
  font-size: 13px;
`

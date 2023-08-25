import { styled } from "styled-components"
import theme from "../../styles/theme"

function InputInfo(props) {
  return (
    <InputRow>
      <Label>{props.label}</Label>
      <Input
        type={props.type}
        maxLength={props.maxLength}
        {...props.register(props.name, {
          required: {
            value: true,
            message: "필수 입력입니다.",
          },
          minLength: {
            value: props.minLength,
            message: "글자수가 너무 적어요",
          },
          pattern: {
            value: props.pattern,
            message: "조건에 맞게 입력해주세요",
          },
        })}
      />
      <ErrorMessage>{props.errors && props.error.message}</ErrorMessage>
    </InputRow>
  )
}

export default InputInfo

const InputRow = styled.div`
  display: grid;
  grid-template-areas:
    "label input"
    ". error";
  grid-row-gap: 5px;
  justify-content: flex-start;

  width: 100%;
  margin-bottom: 10px;
`

const Label = styled.label`
  grid-area: label;
  color: ${theme.colors.blue};
  font: ${theme.fontstyles.labelKor};
`

const Input = styled.input`
  width: 241px;
  height: 26px;

  background-color: ${theme.colors.gray};
  opacity: 0.4;
  border: none;

  color: ${theme.colors.black};
  font: ${theme.fontstyles.inputEng};

  &:focus {
    outline: none;
  }
`

const ErrorMessage = styled.span`
  grid-area: error;
  font: ${theme.fontstyles.smallKor};
  white-space: nowrap;
`

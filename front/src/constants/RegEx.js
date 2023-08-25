export const RegEx = {
  nickname: {
    pattern: /^(?=.*[a-zA-Zㄱ-ㅎㅏ-ㅣ가-힣0-9]).{1,12}$/,
    errorMessage: "특수문자 제외, 최대 12자로 설정해주세요",
  },

  id: {
    pattern: /^(?=.*[a-zA-Z])(?=.*[0-9]).{6,14}$/,
    errorMessage: `6자~14자로 입력해주세요 영문과 숫자를 포함해주세요`,
  },

  password: {
    pattern: /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,16}$/,
    errorMessage: `8자~16자로 입력해주세요 영문과 숫자만 포함해주세요`,
  },
}

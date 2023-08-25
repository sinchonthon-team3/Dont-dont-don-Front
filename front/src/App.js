import { ThemeProvider, styled } from "styled-components"
import GlobalStyle from "./styles/GlobalStyle"
import theme from "./styles/theme"
import Router from "./routes/routes"
import { RecoilRoot } from "recoil"

function App() {
  return (
    <AppContainer>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <RecoilRoot>
          {/* header */}
          <Router />
          {/* footer */}
        </RecoilRoot>
      </ThemeProvider>
    </AppContainer>
  )
}

export default App

const AppContainer = styled.div`
  display: flex;
  flex: 1;

  flex-direction: column;

  max-width: 313px;
`

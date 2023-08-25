import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import styled, { keyframes } from "styled-components"

function Start() {
  const [first, setFirst] = useState(false)
  const [second, setSecond] = useState(false)
  const [thirdFourth, setThirdFourth] = useState(false)
  const [fifthSixth, setFifthSixth] = useState(false)

  const navigate = useNavigate()

  useEffect(() => {
    setTimeout(() => {
      setFirst(true)
    }, 1500)

    setTimeout(() => {
      setSecond(true)
    }, 2500)

    setTimeout(() => {
      setThirdFourth(true)
    }, 3500)

    setTimeout(() => {
      setFifthSixth(true)
    }, 4500)
  }, [])

  setTimeout(() => {
    navigate("/login")
  }, 7000)

  return (
    <Container>
      <MobileContainer>
        <FirstLogo view={first ? 1 : 0}>D</FirstLogo>
        <SecondLogo view={second ? 1 : 0}>on't</SecondLogo>
        <ThirdLogo view={thirdFourth ? 1 : 0}>D</ThirdLogo>
        <FourthLogo view={thirdFourth ? 1 : 0}>on</FourthLogo>
        <FifthLogo view={fifthSixth ? 1 : 0}>D</FifthLogo>
        <SixthLogo view={fifthSixth ? 1 : 0}>on't</SixthLogo>
      </MobileContainer>
    </Container>
  )
}

export default Start

const appear = keyframes`
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
`

const move = keyframes`
    0% {
        left: 97px;
    }

    100% {
        left: 76px;
        color: #0045ff;
    }
`

const Container = styled.div`
  width: 100dvw;
  height: 100dvh;
  justify-content: center;
  align-items: center;
  display: flex;
  justify-content: center;
  align-items: center;
`

const MobileContainer = styled.div`
  width: 313px;
  height: 100%;
  position: relative;
`

const FirstLogo = styled.div`
  display: ${props => (props.view ? "block" : "none")};
  font-family: "GOTHAM_BOLD", sans-serif;
  font-size: 136.096px;
  color: #0045ff;
  animation: ${move} 1s forwards;
  position: absolute;
  bottom: 271.7px;
  left: 76px;
`

const SecondLogo = styled.div`
  display: ${props => (props.view ? "block" : "none")};
  font-family: "GOTHAM_BOLD", sans-serif;
  font-size: 39.652px;
  color: #0045ff;
  animation: ${appear} 1s forwards;
  position: absolute;
  bottom: 307.7px;
  left: 180px;
`

const ThirdLogo = styled.div`
  display: ${props => (props.view ? "block" : "none")};
  font-family: "GOTHAM_BOLD", sans-serif;
  font-size: 136.096px;
  color: #0045ff;
  animation: ${appear} 1s forwards;
  position: absolute;
  bottom: 179.7px;
  left: 97px;
`

const FourthLogo = styled.div`
  display: ${props => (props.view ? "block" : "none")};
  font-family: "GOTHAM_BOLD", sans-serif;
  font-size: 39.652px;
  color: #0045ff;
  animation: ${appear} 1s forwards;
  position: absolute;
  bottom: 215.7px;
  left: 201px;
`

const FifthLogo = styled.div`
  display: ${props => (props.view ? "block" : "none")};
  font-family: "GOTHAM_BOLD", sans-serif;
  font-size: 136.096px;
  color: #0045ff;
  animation: ${appear} 1s forwards;
  position: absolute;
  bottom: 360.7px;
  left: 52px;
`

const SixthLogo = styled.div`
  display: ${props => (props.view ? "block" : "none")};
  font-family: "GOTHAM_BOLD", sans-serif;
  font-size: 39.652px;
  color: #0045ff;
  animation: ${appear} 1s forwards;
  position: absolute;
  bottom: 396.7px;
  left: 156px;
`

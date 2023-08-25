import { styled } from "styled-components"
import theme from "../styles/theme"
import { useRecoilState, useRecoilValue } from "recoil"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  BarController,
  BarElement,
  Filler,
} from "chart.js"
import { Bar } from "react-chartjs-2"

import participants from "../store/atom/participants"
import totalAmount from "../store/atom/totalAmount"

import EachRandomAmount from "../components/each/EachRandomAmount"
import randomResult from "../store/atom/randomresult"
import { useState } from "react"

ChartJS.register(CategoryScale, LinearScale, Tooltip, Legend, BarController, BarElement, Filler)

export const options = {
  responsive: false,
  plugins: {
    title: {
      display: true,
      text: "Chart.js Line Chart",
    },
  },
}

function RandomDetail() {
  const [participant, setParticipant] = useRecoilState(participants)
  const [total, setTotal] = useRecoilState(totalAmount)

  const getRandomResult = useRecoilValue(randomResult)

  const keys = Object.keys(getRandomResult)

  const list = []

  for (let i = 1; i < keys.length; i++) {
    const key = keys[i]
    const value = getRandomResult[key]

    console.log(key, value)
  }

  const labels = [...participant] //x축 기준

  const data = {
    labels,
    datasets: [
      {
        data: [20000, 60000, 4000, 25000],
        label: "정산금액",
        borderColor: `${theme.colors.blue}`,
        backgroundColor: `${theme.colors.blue80per}`,
        fill: true,
      },
    ],
  }

  return (
    <Container>
      <Circle />
      <Title>
        <TitleKor>랜덤</TitleKor>
        &nbsp;
        <TitleEng>DON</TitleEng>
      </Title>
      <HeadlineContainer>
        <Headline>N분의1 정산시 금액: {getRandomResult.normal}원</Headline>
      </HeadlineContainer>
      <ChartContainer>
        <Bar options={options} data={data} width="300" height="300" />
      </ChartContainer>
      <DetailContainer>
        {participant.map((item, idx) => {
          return (
            <DetailLine key={idx}>
              <DetailText>{item}</DetailText>
              <DetailText>{Math.floor((data.datasets[0].data[idx] / total) * 100)}%</DetailText>
              <DetailText>{data.datasets[0].data[idx]}원</DetailText>
            </DetailLine>
          )
        })}
      </DetailContainer>
    </Container>
  )
}

export default RandomDetail

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

const HeadlineContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 44px;
`

const Headline = styled.div`
  ${theme.fontstyles.labelKor}
`

const ChartContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 10px;
`

const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 19px;
  gap: 21px;
  padding-bottom: 25.7px;
`

const DetailLine = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const DetailText = styled.div`
  ${theme.fontstyles.labelKor}
  color: #102311;
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

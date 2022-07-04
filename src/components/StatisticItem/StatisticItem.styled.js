import styled from "styled-components";
import { getRandomHexColor } from 'utils/randomColor';

export const StatisticBox = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-basis: calc(100% / 4 );
  padding: 10px;
  background: linear-gradient(-45deg, ${ getRandomHexColor } 50%, white)
`

export const StatisticLabel = styled.span`
  color: white;
  text-shadow: 1px 1px 1px black;
  font-size: 12px;
`

export const StatisticData = styled.span`
  margin-top: 10px;
  font-size: 18px;
  color: white;
  text-shadow: 1px 1px 1px black;
`
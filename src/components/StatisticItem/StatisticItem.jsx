import {
  StatisticBox,
  StatisticLabel,
  StatisticData,
} from './StatisticItem.styled';

export const StatisticItem = ({ label, percentage }) => {
  return (
    <StatisticBox>
      <StatisticLabel>{label}</StatisticLabel>
      <StatisticData>{percentage}%</StatisticData>
    </StatisticBox>
  );
};

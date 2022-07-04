import PropTypes from 'prop-types';
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

StatisticItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

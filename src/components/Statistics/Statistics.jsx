import PropTypes from 'prop-types';
import { StatisticItem } from 'components/StatisticItem/StatisticItem';
import { uniqueItems } from 'utils/renderUniqueStatisticItem';
import { Container, StatisticsList, Title } from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  const filterArr = uniqueItems(stats);

  return (
    <Container>
      {title && <Title>{title}</Title>}
      <StatisticsList>
        {filterArr.map(({ id, label, percentage }) => {
          return (
            <StatisticItem key={id} label={label} percentage={percentage} />
          );
        })}
      </StatisticsList>
    </Container>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

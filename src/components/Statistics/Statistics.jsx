import { Container, StatisticsList, Title } from './Statistics.styled';
import { StatisticItem } from 'components/StatisticItem/StatisticItem';
import { uniqueItems } from 'utils/renderUniqueStatisticItem';

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

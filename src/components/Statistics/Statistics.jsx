import PropTypes from 'prop-types';
import { StatList, StatItem, StatText, StatValue } from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <StatList>
      <StatItem>
        <StatText>Good: </StatText>
        <StatValue>{good}</StatValue>
      </StatItem>
      <StatItem>
        <StatText>Neutral: </StatText>
        <StatValue>{neutral}</StatValue>
      </StatItem>
      <StatItem>
        <StatText>Bad: </StatText>
        <StatValue>{bad}</StatValue>
      </StatItem>
      <StatItem>
        <StatText>Total: </StatText>
        <StatValue>{total}</StatValue>
      </StatItem>
      <StatItem>
        <StatText>Positive feedback: </StatText>
        <StatValue>{positivePercentage()}%</StatValue>
      </StatItem>
    </StatList>
  );
};

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.func,
};

import PropTypes from 'prop-types';
import { getRandomColor } from './getRandomColor';
import { StatisticsWrapper, Title, StatList, StatItem, Label, Percentage } from './Statistics.styled';

const Statistics = ({title, stats}) => {
    return (
        <StatisticsWrapper>
            {title && (<Title>{title}</Title>)}
            <StatList>
                {stats.map(item=>(
                    <StatItem style={{backgroundColor:getRandomColor()}} key={item.id}>
                        <Label>{item.label}</Label>
                        <Percentage>{item.percentage}%</Percentage>
                    </StatItem>
                ))}
            </StatList>
        </StatisticsWrapper>
    )
} 

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
  }),),
}

export default Statistics;
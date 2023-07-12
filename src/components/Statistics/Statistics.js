import './Statistics.css';
import data from 'components/Statistics/data.json';
import PropTypes from 'prop-types';

const Statistics = ({ title, stats }) => {
  return (
    <section class="statistics">
      {title && <h2 class="title">{title}</h2>}
      <ul class="stat-list">
        {data.map(({ label, percentage, id }) => (
          <li class="item" key={id}>
            <span class="label">{label}</span>
            <span class="percentage">{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  label: PropTypes.string,
  percentage: PropTypes.number,
  type: PropTypes.string,
  id: PropTypes.number,
};
export default Statistics;

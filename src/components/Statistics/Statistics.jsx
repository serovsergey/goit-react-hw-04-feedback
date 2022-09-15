import PropTypes from 'prop-types'
import s from './Statistics.module.scss'

export function Statistics({ total, positivePercentage, ...options }) {

  return (
    <>
      {Object.entries(options).map(([option, count]) => (
        <p key={option}>{option[0].toUpperCase() + option.slice(1)}: {count}</p>
      ))}
      <p className={s.totals}>Total: {total}</p>
      <p className={s.totals}>Positive Feedback: {positivePercentage}%</p>
    </>
  )
}

Statistics.propTypes = {
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
  options: PropTypes.objectOf(PropTypes.number),
}

export default Statistics

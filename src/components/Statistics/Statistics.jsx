import PropTypes from 'prop-types'
import React, { Component } from 'react'
import s from './Statistics.module.scss'

export class Statistics extends Component {
  static propTypes = {
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
  }

  render() {
    const { total, positivePercentage, ...options } = this.props;
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
}

export default Statistics

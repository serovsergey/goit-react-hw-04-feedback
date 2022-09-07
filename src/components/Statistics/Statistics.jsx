import PropTypes from 'prop-types'
import React, { Component } from 'react'

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
        <p>Total: {total}</p>
        <p>Positive Feedback: {positivePercentage}%</p>
      </>
    )
  }
}

export default Statistics

import PropTypes from 'prop-types'
import React, { Component } from 'react'
import s from './FeedbackOptions.module.scss';

export class FeedbackOptions extends Component {
  static propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
  }

  render() {
    const { options, onLeaveFeedback } = this.props;
    return (

      <>
        <div className={s.list}>
          {options.map(button => (
            <button
              key={button}
              type='button'
              className={s.button}
              onClick={onLeaveFeedback}
              name={button}>
              {button}
            </button>
          ))}
        </div>
      </>
    )

  }
}

export default FeedbackOptions

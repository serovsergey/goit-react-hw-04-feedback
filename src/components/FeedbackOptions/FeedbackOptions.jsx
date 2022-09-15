import PropTypes from 'prop-types'
import s from './FeedbackOptions.module.scss';

export function FeedbackOptions({ options, onLeaveFeedback }) {

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

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
}

export default FeedbackOptions

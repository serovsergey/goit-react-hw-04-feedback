import { useReducer } from "react";
import FeedbackOptions from "./FeedbackOptions";
import Notification from "./Notification";
import Section from "./Section";
import Statistics from "./Statistics";

const POSITIVE_PROPERTY = 'good';

const initialFeedbacks = {
  good: 0,
  neutral: 0,
  bad: 0,
}

const feedbackReducer = (state, action) => {
  return { ...state, [action.type]: state[action.type] + 1 }
}

export function App() {
  const [feedbacks, dispatch] = useReducer(feedbackReducer, initialFeedbacks);

  const handleLeaveFeedback = evt => {
    const option = evt.currentTarget.name;
    dispatch({ type: option })
  }

  const total = Object.values(feedbacks).reduce((acc, value) => acc + value, 0);
  const positivePercentage = Math.round(feedbacks[POSITIVE_PROPERTY] / total * 100);

  return (
    <main>
      <Section title="Please Leave Feedback" >
        <FeedbackOptions options={Object.keys(feedbacks)} onLeaveFeedback={handleLeaveFeedback} />
      </Section>
      <Section title="Statistics">
        {total
          ? <Statistics {...feedbacks} total={total} positivePercentage={positivePercentage} />
          : <Notification message="There is no feedback yet" />
        }
      </Section>
    </main>
  )
};

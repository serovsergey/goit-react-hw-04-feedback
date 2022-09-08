import { Component } from "react";
import FeedbackOptions from "./FeedbackOptions";
import Notification from "./Notification";
import Section from "./Section";
import Statistics from "./Statistics";

const POSITIVE_PROPERTY = 'good';
// Вирішив зробити універсально - без хардкоду варіантів оцінок,
// тоді можна легко додати/прибрати опції для оцінок просто у початковий стейт,
// правда тоді ще прийдеться переробити логіку підрахунку відсотку позитивних фідбеків...
export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }

  onLeaveFeedback = evt => {
    const option = evt.currentTarget.name;
    this.setState(prevState => (
      { [option]: prevState[option] + 1 }
    ))
  }

  render() {
    const total = Object.values(this.state).reduce((acc, value) => acc + value);
    const positivePercentage = Math.round(this.state[POSITIVE_PROPERTY] / total * 100);

    return (
      <main>
        <Section title="Please Leave Feedback" >
          <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={this.onLeaveFeedback} />
        </Section>
        <Section title="Statistics">
          {total
            ? <Statistics {...this.state} total={total} positivePercentage={positivePercentage} />
            : <Notification message="There is no feedback" />
          }
        </Section>
      </main>
    )
  };
};

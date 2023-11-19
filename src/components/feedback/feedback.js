import { Component } from 'react';
import { Statictics } from './statistics';
import { FeedbackOptions } from 'components/feedback/feedbackOptions';
import { Section } from './section';
import { Notification } from './notification';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = type => {
    this.setState(
      prevState => ({
        [type]: prevState[type] + 1,
      }),
      this.calculateTotalFeedback
    );
  };

  calculateTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    this.setState(
      { total: good + neutral + bad },
      this.countPositiveFeedbackPercentage
    );
  };

  countPositiveFeedbackPercentage = () => {
    const { total, good } = this.state;
    const positivePercentage = Math.round((good / total) * 100);
    this.setState({ positivePercentage });
  };
  render() {
    const feedbackOptions = {
      good: 'Good',
      neutral: 'Neutral',
      bad: 'Bad',
    };
    return (
      <div>
        <Section title="Pleace leave feedback">
          <FeedbackOptions
            options={feedbackOptions}
            onLeaveFeedback={type => this.handleFeedback(type)}
          />
        </Section>
        <Section title="Statistic">
          {this.state.bad || this.state.good || this.state.neutral ? (
            <Statictics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.state.total}
              positivePercentage={this.state.positivePercentage}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}
export default Feedback;

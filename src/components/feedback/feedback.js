import { useState, useEffect } from 'react';
import { Statictics } from './statistics';
import { FeedbackOptions } from 'components/feedback/feedbackOptions';
import { Section } from './section';
import { Notification } from './notification';

export const Feedback = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const [positivePersent, setPositivePersent] = useState(0);

  const handleFeedback = type => {
    if (type === 'good') {
      setGood(prevGood => prevGood + 1);
    } else if (type === 'neutral') {
      setNeutral(prevNeutral => prevNeutral + 1);
    } else if (type === 'bad') {
      setBad(prevBad => prevBad + 1);
    }
  };

  useEffect(() => {
    setTotal(good + bad + neutral);
  }, [good, bad, neutral]);

  useEffect(() => {
    setPositivePersent(Math.round((good / total) * 100));
  }, [good, total]);

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
          onLeaveFeedback={type => handleFeedback(type)}
        />
      </Section>
      <Section title="Statistic">
        {bad || good || neutral ? (
          <Statictics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePersent}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
};

import { ContainerButton, Button } from './feedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <ContainerButton>
    {Object.keys(options).map(option => (
      <Button key={option} onClick={() => onLeaveFeedback(option)}>
        {options[option]}
      </Button>
    ))}
  </ContainerButton>
);

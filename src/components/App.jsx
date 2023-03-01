import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';

export const App = () => {
  return (
    <>
      <Section title="Please leave feedback"></Section>
      <FeedbackOptions />
      <Section title="Statistics" />
      <Statistics />
    </>
  );
};

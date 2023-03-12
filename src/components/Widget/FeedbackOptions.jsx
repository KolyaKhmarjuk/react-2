import PropTypes from 'prop-types';
import Section from './Section';

const FeedbackOptions = ({ options, onLeaveFeedBack }) => {
  return (
    <Section title={'Please leave feedback'}>
      {Object.keys(options).map((el, i) => (
        <button
          key={`${i}`}
          onClick={() => onLeaveFeedBack(`${el}`)}
          type="button"
          name={el}
          className="button"
        >
          {el}
        </button>
      ))}
    </Section>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
};

export default FeedbackOptions;

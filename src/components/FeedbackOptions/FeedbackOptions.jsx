import PropTypes from 'prop-types';
import { OptionList, OptionItem, Button } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <OptionList>
      {options.map((option, index) => {
        const label = option.charAt(0).toUpperCase() + option.slice(1);

        return (
          <OptionItem key={index}>
            <Button type="button" onClick={() => onLeaveFeedback(option)}>
              {label}
            </Button>
          </OptionItem>
        );
      })}
    </OptionList>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.string),
};

export default FeedbackOptions;

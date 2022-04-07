import PropTypes from 'prop-types';

import { selectionMarksLookup } from '../utils/constants';
import CustomButton from './UI/Buttons';

const MenuSelect = ({ onMarkSelect, selected }) => {
  return (
    <div className="p-1 grid grid-cols-2 gap-1 w-3/4 bg-dark-navy rounded-md">
      {selectionMarksLookup.map((markObj) => (
        <CustomButton
          key={markObj.id}
          onClick={() => onMarkSelect(markObj.mark)}
          title={`Select ${markObj.mark}`}
          className={`text-3xl font-bold py-2 px-1 rounded-md duration-75 ${
            selected === markObj.mark
              ? 'bg-custom-silver text-dark-navy'
              : 'text-custom-silver hover:bg-semi-dark-navy bg-opacity-25'
          }`}
        >
          {markObj.mark}
        </CustomButton>
      ))}
    </div>
  );
};

MenuSelect.propTypes = {
  onMarkSelect: PropTypes.func.isRequired,
  selected: PropTypes.string.isRequired
};

export default MenuSelect;

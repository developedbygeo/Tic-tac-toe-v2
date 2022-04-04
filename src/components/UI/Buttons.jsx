import PropTypes from 'prop-types';

import { ButtonType, ButtonSize } from '../../theme';

const CustomButton = ({ children, onClick, className, type, size, title }) => (
  <button
    title={title}
    onClick={onClick}
    type="button"
    className={`btn ${ButtonType[type]} ${ButtonSize[size]} ${className}`}
  >
    {children}
  </button>
);

CustomButton.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  type: PropTypes.oneOf(Object.keys(ButtonType)),
  size: PropTypes.oneOf(Object.keys(ButtonSize)),
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired
};

CustomButton.defaultProps = {
  type: null,
  size: null,
  className: ''
};

export default CustomButton;

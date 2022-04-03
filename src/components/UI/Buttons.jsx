import PropTypes from 'prop-types';

const CustomButton = ({ children, onClick, className, title }) => (
  <button title={title} onClick={onClick} type="button" className={`btn ${className}`}>
    {children}
  </button>
);

CustomButton.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired
};

export default CustomButton;

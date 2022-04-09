import PropTypes from 'prop-types';

import { ScoreCardType } from '../../theme';

export const Card = ({ children, className }) => (
  <div className={`custom-card  ${className || ''}`}>{children}</div>
);

Card.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string.isRequired
};

Card.defaultProps = {
  children: null
};

export const ScoreCard = ({ title, score, type, className }) => (
  <div
    className={`text-center text-dark-navy rounded-lg w-11/12 h-15 px-2 py-1 md:px-6 md:py-3 ${
      ScoreCardType[type]
    }  ${className || ''}`}
  >
    <span className="text-base tracking-wide md:text-xl">{title}</span>
    <p className="font-bold text-xl md:text-2xl">{score}</p>
  </div>
);

ScoreCard.propTypes = {
  title: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  className: PropTypes.string,
  type: PropTypes.oneOf(Object.keys(ScoreCardType)).isRequired
};
ScoreCard.defaultProps = {
  className: ''
};

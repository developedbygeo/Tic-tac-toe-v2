import React from 'react';
import ReactDOM from 'react-dom';

import PropTypes from 'prop-types';
import { ModalStyling } from '../../theme';

const modalContainer = document.querySelector('#overlay');

const Backdrop = ({ onDisable }) => (
  <div className={`${ModalStyling.backdrop}`} onClick={onDisable} role="alert" aria-hidden="true" />
);

const ModalOverlay = ({ children }) => <div className={ModalStyling.overlay}>{children}</div>;

const Modal = ({ children, onDisable }) => (
  <>
    {ReactDOM.createPortal(<Backdrop onDisable={onDisable} />, modalContainer)}
    {ReactDOM.createPortal(<ModalOverlay>{children}</ModalOverlay>, modalContainer)}
  </>
);

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  onDisable: PropTypes.func
};

Modal.defaultProps = {
  onDisable: () => {}
};

Backdrop.propTypes = {
  onDisable: PropTypes.func
};
Backdrop.defaultProps = {
  onDisable: () => {}
};

ModalOverlay.propTypes = {
  children: PropTypes.node.isRequired
};

export default React.memo(Modal);

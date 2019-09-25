import React from 'react';
import PropTypes from 'prop-types';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Notifications(props) {
  if (props.error) {
    toast.error(props.title, props.toastOptions);
  } else if (props.success) {
    toast.success(props.title, props.toastOptions);
  } else if (props.warning) {
    toast.warn(props.title, props.toastOptions);
  } else if (props.info) {
    toast.info(props.title, props.toastOptions);
  } else {
    toast(props.title, props.toastOptions);
  }

  return (
    <div>
      <ToastContainer />
    </div>
  );
}

Notifications.propTypes = {
  error: PropTypes.bool,
  success: PropTypes.bool,
  warning: PropTypes.bool,
  info: PropTypes.bool,
  title: PropTypes.string,
  toastOptions: PropTypes.object,
};
export default Notifications;

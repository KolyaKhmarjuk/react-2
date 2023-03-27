import PropTypes from 'prop-types';

const Notifications = ({ message }) => {
  return <p>{message}</p>;
};

Notifications.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notifications;

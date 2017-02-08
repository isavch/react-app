export {
  setNotification
};

function setNotification(notification) {
  return dispatch => {
    dispatch(showNotification(notification));
    setTimeout(() => dispatch(hideNotification()), 4000);
  };
}

function showNotification(notification) {
  return {
    type: 'SHOW_NOTIFICATION',
    payload: notification
  };
}

function hideNotification() {
  return {
    type: 'HIDE_NOTIFICATION'
  };
}

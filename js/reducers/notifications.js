export default {
  'SHOW_NOTIFICATION': (state = [], { payload }) => {
    return [payload, ...state];
  },
  'HIDE_NOTIFICATION': (state = []) => {
    const notifications = [...state];

    notifications.shift();

    return notifications;
  }
};

import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {connect} from 'react-redux';


import styles from './notifications.scss';

class Notifications extends Component {
  renderNotification(notification, index) {
    return (
      <div className={`${styles.notification} ${styles[notification.type]}`} key={index}>
        {notification.message}
      </div>
    );
  }
  render() {
    return (
      <div className={styles.container}>
        <ReactCSSTransitionGroup
          transitionName={{
            enter: styles.notificationEnter,
            enterActive: styles.notificationEnterActive,
            leave: styles.notificationLeave,
            leaveActive: styles.notificationLeaveActive,
            appear: styles.notificationAppear,
            appearActive: styles.notificationAppearActive
          }}
          transitionEnterTimeout={400}
          transitionLeaveTimeout={400}
        >
          {
            this.props.notifications.map(this.renderNotification, this)
          }
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}

const mapStateToProps = ({notifications}) => {
  return {notifications};
};

export default connect(mapStateToProps)(Notifications);



import React, { PropTypes } from 'react';
import FontIcon from 'react-toolbox/lib/font_icon';

import styles from './commentButton.scss';

const propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string
};

const defaultProps = {
  className: ''
};

const CommentButton = ({ onClick, className, isComment }) => {
  const value = isComment ? 'comment' : 'mode_comment';

  return (
    <i
      onClick={ onClick }
      className={`${styles.icon} ${styles.verticalCenter} ${className} ${styles.pullRight}`}
    >
      <FontIcon
        className={styles.fontIcon}
        value={ value }
      />
    </i>
  );
};

CommentButton.propTypes = propTypes;
CommentButton.defaultProps = defaultProps;

export default CommentButton;

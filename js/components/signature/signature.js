import React, { PureComponent, PropTypes } from 'react';

import { formatSignatureDate } from 'utils/date';

import styles from './signature.scss';

/* Interface */
const propTypes = {
  timezone: PropTypes.string.isRequired,
  signature: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      content: PropTypes.string,
      occurred: PropTypes.number
    })
  ])
};

class Signature extends PureComponent {
  checkSignature(data) {
    return data && (typeof data === 'string' || typeof data === 'object' && data.content);
  }
  render() {
    const { signature, timezone } = this.props;
    const hasSignature = this.checkSignature(signature);

    return (
      <div className={styles.container}>
        <div className={styles.wrapper}>
          {hasSignature ?
            <img className={styles.image} src={signature.content || signature}/> :
            <span className={styles.error}>unsigned</span>}
        </div>
        {hasSignature && signature.date ?
          <span className={styles.date}>{formatSignatureDate(signature.date, timezone)}</span> : null
        }
      </div>
    );
  }
}

Signature.propTypes = propTypes;

export default Signature;

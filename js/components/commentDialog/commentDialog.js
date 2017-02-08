import React, { Component, PropTypes } from 'react';
import Dialog from 'react-toolbox/lib/dialog';
import Input from 'react-toolbox/lib/input';

import { COMMENT_TYPE } from '../../constants/comment';
import RadioButtons from '../radioButtons';

/** form styles */
import styles from './commentDialog.scss';

/** Interface */
const propTypes = {
  id: PropTypes.number,
  active: PropTypes.bool,
  comment: PropTypes.string,
  onCancel: PropTypes.func,
  onSave: PropTypes.func
};

/** Defaults */
const defaultProps = {
  active: false,
  comment: ''
};

/** Implementation */
class CommentDialog extends Component {
  constructor(...args) {
    super(...args);
    const { comment, id } = this.props;

    this.state = {
      comment: comment || COMMENT_TYPE[0],
      id,
      isCustom: this.isAbsenceComment(comment)
    };
    this.handleChange = this.handleChange.bind(this);
    this.onFieldChange = this.onFieldChange.bind(this);
    this.setCustomComment = this.setCustomComment.bind(this);
    this.scrollToCommentInput = this.scrollToCommentInput.bind(this);
    this.onSave = this.onSave.bind(this);
  }
  handleChange(comment) {
    if (comment === 'Custom') {
      return this.setCustomComment();
    }
    this.onSetState(comment, false);
  }
  setCustomComment() {
    this.scrollToCommentInput();

    return this.onSetState('', true);
  }
  scrollToCommentInput() {
    if (this.props.active) {
      const { dialog } = this.refs;
      const dialogClassName = dialog.props.className;
      const [dialogNode] = document.getElementsByClassName(dialogClassName);
      const [sectionNode] = dialogNode ? dialogNode.getElementsByTagName('section') : null;

      if (sectionNode) {
        sectionNode.scrollTop = sectionNode.scrollHeight;
      }
    }
  }
  onFieldChange(comment) {
    this.setState({ comment });
  }
  onSave() {
    const { comment, id } = this.state;

    this.props.onSave(id, comment);
  }
  onSetState(comment, isCustom) {
    this.setState({
      comment,
      isCustom
    });
  }
  focusComment() {
    if (this.props.active && this.state.isCustom) {
      this.refs.comment.refs.wrappedInstance.refs.input.focus();
    }
  }
  setTypeComment() {
    return this.state.isCustom ? 'Custom' : this.state.comment;
  }
  isAbsenceComment(comment) {
    return COMMENT_TYPE.indexOf(comment || COMMENT_TYPE[0]) === -1;
  }
  componentDidMount() {
    this.focusComment();

    window.addEventListener('resize', this.scrollToCommentInput);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.scrollToCommentInput);
  }
  componentDidUpdate() {
    this.focusComment();
  }
  componentWillReceiveProps({ comment, id }) {
    this.setState({
      comment: comment || this.state.comment,
      id,
      isCustom: this.isAbsenceComment(comment)
    });
  }
  render() {
    const action = [
      { label: 'CANCEL', onClick: this.props.onCancel },
      { label: 'SAVE', onClick: this.onSave }
    ];
    const { comment, isCustom } = this.state;

    return (
      <Dialog
        theme={ styles }
        title='Edit comment'
        active={ this.props.active }
        actions={ action }
        ref='dialog'
        className='js-dialog'
        onOverlayClick={ this.props.onCancel }
      >
        <RadioButtons
          name='comment'
          value={ this.setTypeComment() }
          group={ COMMENT_TYPE }
          handleChange={ this.handleChange }
          styles={ styles }
        />
        <Input
          theme={ styles }
          label='Custom comment'
          value={ isCustom ? comment : ''}
          ref='comment'
          onClick={ this.setCustomComment }
          onChange={ this.onFieldChange }
          onFocus={ () => this.scrollToCommentInput() }
        />
      </Dialog>
    );
  }
}

CommentDialog.propTypes = propTypes;
CommentDialog.defaultProps = defaultProps;

export default CommentDialog;

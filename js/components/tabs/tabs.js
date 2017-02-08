import React, {Component, PropTypes} from 'react';
import ReactSwipe from 'react-swipe';

import styles from './tabs.scss';

/* Interface */
const propTypes = {
  label: PropTypes.string,
  children: PropTypes.array.isRequired,
  className: PropTypes.string,
  panelClassName: PropTypes.string
};

/* Defaults */
const defaultProps = {
  label: '',
  className: '',
  panelClassName: '',
  children: []
};

/* Implementation */
class Tabs extends Component {
  constructor(...args) {
    super(...args);
    this.state = {
      selectedIndex: 0
    };
  }
  handleTabClick(index) {
    return () => {
      this.swipeToTab(index);
    };
  }
  swipeToTab(index) {
    this.setState({ selectedIndex: index });
    this.refs.swipe.slide(index);
  }
  changeActiveTab(index) {
    this.setState({ selectedIndex: index });
  }
  renderTab(tab, index) {
    const classes = this.state.selectedIndex === index ? `${styles.item} ${styles.active}` : styles.item;
    const width = `calc(${100 / this.props.children.length}% )`;

    return (
      <li
        className={classes}
        key={index}
        onClick={this.handleTabClick(index)}
        style={{width}}
      >
        {tab.props.label}
      </li>
    );
  }
  renderTabPanel(tab, index) {
    return (
      <div className={`${this.props.panelClassName} js-panel`} key={index}>
        { tab.props.children }
      </div>
    );
  }
  componentDidMount() {
    const activeTabIndex = this.props.children.findIndex(el => el.props.active);
    const activeIndex = activeTabIndex >= 0 ? activeTabIndex : 0;

    if (activeIndex !== this.state.selectedIndex) {
      this.swipeToTab(activeIndex);
    }
  }
  render() {
    const tabsItems = this.props.children.map((tab, index) => this.renderTab(tab, index));
    const tabsPanels = this.props.children.map((tab, index) => this.renderTabPanel(tab, index));
    const width = `calc(${100 / this.props.children.length}% )`;
    const left = `${100 / this.props.children.length * this.state.selectedIndex}%`;

    return (
      <div className={styles.container}>
        <div className={styles.fixedBlock}>
          <nav className={styles.navPannel}>
            {tabsItems}
            <span
              className={styles.pointer}
              style={{left, width}}
            />
          </nav>
        </div>
        <div className={`${this.props.className} ${styles.panelContainer}`}>
          <ReactSwipe ref='swipe'
                      swipeOptions={{
                        continuous: false,
                        callback: this.changeActiveTab.bind(this) }} >
            { tabsPanels }
          </ReactSwipe>
        </div>
      </div>
    );
  }
}

const Tab = (label, children) => {
  return (
    <div>
      {label}
      {children}
    </div>
  );
};

Tabs.defaultProps = defaultProps;
Tabs.propTypes = propTypes;

export {Tab, Tabs as default};

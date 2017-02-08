import React, { Component } from 'react';

import Grid from 'components/grid';
import Status from 'components/status';

import styles from './mailboxDatabases.scss';

import { getDatabases } from 'services/api/settings';

/** Implementation */
class MailboxDatabases extends Component {
  constructor(...args) {
    super(...args);
    this.state = {
      databases: [],
      isLoading: true,
      headerFields: [
        { label: 'Name', field: 'name' },
        { label: 'Status', field: 'status' },
        { label: 'Server Name', field: 'serverName' },
        { label: 'Server IP', field: 'server' },
        { label: 'Database path', field: 'path' }
      ]
    };
    this.renderStatus = this.renderStatus.bind(this);
    this.isDisabledRow = this.isDisabledRow.bind(this);
  }
  componentDidMount() {
    getDatabases()
      .then(respons => {
        this.setState({
          isLoading: false,
          databases: respons.data.items
        });
      }).catch(() => this.setState({ isLoading: false }));
  }
  isDisabledRow(item) {
    return !item.status;
  }
  isDisabledUser(item) {
    return item.status ? 'Active' : 'Disabled';
  }
  renderStatus(item) {
    return <Status state={this.isDisabledUser(item)} />;
  }
  render() {
    return (
      <div className={styles.container}>
        <Grid
          wrapperStyle={{
            minHeight: '50vh',
            width: '100%'
          }}
          data={this.state.databases}
          isLoading={this.state.isLoading}
          renderstatus={this.renderStatus}
          isDisabledRow={this.isDisabledRow}
          headerFields={this.state.headerFields}
        />
      </div>
    );
  }
}

export default MailboxDatabases;

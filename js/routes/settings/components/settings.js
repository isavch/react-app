import React, { Component } from 'react';
import { Tabs, Tab } from 'components/tabs';

import General from './general/general.js';
import Exchange from './exchange/exchange.js';
import MailboxPlans from './mailboxPlans/mailboxPlans.js';
import UserPermissions from './userPermissions/userPermissions.js';
import MailboxDatabases from './mailboxDatabases/mailboxDatabases.js';

import { permissions, protectRoute } from '../../app/containers/auth';

import styles from './settings.scss';

/** implementation */
class Settings extends Component {
  render() {
    return (
      <div className={styles.container}>
        <Tabs>
          <Tab label='General'>
            <General />
          </Tab>
          <Tab label='Exchange servers'>
            <Exchange />
          </Tab>
          <Tab label='Mailbox databases'>
            <MailboxDatabases />
          </Tab>
          <Tab label='Mailbox plans'>
            <MailboxPlans />
          </Tab>
          <Tab label='User permissions'>
            <UserPermissions />
          </Tab>
        </Tabs>
      </div>
    );
  }
}

export default protectRoute(Settings, permissions.ReadSettings);

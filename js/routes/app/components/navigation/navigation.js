import React from 'react';

import {protectComponent, permissions} from '../../containers/auth';
import Avatar from 'components/avatar';
import MainHeader from 'components/mainHeader';
import { Link } from 'react-router';

import styles from './navigation.scss';

const defaultProps = {
  user: {}
};

const ProtectedOrganizations = protectComponent(Link, permissions.ReadOrganizations);
const ProtectedSettings = protectComponent(Link, permissions.ReadSettings);
const ProtectedUsers = protectComponent(Link, permissions.ReadUsers);

const Navigation = ({user}) => {
  return (
    <MainHeader>
      <div>
        <div className={styles.menuContainer}>
          <ul className={styles.menuList}>
            <li className={styles.listItem}>
              <ProtectedOrganizations
                to='/organizations'
                activeClassName={styles.activeLink}
                className={`pure-menu-link ${styles.linkItem}`}
              >
                ORGANIZATIONS
              </ProtectedOrganizations>
            </li>
            <li className={styles.listItem}>
              <ProtectedUsers
                to='/users'
                activeClassName={styles.activeLink}
                className={`pure-menu-link ${styles.linkItem}`}
              >
                USERS
              </ProtectedUsers>
            </li>
            <li className={styles.listItem}>
              <ProtectedSettings
                to='/settings'
                activeClassName={styles.activeLink}
                className={`pure-menu-link ${styles.linkItem}`}
              >
                SETTINGS
              </ProtectedSettings>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <div className={styles.userContainer}>
          <Avatar
            className={styles.userAvatar}
          />
          <div className={styles.userName}>{user.displayedName}</div>
        </div>
      </div>
    </MainHeader>
  );
};

Navigation.defaultProps = defaultProps;

export default Navigation;

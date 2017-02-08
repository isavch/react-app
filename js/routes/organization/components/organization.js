import React, {Component} from 'react';

import Users from './users';
import Resources from './resources';
import DistributionLists from './distributionLists';
import OrganizationDetails from './organizationDetails';
import {Tabs, Tab} from 'components/tabs';

import {get as getOrganizationResources} from 'services/api/resources';
import {permissions, protectRoute, isAllowed} from '../../app/containers/auth';

import styles from './organization.scss';

const resourcesTypes = {
  conferenceRoom: 'Room',
  equipment: 'Equipment',
  mailbox: 'SharedMailbox'
};

class Organization extends Component {
  constructor(...args) {
    super(...args);
    this.state = {
      users: [],
      conferenceRooms: [],
      equipment: [],
      sharedAccounts: [],
      isLoading: true
    };
    this.onGetUsers = this.onGetUsers.bind(this);
  }
  onGetUsers(users) {
    this.setState({
      users
    });
  }
  componentDidMount() {
    getOrganizationResources(this.props.params.id)
      .then(({data}) => {
        const resources = data.items || [];

        this.setState({
          sharedAccounts: resources.filter(item => item.type === resourcesTypes.mailbox),
          equipment: resources.filter(item => item.type === resourcesTypes.equipment),
          conferenceRooms: resources.filter(item => item.type === resourcesTypes.conferenceRoom),
          isLoading: false
        });
      });
  }
  render() {
    const {id} = this.props.params;

    return (
      <div className={styles.container}>
        <OrganizationDetails organization={id}/>
        <Tabs>
          <Tab label='Users'>
            <Users
              organization={id}
              onGetUsers={this.onGetUsers}
            />
          </Tab>
          <Tab label='Conference Rooms'>
            <Resources
              type={resourcesTypes.conferenceRoom}
              organization={id}
              title='Conference room'
              isLoading={this.state.isLoading}
              data={this.state.conferenceRooms}
              headerFields={[
                {label: 'Name', isSortable: true, sorting: 'asc', field: 'name'},
                {label: 'Alias', field: 'alias'},
                {label: 'Auto attend', field: 'autoAttend', type: 'Checkbox'},
                {label: 'Message', field: 'message'},
                {label: 'Location', field: 'location'},
                {label: 'Details', field: 'details'},
                {label: 'Edit', field: 'Edit', viewOnly: true, isHidden: !isAllowed(permissions.UpdateOrganizations)}
              ]}
            />
          </Tab>
          <Tab label='Equipment'>
            <Resources
              type={resourcesTypes.equipment}
              organization={id}
              title='Equipment'
              isLoading={this.state.isLoading}
              data={this.state.equipment}
              users={this.state.users}
              headerFields={[
                {label: 'Name', isSortable: true, sorting: 'asc', field: 'name'},
                {label: 'Alias', field: 'alias'},
                {label: 'Auto attend', field: 'autoAttend', type: 'Checkbox'},
                {label: 'Message', field: 'message'},
                {label: 'Location', field: 'location'},
                {label: 'Details', field: 'details'},
                {label: 'Account manager', field: 'manager', type: 'Dropdown'},
                {label: 'Edit', field: 'Edit', viewOnly: true, isHidden: !isAllowed(permissions.UpdateOrganizations)}
              ]}
            />
          </Tab>
          <Tab label='Shared Accounts'>
            <Resources
              type={resourcesTypes.mailbox}
              organization={id}
              title='Shared account'
              isLoading={this.state.isLoading}
              data={this.state.sharedAccounts}
              users={this.state.users}
              headerFields={[
                {label: 'Name', isSortable: true, sorting: 'asc', field: 'name'},
                {label: 'Alias', field: 'alias'},
                {label: 'Details', field: 'details'},
                {label: 'Users', field: 'usersWithSandAsPermissions', type: 'MultiSelect'},
                {label: 'Edit', field: 'Edit', viewOnly: true, isHidden: !isAllowed(permissions.UpdateOrganizations)}
              ]}
            />
          </Tab>
          <Tab label='Distribution List'>
            <DistributionLists
              organization={id}
              users={this.state.users}
            />
          </Tab>
        </Tabs>
      </div>
    );
  }
}

export default protectRoute(Organization, permissions.ReadOrganizations);

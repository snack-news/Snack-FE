import React, { SFC, Fragment } from 'react';
import GroupItem, { GroupItemProps } from './GroupItem';
import HorizontalDivider from '../HorizontalDivider/index';

interface GroupListProps {
  groups: GroupItemProps[];
}

const GroupList: SFC<GroupListProps> = ({ groups }) => (
  <Fragment>
    {groups.map(group => (
      <Fragment key={group.groupId}>
        <GroupItem {...group} />
        <HorizontalDivider />
      </Fragment>
    ))}
  </Fragment>
);

export default GroupList;

import React from 'react';

import GroupItem from './GroupItem';
import HorizontalDivider from '../HorizontalDivider/index';
import ColListLayout from '../../layouts/ColListLayout';

import { getGroupList } from '../../api';

/* GroupList 컴포넌트 */
const GroupList = () => {
  const groupList = getGroupList();

  return (
    <ColListLayout.Nomal>
      {groupList.map(group => (
        <ColListLayout.Nomal key={group.groupId}>
          <GroupItem {...group} key="GroupItem" />
          <HorizontalDivider key="HorizontalDivider" />
        </ColListLayout.Nomal>
      ))}
    </ColListLayout.Nomal>
  );
};

export default GroupList;

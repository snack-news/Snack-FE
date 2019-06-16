import React from 'react';

import storiesOfWithTemplates from './storiesOfWithTemplates';

import GroupList from '../../src/templates/GroupList';

storiesOfWithTemplates('GroupList', module).add('기본', () => <GroupList />);

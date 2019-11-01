import React from 'react';

import { WeekLabel } from '~nclient/view/atoms/labels/WeekLabel';

export const Today = () => <WeekLabel date={Date.now()} />;

export default { title: 'Atoms/labels/WeekLabel' };

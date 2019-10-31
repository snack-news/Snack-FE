import React from 'react';

import { TagLabel } from '~nclient/view/atoms/labels/TagLabel';

export const Normal = () => <TagLabel>태그명</TagLabel>;

export const Highlight = () => <TagLabel highlight>태그명</TagLabel>;

export default { title: 'Atoms/labels/TagLabel' };

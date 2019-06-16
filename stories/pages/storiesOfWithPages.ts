import { storiesOf } from '@storybook/react';

const storiesOfWithPages = (name: string, md: NodeModule) => storiesOf(`Pages/${name}`, md);

export default storiesOfWithPages;

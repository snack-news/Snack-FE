import { storiesOf } from '@storybook/react';

const storiesOfWithLayout = (name: string, md: NodeModule) => storiesOf(`Layouts/${name}`, md);

export default storiesOfWithLayout;

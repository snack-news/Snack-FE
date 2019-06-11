import { storiesOf } from '@storybook/react';

const storiesOfWithPage = (name: string, md: NodeModule) => storiesOf(`Pages/${name}`, md);

export default storiesOfWithPage;

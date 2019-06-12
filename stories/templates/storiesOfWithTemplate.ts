import { storiesOf } from '@storybook/react';

const storiesOfWithPage = (name: string, md: NodeModule) => storiesOf(`Templates/${name}`, md);

export default storiesOfWithPage;

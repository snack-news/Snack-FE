import { storiesOf } from '@storybook/react';

const storiesOfWithTemplates = (name: string, md: NodeModule) => storiesOf(`Templates/${name}`, md);

export default storiesOfWithTemplates;

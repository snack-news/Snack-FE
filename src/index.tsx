import React from 'react';
import ReactDOM from 'react-dom';
import Hello from '@snack-fe/react-hello';

interface AppProps {}

const App: React.FunctionComponent<AppProps> = () => <Hello compiler="webpack" framework="react" />;

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);

import React from 'react';
import { sayHelloReact } from './utils/utils';

const App: React.FC = () => (
  <div>{ `${sayHelloReact()}` }</div>
);

export default App;

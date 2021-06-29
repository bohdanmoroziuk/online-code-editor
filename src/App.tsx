import { FC } from 'react';

import Editor from 'components/Editor';

const App: FC = () => (
  <div className="app">
    <div className="pane top-pane">
      <Editor />
      <Editor />
      <Editor />
    </div>
    <div className="pane">
      <iframe
        title="output"
        sandbox="allow-scripts"
        frameBorder="0"
        width="100%"
        height="100%"
      />
    </div>
  </div>
);

export default App;

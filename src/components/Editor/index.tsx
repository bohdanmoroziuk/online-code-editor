import { FC } from 'react';

import { Controlled as ControlledEditor } from 'react-codemirror2';

import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';

import 'codemirror/mode/css/css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';

import 'components/Editor/index.css';

interface Props {
  displayName: 'HTML' | 'CSS' | 'JS';
  language: 'xml' | 'css' | 'javascript';
  value: string;
  onChange: (value: string) => void;
}

const Editor: FC<Props> = ({ displayName, language, value, onChange }) => {
  const handleChange = (_editor: any, _data: any, value: string) => {
    onChange(value);
  };

  return (
    <div className="editor-container">
      <div className="editor-title">
        {displayName}
        <button>O\C</button>
      </div>
      <ControlledEditor 
        onBeforeChange={handleChange}
        value={value}
        className="code-mirror-wrapper"
        options={{
          lineWrapping: true,
          lint: true,
          mode: language,
          theme: 'material',
          lineNumbers: true,
        }}
      />
    </div>
  );
};

export default Editor;

import { FC, useState } from 'react';

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

  const [isOpen, setIsOpen] = useState(true);

  const toggle = () => {
    setIsOpen(isOpen => !isOpen);
  };

  const editorOptions = {
    lineWrapping: true,
    lint: true,
    mode: language,
    theme: 'material',
    lineNumbers: true,
  };

  const rootClassName = ['editor-container', ...(isOpen ? [] : ['collapsed'])].join(' ')

  return (
    <div className={rootClassName}>
      <div className="editor-title">
        {displayName}
        <button onClick={toggle}>O\C</button>
      </div>
      <ControlledEditor 
        className="code-mirror-wrapper"
        onBeforeChange={handleChange}
        value={value}
        options={editorOptions}
      />
    </div>
  );
};

export default Editor;

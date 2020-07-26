// import React from 'react';
// import { Editor, EditorState, RichUtils, getDefaultKeyBinding, convertToRaw } from 'draft-js';
// import { convertToHTML } from 'draft-convert';

// import { RichTextContainer } from './styled';

// class RichEditorExample extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { editorState: EditorState.createEmpty() };

//     this.focus = () => this.refs.editor.focus();
//     this.onChange = (editorState) => this.setState({ editorState });

//     this.handleKeyCommand = this._handleKeyCommand.bind(this);
//     this.mapKeyToEditorCommand = this._mapKeyToEditorCommand.bind(this);
//     this.toggleBlockType = this._toggleBlockType.bind(this);
//     this.toggleInlineStyle = this._toggleInlineStyle.bind(this);
//   }

//   _handleKeyCommand(command, editorState) {
//     const newState = RichUtils.handleKeyCommand(editorState, command);
//     if (newState) {
//       this.onChange(newState);
//       return true;
//     }
//     return false;
//   }

//   _mapKeyToEditorCommand(e) {
//     if (e.keyCode === 9 /* TAB */) {
//       const newEditorState = RichUtils.onTab(
//         e,
//         this.state.editorState,
//         4 /* maxDepth */,
//       );
//       if (newEditorState !== this.state.editorState) {
//         this.onChange(newEditorState);
//       }
//       return;
//     }
//     return getDefaultKeyBinding(e);
//   }

//   _toggleBlockType(blockType) {
//     this.onChange(RichUtils.toggleBlockType(this.state.editorState, blockType));
//   }

//   _toggleInlineStyle(inlineStyle) {
//     this.onChange(
//       RichUtils.toggleInlineStyle(this.state.editorState, inlineStyle),
//     );
//   }

//   render() {
//     const { editorState } = this.state;

//     // If the user changes block type before entering any text, we can
//     // either style the placeholder or hide it. Let's just hide it now.
//     let className = 'RichEditor-editor';
//     var contentState = editorState.getCurrentContent();
//     if (!contentState.hasText()) {
//       if (contentState.getBlockMap().first().getType() !== 'unstyled') {
//         className += ' RichEditor-hidePlaceholder';
//       }
//     }

//     console.log(convertToHTML({styleToHTML: (style) => {
//       if (style === 'STRIKETHROUGH') {
//         return <span style={{textDecoration: 'line-through'}} />;
//       }
//     }})(editorState.getCurrentContent()))

//     return (
//       <RichTextContainer>
//         <div className={className} onClick={this.focus}>
//           <Editor
//             blockStyleFn={getBlockStyle}
//             customStyleMap={styleMap}
//             editorState={editorState}
//             handleKeyCommand={this.handleKeyCommand}
//             keyBindingFn={this.mapKeyToEditorCommand}
//             onChange={this.onChange}
//             placeholder="Tell a story..."
//             ref="editor"
//             spellCheck={true}
//           />
//         </div>
//         <BlockStyleControls
//           editorState={editorState}
//           onToggle={this.toggleBlockType}
//         />
//         <InlineStyleControls
//           editorState={editorState}
//           onToggle={this.toggleInlineStyle}
//         />
//       </RichTextContainer>
//     );
//   }
// }

// // Custom overrides for "code" style.
// const styleMap = {
//   CODE: {
//     backgroundColor: 'rgba(0, 0, 0, 0.05)',
//     fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
//     fontSize: 16,
//     padding: 2,
//   },
//   STRIKETHROUGH: {
//     textDecoration: 'line-through'
//   },
//   UNDERLINE: {
//     textDecoration: 'none',
//     borderBottom: '1px solid black'
//   }
// };

// function getBlockStyle(block) {
//   switch (block.getType()) {
//     case 'blockquote':
//       return 'RichEditor-blockquote';
//     default:
//       return null;
//   }
// }

// class StyleButton extends React.Component {
//   constructor() {
//     super();
//     this.onToggle = (e) => {
//       e.preventDefault();
//       this.props.onToggle(this.props.style);
//     };
//   }

//   render() {
//     let className = 'RichEditor-styleButton';
//     if (this.props.active) {
//       className += ' RichEditor-activeButton';
//     }

//     return (
//       <span className={className} onMouseDown={this.onToggle}>
//         {this.props.label}
//       </span>
//     );
//   }
// }

// const BLOCK_TYPES = [
//   { label: 'H1', style: 'header-one' },
//   { label: 'H2', style: 'header-two' },
//   { label: 'H3', style: 'header-three' },
//   { label: 'H4', style: 'header-four' },
//   { label: 'H5', style: 'header-five' },
//   { label: 'H6', style: 'header-six' },
//   { label: 'Blockquote', style: 'blockquote' },
//   { label: 'UL', style: 'unordered-list-item' },
//   { label: 'OL', style: 'ordered-list-item' },
//   { label: 'Code Block', style: 'code-block' },
// ];

// const BlockStyleControls = (props) => {
//   const { editorState } = props;
//   const selection = editorState.getSelection();
//   const blockType = editorState
//     .getCurrentContent()
//     .getBlockForKey(selection.getStartKey())
//     .getType();

//   return (
//     <div className="RichEditor-controls">
//       {BLOCK_TYPES.map((type) => (
//         <StyleButton
//           key={type.label}
//           active={type.style === blockType}
//           label={type.label}
//           onToggle={props.onToggle}
//           style={type.style}
//         />
//       ))}
//     </div>
//   );
// };

// var INLINE_STYLES = [
//   { label: 'Bold', style: 'BOLD' },
//   { label: 'Italic', style: 'ITALIC' },
//   { label: 'Underline', style: 'UNDERLINE' },
//   {label: 'Strikethrough', style: "STRIKETHROUGH"},
//   { label: 'Monospace', style: 'CODE' },
// ];

// const InlineStyleControls = (props) => {
//   const currentStyle = props.editorState.getCurrentInlineStyle();

//   return (
//     <div className="RichEditor-controls">
//       {INLINE_STYLES.map((type) => (
//         <StyleButton
//           key={type.label}
//           active={currentStyle.has(type.style)}
//           label={type.label}
//           onToggle={props.onToggle}
//           style={type.style}
//         />
//       ))}
//     </div>
//   );
// };

// TODO: Remove text above after.

import React, { useEffect, useRef, useState } from 'react';

import { Editor, EditorState, RichUtils, getDefaultKeyBinding } from 'draft-js';
import PropTypes from 'prop-types';

import boldIcon from '../../assets/images/bold.svg';
import italicIcon from '../../assets/images/italic.svg';
import orderedListIcon from '../../assets/images/ordered-list.svg';
import strikethroughIcon from '../../assets/images/strikethrough.svg';
import unorderedListIcon from '../../assets/images/unordered-list.svg';
import RichTextContainer from './styled';

// Custom overrides for "code" style.
const styleMap = {
  CODE: {
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
    fontSize: 16,
    padding: 2,
  },
  STRIKETHROUGH: {
    textDecoration: 'line-through',
  },
  UNDERLINE: {
    textDecoration: 'none',
    borderBottom: '1px solid black',
  },
};

function getBlockStyle(block) {
  switch (block.getType()) {
    case 'blockquote':
      return 'RichEditor-blockquote';
    default:
      return null;
  }
}

const RichTextEditor = ({ placeholder }) => {
  const editorRef = useRef();
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [className, setClassName] = useState('RichEditor-editor');

  const editorFocus = () => {
    editorRef.current.focus();
  };

  const onChange = (newEditorState) => {
    setEditorState(newEditorState);
  };

  const handleKeyCommand = (command, currentEditorState) => {
    const newState = RichUtils.handleKeyCommand(currentEditorState, command);
    if (newState) {
      onChange(newState);
      return true;
    }
    return false;
  };

  const mapKeyToEditorCommand = (e) => {
    if (e.keyCode === 9 /* TAB */) {
      const newEditorState = RichUtils.onTab(e, editorState, 4 /* maxDepth */);
      if (newEditorState !== editorState) {
        onChange(newEditorState);
      }
    } else {
      return getDefaultKeyBinding(e);
    }
    return null;
  };

  const toggleBlockType = (blockType) => {
    onChange(RichUtils.toggleBlockType(editorState, blockType));
  };

  const toggleInlineStyle = (inlineStyle) => {
    onChange(RichUtils.toggleInlineStyle(editorState, inlineStyle));
  };

  useEffect(() => {
    const contentState = editorState.getCurrentContent();
    if (!contentState.hasText()) {
      if (contentState.getBlockMap().first().getType() !== 'unstyled') {
        const newClassName = 'RichEditor-editor RichEditor-hidePlaceholder';
        setClassName(newClassName);
      }
    }
  }, [editorState, className]);

  //     console.log(convertToHTML({styleToHTML: (style) => {
  //       if (style === 'STRIKETHROUGH') {
  //         return <span style={{textDecoration: 'line-through'}} />;
  //       }
  //     }})(editorState.getCurrentContent()))

  return (
    <RichTextContainer>
      <div
        role="textbox"
        className={className}
        onClick={editorFocus}
        onKeyDown={() => {}}
        tabIndex={0}
      >
        <Editor
          blockStyleFn={getBlockStyle}
          customStyleMap={styleMap}
          editorState={editorState}
          handleKeyCommand={handleKeyCommand}
          keyBindingFn={mapKeyToEditorCommand}
          onChange={onChange}
          placeholder={placeholder}
          ref={editorRef}
          spellCheck
        />
      </div>
      <InlineStyleControls
        editorState={editorState}
        onToggle={toggleInlineStyle}
      />
      <BlockStyleControls
        editorState={editorState}
        onToggle={toggleBlockType}
      />
    </RichTextContainer>
  );
};

RichTextEditor.propTypes = {
  placeholder: PropTypes.string,
};

RichTextEditor.defaultProps = {
  placeholder: '',
};

const StyleButton = ({ onToggle, style, label, active, url, index }) => {
  const [className, setClassName] = useState('RichEditor-styleButton');
  const onMouseDown = (e) => {
    e.preventDefault();
    onToggle(style);
  };

  useEffect(() => {
    let newClassName = 'RichEditor-styleButton';
    if (active) {
      newClassName += ' RichEditor-activeButton';
    }
    setClassName(newClassName);
  }, [active]);

  return (
    <span
      className={className}
      role="button"
      onMouseDown={onMouseDown}
      tabIndex={index}
    >
      <img src={url} alt={label} />
    </span>
  );
};

StyleButton.propTypes = {
  onToggle: PropTypes.func.isRequired,
  style: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  active: PropTypes.bool,
  url: PropTypes.string.isRequired,
  index: PropTypes.number,
};

StyleButton.defaultProps = {
  active: false,
  index: 0,
};

const BLOCK_TYPES = [
  // { label: 'H1', style: 'header-one' },
  // { label: 'H2', style: 'header-two' },
  // { label: 'H3', style: 'header-three' },
  // { label: 'H4', style: 'header-four' },
  // { label: 'H5', style: 'header-five' },
  // { label: 'H6', style: 'header-six' },
  // { label: 'Blockquote', style: 'blockquote' },
  { label: 'UL', style: 'unordered-list-item', url: unorderedListIcon },
  { label: 'OL', style: 'ordered-list-item', url: orderedListIcon },
  // { label: 'Code Block', style: 'code-block' },
];

const BlockStyleControls = ({ editorState, onToggle }) => {
  const selection = editorState.getSelection();
  const blockType = editorState
    .getCurrentContent()
    .getBlockForKey(selection.getStartKey())
    .getType();

  return (
    <div className="RichEditor-controls">
      {BLOCK_TYPES.map((type, index) => (
        <StyleButton
          key={type.label}
          active={type.style === blockType}
          label={type.label}
          onToggle={onToggle}
          style={type.style}
          url={type.url}
          index={index}
        />
      ))}
    </div>
  );
};

BlockStyleControls.propTypes = {
  editorState: PropTypes.shape.isRequired,
  onToggle: PropTypes.func.isRequired,
};

const INLINE_STYLES = [
  { label: 'Bold', style: 'BOLD', url: boldIcon },
  { label: 'Italic', style: 'ITALIC', url: italicIcon },
  // { label: 'Underline', style: 'UNDERLINE' },
  { label: 'Strikethrough', style: 'STRIKETHROUGH', url: strikethroughIcon },
  // { label: 'Monospace', style: 'CODE' },
];

const InlineStyleControls = ({ editorState, onToggle }) => {
  const currentStyle = editorState.getCurrentInlineStyle();

  return (
    <div className="RichEditor-controls">
      {INLINE_STYLES.map((type, index) => (
        <StyleButton
          key={type.label}
          active={currentStyle.has(type.style)}
          label={type.label}
          onToggle={onToggle}
          style={type.style}
          url={type.url}
          index={index}
        />
      ))}
    </div>
  );
};

InlineStyleControls.propTypes = {
  editorState: PropTypes.shape.isRequired,
  onToggle: PropTypes.func.isRequired,
};

export default RichTextEditor;

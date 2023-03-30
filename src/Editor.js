import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { PlainTextPlugin } from "@lexical/react/LexicalPlainTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import MentionsPlugin from "./plugins/MentionsPlugin";
import { MentionNode } from "./nodes/MentionNode";
import ExampleTheme from "./themes/ExampleTheme";

const editorConfig = {
  theme: ExampleTheme,
  onError(error) {
    throw error;
  },
  nodes: [MentionNode]
};

export default function Editor() {
  return (
    <LexicalComposer initialConfig={editorConfig}>
      <div className="editor-container">
        <PlainTextPlugin
          contentEditable={<ContentEditable className="editor-input" />}
          placeholder={<Placeholder />}
        />

        <MentionsPlugin />
      </div>
    </LexicalComposer>
  );
}

function Placeholder() {
  return (
    <div className="editor-placeholder">
      Play around with the mentions plugin...
    </div>
  );
}

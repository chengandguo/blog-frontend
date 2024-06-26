import React, { useState, useCallback, useMemo } from "react";
import {
  createEditor,
  Editor,
  Transforms,
  Element as SlateElement,
} from "slate";
import { Slate, Editable, withReact } from "slate-react";
import ArticleHeader from "./components/article-header";
import EditorToolbar from "./components/editor-toolbar";
import Element from "./components/element";
import Leaf from "./components/leaf";
import "./index.scss";

const NewArticle: React.FC = () => {
  const [editor] = useState(() => withReact(createEditor()));
  const initialValue = useMemo(
    () =>
      JSON.parse(localStorage.getItem("content")) || [
        {
          type: "paragraph",
          children: [{ text: "A line of text in a paragraph." }],
        },
      ],
    []
  );

  const renderLeaf = useCallback((props) => <Leaf {...props} />, []);

  const renderElement = useCallback((props) => <Element {...props} />, []);

  const handleKeydown = (event) => {
    const { key } = event;
    switch (key) {
      case "Enter": {
        const [match] = Editor.nodes(editor, {
          match: (element) => element.type === "h1",
        });
        if (match) {
          event.preventDefault();
          const [titleElement, titlePath] = match;
          const newParagraph = {
            type: "paragraph",
            children: [{ text: "" }],
          };
          Transforms.insertNodes(editor, newParagraph, {
            at: Editor.after(editor, titlePath),
            select: true,
          });
        }
        break;
      }

      case "Backspace": {
        const [match] = Editor.nodes(editor, {
          match: (n) => n.type === "block-quote",
        });
        const [blockQuoteElement, blockQuotePath] = match ?? [];
        if (
          match &&
          Array.isArray(blockQuoteElement?.children) &&
          blockQuoteElement.children[0].text === ""
        ) {
          event.preventDefault();
          const newParagraph = {
            type: "paragraph",
            children: [{ text: "" }],
          };
          Transforms.insertNodes(editor, newParagraph, {
            at: Editor.after(editor, blockQuotePath),
            select: true,
          });
          Transforms.removeNodes(editor, { at: blockQuotePath });
        }
      }
    }
  };

  return (
    <div className="new-article">
      <ArticleHeader />
      <main className="article-main">
        <Slate
          editor={editor}
          initialValue={initialValue}
          className="article-editor"
          onChange={(value) => {
            const isAstChange = editor.operations.some(
              (op) => "set_selection" !== op.type
            );
            if (isAstChange) {
              // Save the value to Local Storage.
              const content = JSON.stringify(value);
              localStorage.setItem("content", content);
            }
          }}
        >
          <EditorToolbar />
          <input className="article-title" type="text" placeholder="标题" />
          <Editable
            placeholder="正文..."
            className="article-editor"
            renderLeaf={renderLeaf}
            renderElement={renderElement}
            onKeyDown={handleKeydown}
          />
        </Slate>
      </main>
    </div>
  );
};

export default NewArticle;

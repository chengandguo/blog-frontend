import React, { useState, useCallback, useMemo } from "react";
import { createEditor } from "slate";
import { Slate, Editable, withReact } from "slate-react";
import ArticleHeader from "./components/article-header";
import EditorToolbar from "./components/editor-toolbar";
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

  const renderLeaf = useCallback((props) => {
    return <Leaf {...props} />;
  }, []);

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
            // onKeyDown={handleKeydown}
          />
        </Slate>
      </main>
    </div>
  );
};

export default NewArticle;

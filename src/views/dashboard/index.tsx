import React from "react";
import "./index.scss";

// Clipboard
const Dashboard = () => {
  const handleRead = async () => {
    const res = await navigator.clipboard.read();
    for (const clipboardItem of res) {
      console.log("clipboardItem: ", clipboardItem);
      console.log(clipboardItem.types);
      for (const type of clipboardItem.types) {
        const res = await clipboardItem.getType(type); // res is a blob
        console.log(await res.arrayBuffer());
        // const text = await res.text();
        // console.log("res: ", text);
      }
    }
  };

  const handleReadText = async () => {
    const res = await navigator.clipboard.readText();
    console.log("handleReadText: ", res);
  };

  const handlePaste = () => {};

  const handleWrite = async () => {
    const type = "text/html";
    const blob = new Blob(
      [
        "<div style='font-size: 40px; color: red; font-weight: bold;'>Hello World<div>",
      ],
      {
        type,
      }
    );
    const data = [new ClipboardItem({ [type]: blob })];
    const res = await navigator.clipboard.write(data);
    console.log("res:", res);
  };

  return (
    <div>
      <h1 className="dashboard-title">dashboard</h1>
      <div onClick={handleRead}>read</div>
      <div onClick={handleReadText}>read text</div>
      <div onClick={handleWrite}>write</div>
      <div>A content editable object</div>
      <div className="editor" contentEditable onPaste={handlePaste}>
        <table>
          <tbody>
            <tr>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
        <div>&#8203;</div>
      </div>
    </div>
  );
};

export default Dashboard;

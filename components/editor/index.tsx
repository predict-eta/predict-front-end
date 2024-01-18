import React, { useState } from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css"; // Import Quill styles

const QuillNoSSRWrapper = dynamic(import("react-quill"), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
});
const modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { header: "3" }, { font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image", "video"],
    ["clean"],
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  },
};

export default function Home() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isDraft, setIsDraft] = useState(true);
  const [isPublished, setIsPublished] = useState(false);

  function submitHandler(event: any) {
    event.preventDefault();
    const requestObj = {
      id: new Date().toISOString(),
      title: title,
      content: content,
      isDraft: isDraft,
      isPublished: isPublished,
    };
  }

  function handleTitleChange(event: any) {
    event.preventDefault();
    setTitle(event.target.value);
  }

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="title">Title</label>
      <input
        type="text"
        value={title}
        name="title"
        placeholder="Enter a title"
        onChange={handleTitleChange}
        required
      />
      <QuillNoSSRWrapper
        modules={modules}
        onChange={setContent}
        theme="snow"
        style={{
          height: 500,
        }}
      />
      <button>Save</button>
      <p>{content}</p>
    </form>
  );
}

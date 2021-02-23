import React from "react";
import { Editor } from "@tinymce/tinymce-react";

const Editer = () => {
  //   render() {
  return (
    <Editor
      apiKey="e9itua2arwn4j3kx2jxbvint2m5xf9qkaa2892f91qh0egv0"
      init={{
        height: 500,
        menubar: false,
        plugins: [
          "advlist autolink lists link image charmap print preview anchor",
          "searchreplace visualblocks code fullscreen",
          "insertdatetime media table paste code help wordcount",
        ],
        toolbar:
          "undo redo | formatselect | bold italic backcolor | \
            alignleft aligncenter alignright alignjustify | \
            bullist numlist outdent indent | removeformat | help",
      }}
    />
  );
};
// }

export default Editer;

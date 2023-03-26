import React, { useState } from "react";
import { Button } from "@mui/material";
import axios from "axios";

export default function ImgUpl(props) {
  const [file, setFile] = useState();
  const [prevFile, setPrev] = useState();

  function handleChange(e) {
    console.log(e.target.files[0]);
    setFile(e.target.files[0]);
    setPrev(URL.createObjectURL(e.target.files[0]));
  }
  const uploadImg = () => {
    console.log("upload button clicked");
    if (file == null) return;
    // ////////////////////////////////////////////////////
    const formData = new FormData();
    formData.append("file", file);
    formData.append("body", { name: "chuni", desc: "chuni description" });
    const config = {
      headers: {
        "content-type": "multipart/form-data"
      }
    };
    console.log(formData.get("file"));
    axios
      .post("https://imgserver-1.onrender.com/", formData, config)
      .then((response) => {
        alert("The file is successfully uploaded");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  if (props.enabled) {
    return (
      <div className="ImgUpl">
        <h2>Select Image:</h2>
        <input type="file" onChange={handleChange} />
        <Button onClick={uploadImg}>upload</Button>
        <img src={prevFile} />
      </div>
    );
  }
}

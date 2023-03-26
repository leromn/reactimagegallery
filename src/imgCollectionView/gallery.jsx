import Gallery from "react-photo-gallery";
import { useState, useEffect } from "react";
import axios from "axios";

export default function GalleryView() {
  const [photos, setPhotos] = useState([]);
  const [gPhotos, setGPhotos] = useState([]);

  const getPictures = async () => {
    console.log("fetching images");
    await axios
      .get("https://imgserver-1.onrender.com/")
      .then((resp) => setPhotos(resp.data));

    await photos.map((img) => {
      let base64ImageString = Buffer.from(img.img.data, "binary").toString(
        "base64"
      );
      let gPic = {
        src: `data:image/jpeg;base64,${base64ImageString}`,
        width: 1,
        height: 1
      };
      // gPhotos.push(gPic);//
      setGPhotos((oldArray) => [...oldArray, gPic]);
    });
    console.log("img", photos);

    console.log("img", gPhotos);
    ////
  };

  const displaySelected = (e) => {
    alert(e.target.src);
  };

  useEffect(() => {
    getPictures();
  }, []); //
  return (
    <>
      <Gallery photos={gPhotos} onClick={displaySelected} />
    </>
  );
}

import axios from "axios";
import { productFetch } from "./axios";

const uploadFile = async (file, type, timestamp, signature) => {
  const folder = type === "image" ? "products" : "videos";
  const data = new FormData();

  data.append("file", file);
  data.append("timestamp", timestamp);
  data.append("signature", signature);
  data.append("api_key", import.meta.env.VITE_API_KEY);
  data.append("folder", folder);

  try {
    let cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
    let resourceType = type === "image" ? "image" : "video";
    let api = `https://api.cloudinary.com/v1_1/${cloudName}/${resourceType}/upload`;

    const res = await axios.post(api, data);
    const { secure_url } = res.data;
    console.log(secure_url);
    return secure_url;
  } catch (error) {
    console.log(error);
  }
};

const getSignatureForUpload = async (folder) => {
  try {
    const res = await productFetch.post("/sign-upload", { folder });
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

export { uploadFile, getSignatureForUpload };

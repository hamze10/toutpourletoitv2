import { storage } from "./firebase";

let storageRef = storage.ref();

const uploadImage = (file, path) => {
  let ref = storageRef.child(path);
  ref.put(file).catch((err) => {
    throw err;
  });
};

export { uploadImage };

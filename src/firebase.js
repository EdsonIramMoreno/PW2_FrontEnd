import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const firebaseConfig = {
  // Your Firebase configuration
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage();

export const sendImage = async (selected, id) => {
  return new Promise(async (resolve, reject) => {

      try {
        const storageRef = ref(storage, `/individualChatsImages/${id}`);
        const uploadTask = uploadBytesResumable(storageRef, selected);

        uploadTask.on(
          "state_changed",
          (snapshot) => {
            // Handle progress, if needed
          },
          (error) => {
            console.error(error);
            reject(error);
          },
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              resolve(downloadURL);
            });
          }
        );
      } catch (err) {
        console.error(err);
        reject(err);
      }
  });
};

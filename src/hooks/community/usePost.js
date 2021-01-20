import { useState } from "react";
import { firestore, firebaseAuth } from "../../firebase";

const usePost = () => {
  const [post, setPost] = useState(false);

  const validation = async (e, value) => {
    e.preventDefault();

    if (value) {
      const user = firebaseAuth.currentUser;
      const boardDocument = firestore.collection("board").doc();
      console.log(boardDocument);
      const documentID = boardDocument.id;
      console.log(documentID);
      try {
        firestore.collection("board").doc(documentID).set({
          date: Date().toString(),
          title: value,
          author: user.email,
          identifier: documentID,
        });
      } catch (err) {
        console.log(err);
      } finally {
        console.log(boardDocument);
        setPost(!post);
      }
    }
  };

  return [post, validation];
};

export default usePost;

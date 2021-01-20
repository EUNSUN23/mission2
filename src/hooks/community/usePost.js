import { useState } from "react";
import { firestore, firebaseAuth } from "../../firebase";

const usePost = () => {
  const [post, setPost] = useState(false);

  const validation = async (e, value) => {
    e.preventDefault();

    if (value) {
      const user = firebaseAuth.currentUser;
      const boardDocument = await boardCollection.document();
      const documentID = userDocument.documentID;
      boardDocument.setData(
        {
          date: Date().toString(),
          title: value,
          author: user.email,
          identifier: documentID,
        },
        (err) => console.log(err)
      );

      setPost(!post);
    }
  };

  return [post, validation];
};

export default usePost;

import React from "react";
import Board from "../../PageContents/Community/Board/Board";

const Community = ({ isAuth }) => {
  return (
    <div>
      <h2>Community</h2>
      <Board isAuth={isAuth} />
    </div>
  );
};

export default Community;

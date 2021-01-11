import React from "react";
import Board from "../../PageContents/Community/Board/Board";

const Community = ({ userData }) => {
  return (
    <div>
      <h2>Community</h2>
      <Board userData={userData} />
    </div>
  );
};

export default Community;

import React, { memo } from "react";
import { userList } from "./data.json";

const TestJson = (props: any) => {
  console.log("userList", userList);
  return (
    <ul>
      {userList.map((user) => (
        <li>{user.name}</li>
      ))}
    </ul>
  );
};

export default memo(TestJson);

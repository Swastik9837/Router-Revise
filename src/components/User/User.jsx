import React from "react";
import { useParams } from "react-router-dom";
const User = () => {
  const { id } = useParams();

  return (
    <div className="flex justify-center items-center bg-gray-400 p-4 text-3xl text-white">
      User:{id}
    </div>
  );
};

export default User;

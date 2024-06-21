import React from "react";
import notFoundImg from "../../Assets/Images/404-error.jpg";

export default function Notfound() {
  return (
    <>
      <div className="flex justify-center items-center">
        <img src={notFoundImg} alt="" />
      </div>
    </>
  );
}

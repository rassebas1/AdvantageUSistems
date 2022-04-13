import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

function NotFoundPage() {
  return (
    <div className="list-container">
      <span>Error 404</span>
      <h1>This Page doesn't Exist</h1>
      <Link replace={true} to="/">
        <button>Go Home</button>
      </Link>
    </div>
  );
}
export default NotFoundPage;

import React from "react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="text-center">
      <h1 className="text-3xl">Welcome to Your Todo App</h1>
      <p>Get started by selecting a section from the sidebar.</p>
      <div className="mt-4 space-x-4">
        <Link to="/inbox" className="text-blue-500 underline">
          Go to Inbox
        </Link>
        <Link to="/today" className="text-blue-500 underline">
          Go to Today
        </Link>
        <Link to="/upcoming" className="text-blue-500 underline">
          Go to Upcoming
        </Link>
        <Link to="/projects" className="text-blue-500 underline">
          Go to Projects
        </Link>
      </div>
    </div>
  );
};

export default Index;
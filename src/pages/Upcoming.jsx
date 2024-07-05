import React from "react";

const UpcomingPage = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Upcoming</h1>
      <div className="space-y-4">
        {/* Task items will go here */}
      </div>
      <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
        Add Task
      </button>
    </div>
  );
};

export default UpcomingPage;
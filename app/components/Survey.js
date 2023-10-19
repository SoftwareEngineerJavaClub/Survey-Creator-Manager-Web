// Survey.js (Component to display an individual survey)
import React from "react";
import Link from "next/link";

const Survey = ({ survey }) => {
  return (
    <div className="border border-gray-300 rounded-lg hover:shadow-md transition duration-300 ease-in-out transform hover:scale-105">
      {/* You can customize the appearance of each survey here */}
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-2">{survey.title}</h2>
        <p className="text-gray-600">{survey.description}</p>
        <Link
          href={`/survey/${survey._id}`}
          className="text-indigo-600 hover:text-indigo-800 block mt-2"
        >
          View Survey
        </Link>
      </div>
    </div>
  );
};

export default Survey;

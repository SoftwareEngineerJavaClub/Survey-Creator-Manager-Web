"use client";
import React from "react";
import Survey from "../components/Survey";
import mockSurveys from "../utils/mockDatas/mockSurveys";

const surveys = mockSurveys;
const SurveyList = () => {
  return (
    <div className="mt-8 mx-auto max-w-4xl">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {surveys.map((survey) => (
          <Survey key={survey._id} survey={survey} />
        ))}
      </div>
    </div>
  );
};

export default SurveyList;

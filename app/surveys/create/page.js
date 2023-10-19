"use client";
import React, { useState } from "react";
import Question from "@/app/components/Question";

const CreateSurveyPage = () => {
  const [survey, setSurvey] = useState({
    title: "",
    description: "",
    questions: [],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSurvey({ ...survey, [name]: value });
  };

  const addQuestion = () => {
    const newQuestion = {
      questionID: `${Date.now()}`,
      text: "",
      type: "text", // Default type
      options: [],
      required: false, // Default is not required
    };
    setSurvey({
      ...survey,
      questions: [...survey.questions, newQuestion],
    });
  };

  const handleQuestionChange = (e, questionID) => {
    const { name, value } = e.target;
    const updatedQuestions = survey.questions.map((question) =>
      question.questionID === questionID
        ? {
            ...question,
            [name]: name === "addOption" ? [...question.options, ""] : value,
          }
        : question
    );
    setSurvey({ ...survey, questions: updatedQuestions });
  };

  const deleteQuestion = (questionID) => {
    const updatedQuestions = survey.questions.filter(
      (question) => question.questionID !== questionID
    );
    setSurvey({ ...survey, questions: updatedQuestions });
  };

  const duplicateQuestion = (questionID) => {
    const questionToDuplicate = survey.questions.find(
      (question) => question.questionID === questionID
    );
    if (questionToDuplicate) {
      const newQuestion = {
        ...questionToDuplicate,
        questionID: `${Date.now()}`,
      };
      setSurvey({ ...survey, questions: [...survey.questions, newQuestion] });
    }
  };

  const saveSurvey = () => {
    // You can send the survey data to your backend for saving
    console.log(survey);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-6 shadow rounded-lg sm:px-10">
          <h2 className="text-center text-3xl font-extrabold text-gray-900">
            Create a New Survey
          </h2>
          <form className="mt-6 space-y-6" onSubmit={saveSurvey}>
            {survey.questions.map((question) => (
              <Question
                key={question.questionID}
                question={question}
                handleQuestionChange={handleQuestionChange}
                deleteQuestion={deleteQuestion}
                duplicateQuestion={duplicateQuestion}
              />
            ))}
            <div className="flex justify-end">
              <button
                type="button"
                onClick={addQuestion}
                className="text-indigo-600 hover:text-indigo-800 cursor-pointer"
              >
                + Add Question
              </button>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Save Survey
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateSurveyPage;

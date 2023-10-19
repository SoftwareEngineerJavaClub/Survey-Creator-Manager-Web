// SurveyForm.js
import React from "react";
import Question from "@/app/components/Question";

const SurveyForm = ({
  survey,
  handleInputChange,
  addQuestion,
  handleQuestionChange,
  deleteQuestion,
  duplicateQuestion,
  saveSurvey,
}) => {
  return (
    <form className="mt-6 space-y-6" onSubmit={saveSurvey}>
      {/* Render the questions here */}
      {survey.questions.map((question) => (
        <Question
          key={question.questionID}
          question={question}
          handleQuestionChange={handleQuestionChange}
          deleteQuestion={deleteQuestion}
          duplicateQuestion={duplicateQuestion}
        />
      ))}
      {/* Add a button or something to submit the form */}
      <button type="submit">Submit</button>
    </form>
  );
};

export default SurveyForm;

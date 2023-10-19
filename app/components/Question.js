// Question.js
import React from "react";

const Question = ({
  question,
  handleQuestionChange,
  deleteQuestion,
  duplicateQuestion,
}) => {
  const handleAddOption = () => {
    const newOptions = [...question.options, { value: "", label: "" }];
    handleQuestionChange(
      { target: { name: "options", value: newOptions } },
      question.questionID
    );
  };

  const handleOptionChange = (e, optionIndex) => {
    const { name, value } = e.target;
    const updatedOptions = question.options.map((option, index) =>
      index === optionIndex ? { ...option, [name]: value } : option
    );
    handleQuestionChange(
      { target: { name: "options", value: updatedOptions } },
      question.questionID
    );
  };

  return (
    <div
      key={question.questionID}
      className="space-y-2 border border-gray-300 p-4 rounded-md"
    >
      <div className="flex items-center justify-between">
        <label className="block text-sm font-medium text-gray-700">
          Question
        </label>
        <div className="flex items-center space-x-2">
          <button
            type="button"
            onClick={() => duplicateQuestion(question.questionID)}
            className="text-indigo-600 hover:text-indigo-800 cursor-pointer"
          >
            Duplicate
          </button>
          <button
            type="button"
            onClick={() => deleteQuestion(question.questionID)}
            className="text-red-600 hover:text-red-800 cursor-pointer"
          >
            Delete
          </button>
        </div>
      </div>
      <input
        type="text"
        name="text"
        value={question.text}
        onChange={(e) => handleQuestionChange(e, question.questionID)}
        className="mt-1 p-2 border border-gray-300 rounded-md w-full"
        required
      />
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">
          Question Type
        </label>
        <select
          name="type"
          value={question.type}
          onChange={(e) => handleQuestionChange(e, question.questionID)}
          className="p-2 border border-gray-300 rounded-md w-full"
        >
          <option value="text">Short Answer</option>
          <option value="paragraph">Paragraph</option>
          <option value="multiple choice">Multiple Choice</option>
          <option value="checkboxes">Checkboxes</option>
          <option value="dropdown">Dropdown</option>
          <option value="file upload">File Upload</option>
        </select>
      </div>
      {["multiple choice", "checkboxes", "dropdown"].includes(
        question.type
      ) && (
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Options
          </label>
          <div className="space-y-2">
            {question.options.map((option, index) => (
              <div key={index} className="flex items-center space-x-2">
                <input
                  type={question.type === "checkboxes" ? "checkbox" : "radio"}
                  name={`options-${question.questionID}`}
                  id={`option-${question.questionID}-${index}`}
                  value={option.value}
                  checked={question.options.includes(option.value)}
                  onChange={(e) => handleOptionChange(e, index)}
                />
                <label htmlFor={`option-${question.questionID}-${index}`}>
                  <input
                    type="text"
                    name="value"
                    value={option.value}
                    placeholder="Option value"
                    onChange={(e) => handleOptionChange(e, index)}
                    className="border border-gray-300 rounded-md p-1"
                  />
                </label>
              </div>
            ))}
            <button
              type="button"
              onClick={handleAddOption}
              className="text-indigo-600 hover:text-indigo-800 cursor-pointer"
            >
              + Add Option
            </button>
          </div>
        </div>
      )}
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Required
        </label>
        <input
          type="checkbox"
          name="required"
          checked={question.required}
          onChange={(e) => handleQuestionChange(e, question.questionID)}
          className="mt-1"
        />
      </div>
    </div>
  );
};

export default Question;

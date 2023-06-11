import React, { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

const FeedbackModal = ({ isOpen, onRequestClose, onSubmit, elementId }) => {
  const [feedback, setFeedback] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(elementId, feedback);
    setFeedback("");
  };

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      transform: "translate(-50%, -50%)",
      width: "400px",
      height: "300px",
    },
  };

  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        style={customStyles}
      >
        <div className=" flex justify-between items-center mb-5">
          <h2 className=" text-gray-700 text-lg font-medium">Feedback</h2>
          <button
            onClick={onRequestClose}
            className="close-button"
            aria-label="Close alert"
            type="button"
            data-close
          >
            <span
              aria-hidden="true"
              className=" text-3xl bg-[#CF1164] text-white px-2 rounded-md"
            >
              &times;
            </span>
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <textarea
            className=" p-4 text-white text-xl font-medium border-2 border-[#CF1164] rounded-lg w-full h-36 bg-[#54C6C4]"
            type="text"
            id="feedback"
            name="feedback"
            value={feedback}
            onChange={(event) => setFeedback(event.target.value)}
            required
          ></textarea>
          <br />
          <button
            type="submit"
            className=" bg-[#F89A2E] text-white py-3 px-6 rounded-lg"
          >
            Submit
          </button>
        </form>
      </Modal>
    </>
  );
};

export default FeedbackModal;

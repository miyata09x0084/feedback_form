import React, { useState } from "react";
import "./FeedbackForm.css"; // Import CSS for styling

const FeedbackForm = () => {
  return (
    <>
      <nav>Tell Us What You Think</nav>
      <form className="feedback-form">
        <h2>We'd Love to Hear From You!</h2>
        <p>Please share your feedback with us.</p>
        <input type="text" name="name" placeholder="あなたの名前" />
        <input type="email" name="email" placeholder="あなたのメール" />
        <textarea
          name="feedback"
          placeholder="あなたのフィードバック"
        ></textarea>
        <button type="submit">フィードバックを送信</button>
      </form>
    </>
  );
};

export default FeedbackForm;

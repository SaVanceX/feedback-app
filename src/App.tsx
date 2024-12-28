import { useState } from "react";
import React from "react";
import Header from "./components/Header";
import FeedbackData from "./data/FeedbackData";
import FeedbackLists from "./components/FeedbackLists";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";

function App () {
  const [feedback, setFeedback] = useState(FeedbackData)
  const deleteFeeback = (id: number) => {
    if(window.confirm('Are you sure you want to delete?')) {
      setFeedback(feedback.filter((item) => item.id !== id ))
    }

  }
  return(
    <>
    <Header />
    <div className="container">
    <FeedbackForm/>
    <FeedbackStats feedback={feedback}/>
    <FeedbackLists feedback={feedback} handleDelete={deleteFeeback} />


    </div>
  </>
  )
}

export default App;
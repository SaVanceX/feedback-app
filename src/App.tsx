import { useState } from "react";
import React from "react";
import Header from "./components/Header";
import FeedbackData from "./data/FeedbackData";
import FeedbackLists from "./components/FeedbackLists";

function App () {
  const [feedback, setFeedback] = useState(FeedbackData)

  return(
    <>
    <Header />
    <div className="container">
    <FeedbackLists feedback={feedback} />


    </div>
  </>
  )
}

export default App;
import React from "react";
import { createContext, useState } from "react";

// @ts-ignore
const FeedbackContext = createContext()

export const FeedbackProvider = ({children}:any) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: 'This item is from context',
      rating: 8,
    }
  ])

  return <FeedbackContext.Provider value={{
      feedback,
    }}>
    { children}
  </FeedbackContext.Provider>
}

export default FeedbackContext
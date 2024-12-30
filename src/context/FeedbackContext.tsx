import React from "react";
import { createContext, useState } from "react";
import { v4 as uuidv4} from 'uuid';

// @ts-ignore
const FeedbackContext = createContext()

export const FeedbackProvider = ({children}:any) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: 'This is feedback item 1',
      rating: 8,
    },
    {
      id: 2,
      text: 'This is feedback item 2',
      rating: 4,
    },
    {
      id: 3,
      text: 'This is feedback item 3',
      rating: 7,
    },
    {
      id: 4,
      text: 'This is feedback item 4',
      rating: 9,
    }
  ])

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  })

  // add feddback item
  const addFeedback = (newFeedback: any) => {
      newFeedback.id = uuidv4()
      setFeedback([newFeedback,...feedback])
  }

  // delete feedback item
  const deleteFeedback = (id: number) => {
    if(window.confirm('Are you sure you want to delete?')) {
      setFeedback(feedback.filter((item) => item.id !== id ))
    }
  }

  // set item to be updated
  const editFeedback = (item: any) => {
    setFeedbackEdit({
      item,
      edit: true
    })
  }

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        deleteFeedback,
        addFeedback,
        editFeedback
      }}>
      { children}
    </FeedbackContext.Provider>
  )
}

export default FeedbackContext
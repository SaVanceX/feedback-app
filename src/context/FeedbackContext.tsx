import React from "react";
import { createContext, useState, useEffect } from "react";
import { v4 as uuidv4} from 'uuid';

// @ts-ignore
const FeedbackContext = createContext()

export const FeedbackProvider = ({children}:any) => {
  const [isLoading, setIsLaoding] = useState(false)
  const [feedback, setFeedback] = useState([])
  // Item to edit
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  })

  useEffect(() => {
    fetchFeeback()
  }, [])

  // Fetch feedback data
  const fetchFeeback = async () => {
    const response = await fetch('http://localhost:5000/feedback?_sort=id&_order=desc')
    const data = await response.json()
    console.log(data)

    setFeedback(data)
    setIsLaoding(false)
  }

  // Update feedback item
  const updateFeedback = (id: any, updateItem: any) =>  {
    setFeedback(feedback.map((item) => item.id === id ?
    {...item, ...updateItem} : item))
  }


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
        feedbackEdit,
        isLoading,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback,
      }}>
      { children}
    </FeedbackContext.Provider>
  )
}

export default FeedbackContext
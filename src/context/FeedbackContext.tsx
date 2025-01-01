import React from "react";
import { createContext, useState, useEffect } from "react";

// @ts-ignore
const FeedbackContext = createContext()

export const FeedbackProvider = ({children}:any) => {
  const [isLoading, setIsLaoding] = useState(true)
  const [feedback, setFeedback] = useState<any[]>([])
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
    const response = await fetch(`/feedback?_sort=id&_order=desc`)
    const data = await response.json()

    setFeedback(data)
    setIsLaoding(false)
  }

  // Update feedback item
  const updateFeedback = async (id: any, updateItem: any) =>  {
    const response = await fetch(`/feedback/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(updateItem)
    })

    const data = await response.json()


    setFeedback(feedback.map((item) => (item.id === id ? data : item)))

  }


  // add feddback item
  const addFeedback = async (newFeedback: any) => {
      const response = await fetch('/feedback', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(newFeedback)
      })
      const data = await response.json()

      setFeedback([data,...feedback])

  }

  // delete feedback item
  const deleteFeedback = async (id: number) => {
    if(window.confirm('Are you sure you want to delete?')) {
      await fetch(`/feedback/${id}`, {
        method: 'DELETE'
      })

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
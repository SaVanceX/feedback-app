import React from "react";
import { createContext, useState } from "react";
import FeedbackData from "../data/FeedbackData";
import { v4 as uuidv4 } from 'uuid';

// @ts-ignore
const FeedbackContext = createContext()

export const FeedbackProvider = ({children}:any) => {
  const [isLoading, setIsLoading] = useState(true)

  // web app storage
  const [appData, setAppData] = useState(() => {
    const storedValue = localStorage.getItem('appData');
    if(storedValue) {
      setIsLoading(false)
      return JSON.parse(storedValue);
    } else {
      setIsLoading(false)
      localStorage.setItem('appData', JSON.stringify(FeedbackData))
    }

  })

  // Item to edit
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  })


  // Update feedback item
  const updateFeedback = async (id: any, updateItem: any) =>  {

    const mappedArray = appData.map((item: any) => {
      if (item.id === id) {
        return {...item, rating: updateItem.rating, text: updateItem.text}
      } else {
        return item
      }
    })
    localStorage.setItem('appData', JSON.stringify(mappedArray))
    setAppData(mappedArray)
  }


  // add feddback item
  const addFeedback =  (newFeedback: any) => {
    newFeedback.id = uuidv4()
    console.log([newFeedback, ...appData])

    localStorage.setItem('appData', JSON.stringify([newFeedback, ...appData]))

    setAppData([newFeedback, ...appData])
  }

  // delete feedback item
  const deleteFeedback =  (id: number) => {
    if(window.confirm('Are you sure you want to delete?')) {

      console.log(appData)
      const newArray = appData.filter((item: any)  => item.id !== id )

      console.log(newArray)


      localStorage.setItem('appData', JSON.stringify(newArray))
      setAppData(newArray)


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
        appData,
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
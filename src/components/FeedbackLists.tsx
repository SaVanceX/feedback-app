import React, { useContext } from 'react'
import FeedbackItem from './FeedbackItem'
import FeedbackContext from '../context/FeedbackContext'

type Item = {
  id: number;
  rating: number;
  text: string;
}



function FeedbackLists() {
// @ts-ignore

  const {feedback} = useContext(FeedbackContext)

  if(!feedback || feedback.length === 0) {
    return <p>No feedback yet</p>
  }

  return (
    <div className='feedback-list'>
      {feedback.map((item: any) => (
        <FeedbackItem
          key={item.id}
          item={item}
        />
      ))}
    </div>
  )
}

export default FeedbackLists

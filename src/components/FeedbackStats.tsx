import React, { useContext, useState }from 'react'
import FeedbackContext from '../context/FeedbackContext'

type Item = {
  id: number;
  rating: number;
  text: string;
}



function FeedbackStats() {

  //@ts-ignore
  const { feedback } = useContext(FeedbackContext)

  // calculate average
  let average = feedback.reduce((acc: any, cur: any) => {
    return acc + cur.rating
  }, 0) / feedback.length

  //@ts-ignore
  average = average.toFixed(1).replace(/[.,]0$/, '')

  return (
    <div className='feedback-stats'>
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  )
}

export default FeedbackStats

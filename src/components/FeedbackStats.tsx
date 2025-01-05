import React, { useContext }from 'react'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackStats() {
  //@ts-ignore
  const { appData } = useContext(FeedbackContext)

  // calculate average
  const average =
  appData.length === 0
    ? 0
    : appData.reduce((acc:any, { rating }: any) => +acc + +rating, 0) / appData.length

return (
  <div className='feedback-stats'>
    <h4>{appData.length} Reviews</h4>
    <h4>Average Rating: {average.toFixed(1).replace(/[.,]0$/, '')}</h4>
  </div>
  )
}

export default FeedbackStats

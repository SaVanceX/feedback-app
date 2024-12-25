import React from 'react'
import FeedbackItem from './FeedbackItem'

function FeedbackLists({feedback}: {feedback: {}[]}) {

  if(!feedback || feedback.length === 0) {
    return <p>No feedback yet</p>
  }

  return (
    <div className='feedback-list'>
      {feedback.map((item) => (
        // @ts-ignore
        <FeedbackItem key={item.id} item={item}/>
      ))}
    </div>
  )
}

export default FeedbackLists

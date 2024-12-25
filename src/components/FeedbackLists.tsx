import React from 'react'
import FeedbackItem from './FeedbackItem'

type Item = {
  id: number;
  rating: number;
  text: string;
}

type FeedbackListsProps = {
  feedback: Item[],
}


function FeedbackLists({feedback}: FeedbackListsProps) {

  if(!feedback || feedback.length === 0) {
    return <p>No feedback yet</p>
  }

  return (
    <div className='feedback-list'>
      {feedback.map((item) => (
        <FeedbackItem key={item.id} item={item}/>
      ))}
    </div>
  )
}

export default FeedbackLists

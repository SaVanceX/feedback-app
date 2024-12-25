import React from 'react'
import FeedbackItem from './FeedbackItem'

type Item = {
  id: number;
  rating: number;
  text: string;
}

type FeedbackListsProps = {
  feedback: Item[],
  handleDelete: Function,
}


function FeedbackLists({feedback, handleDelete}: FeedbackListsProps) {

  if(!feedback || feedback.length === 0) {
    return <p>No feedback yet</p>
  }

  return (
    <div className='feedback-list'>
      {feedback.map((item) => (
        <FeedbackItem
          key={item.id}
          item={item}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  )
}

export default FeedbackLists

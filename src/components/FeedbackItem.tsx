import React from 'react'
import Card from './Shared/Card'
import { FaTimes } from 'react-icons/fa'

type FeedbackItemProps = {
  item: {
    id: number;
    rating: number,
    text: string,
  },
  handleDelete: Function,
}

function FeedbackItem({item, handleDelete}: FeedbackItemProps) {



  return (
    <Card>
      <div className='num-display'>{item.rating}</div>
      <button onClick={() => handleDelete(item.id)} className='close'>
        <FaTimes color='purple'/>
      </button>
      <div className='text-display'>
        {item.text}
      </div>
    </Card>
  )
}

export default FeedbackItem

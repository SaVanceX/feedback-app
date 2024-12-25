import React from 'react'
import Card from './Shared/Card'

type FeedbackItemProps = {
  item: {
    rating: number,
    text: string,
  },
}

function FeedbackItem({item}: FeedbackItemProps) {
  return (
    <Card>
      <div className='num-display'>{item.rating}</div>
      <div className='text-display'>
        {item.text}
      </div>
    </Card>
  )
}

export default FeedbackItem

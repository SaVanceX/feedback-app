import React, { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'
import Card from './Shared/Card'
import { FaTimes, FaEdit } from 'react-icons/fa'
type FeedbackItemProps = {
  item: {
    id: number;
    rating: number,
    text: string,
  },
}

function FeedbackItem({item}: FeedbackItemProps) {

  //@ts-ignore
  const { deleteFeedback, editFeedback } = useContext(FeedbackContext)


  return (
    <Card>
      <div className='num-display'>{item.rating}</div>
      <button onClick={() => deleteFeedback(item.id)} className='close'>
        <FaTimes color='white'/>
      </button>
      <button onClick={() => editFeedback(item)} className="edit">
        <FaEdit color='white' />
      </button>
      <div className='text-display'>
        {item.text}
      </div>
    </Card>
  )
}

export default FeedbackItem

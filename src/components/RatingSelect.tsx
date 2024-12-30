import React, { useState, useContext, useEffect } from 'react'
import FeedbackContext from '../context/FeedbackContext'

type SelectProps = {
  select: any;
}

function RatingSelect({select}: SelectProps) {
  const [selected, setSelected] = useState(10)
  const { feedbackEdit } = useContext<any>(FeedbackContext)

  useEffect(() => {
    setSelected(feedbackEdit.item.rating)
  }, [feedbackEdit])

  const handleChange = ({ currentTarget: { value } }:any) => {
    setSelected(+value)
    select(+value )
  }

  return (
    <ul className='rating'>
       {Array.from({ length: 10 }, (_, i) => (
        <li key={`rating-${i + 1}`}>
          <input
            type='radio'
            id={`num${i + 1}`}
            name='rating'
            value={i + 1}
            onChange={handleChange}
            checked={selected === i + 1}
          />
          <label htmlFor={`num${i + 1}`}>{i + 1}</label>
        </li>
      ))}
    </ul>
  )
}

export default RatingSelect

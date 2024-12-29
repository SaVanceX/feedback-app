import React from 'react'
import { useState } from 'react'
import Card from './Shared/Card'
import Button from './Shared/Button'
import RatingSelect from './RatingSelect'

function FeedbackInput() {
  const [text, setText] = useState('')
  const [rating, setRating] = useState(10)
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [message, setMessage] = useState<string | null>('')



  const handleTextChange = ({target: { value } }: any) => {
    if(text === '') {
      setBtnDisabled(true)
      setMessage(null)
    } else if (text.trim().length < 10) {
      setBtnDisabled(true)
      setMessage('Text must be at least 10 characters')
    } else {
      setBtnDisabled(false)
      setMessage(null)
    }

    setText(value)

  }

  return (
    <Card>
      <h2>How would you rate your service with us?</h2>
      <RatingSelect select={(rating: number) => setRating(rating)}/>
      <div className="input-group">
        <input onChange={handleTextChange} type="text" placeholder='write a review' value={text} />
        <Button type='submit' isDisabled={btnDisabled}>Send</Button>
      </div>
      {message && <div className='message'>{message}</div>}
    </Card>
  )
}

export default FeedbackInput

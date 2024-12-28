import React from 'react'
import { useState } from 'react'
import Card from './Shared/Card'
import Button from './Shared/Button'

function FeedbackInput() {
  const [text, setText] = useState('')
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [message, setMessage] = useState<string | null>('')



  const handleTextChange = (e: any) => {
    // todo refine form validation
    setText(e.target.value)

    if(text === '') {
      setBtnDisabled(true)
      setMessage(null)
    } else if (text !== '' && text.trim().length <= 10) {
      setBtnDisabled(true)
      setMessage('Text must be at least 10 characters')
    } else {
      setBtnDisabled(false)
      setMessage(null)
    }
  }

  return (
    <Card>
      <h2>How would you rate your service with us?</h2>
      {/* @todo - rating select component */}
      <div className="input-group">
        <input onChange={handleTextChange} type="text" placeholder='write a review' value={text} />
        <Button type='submit' isDisabled={btnDisabled}>Send</Button>
      </div>
      {message && <div className='message'>{message}</div>}
    </Card>
  )
}

export default FeedbackInput

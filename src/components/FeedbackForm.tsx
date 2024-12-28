import React from 'react'
import { useState } from 'react'
import Card from './Shared/Card'


function FeedbackInput() {
  const [text, setText] = useState('')

  const handleTextChange = (e: any) => {
    setText(e.target.value)
  }

  return (
    <Card>
      <form>
        <h2>How would you rate your service with us?</h2>
        {/* @todo - rating select component */}
        <div className="input-group">
          <input onChange={handleTextChange} type="text" placeholder='write a review' value={text} />
          <button type="submit">Send</button>
        </div>
      </form>
    </Card>
  )
}

export default FeedbackInput

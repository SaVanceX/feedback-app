import React from 'react'
import { useState } from 'react'
import Card from './Shared/Card'
import Button from './Shared/Button'

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
          <Button type='submit' isDisabled={false}>Send</Button>
        </div>
      </form>
    </Card>
  )
}

export default FeedbackInput

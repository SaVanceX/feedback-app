import React, {useState, useContext, useEffect} from 'react'
import FeedbackContext from '../context/FeedbackContext'
import Card from './Shared/Card'
import Button from './Shared/Button'
import RatingSelect from './RatingSelect'



function FeedbackForm() {
  const [text, setText] = useState('')
  const [rating, setRating] = useState(10)
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [message, setMessage] = useState<string | null>('')
  const { addFeedback, feedbackEdit, updateFeedback } = useContext<any>(FeedbackContext)

 useEffect(() => {
    if(feedbackEdit.edit === true) {
      setBtnDisabled(false)
      setText(feedbackEdit.item.text)
      setRating(feedbackEdit.item.rating)
    }

 }, [feedbackEdit])

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

  const handleSubmit = (e: any) => {
    e.preventDefault()
    if(text.trim().length > 10) {
      const newFeedback = {
        text,
        rating
      }

      if(feedbackEdit.edit === true) {
        updateFeedback(feedbackEdit.item.id, newFeedback)
      } else {
        addFeedback(newFeedback)

      }

      setText('')
    }
  }

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us?</h2>
        <RatingSelect select={setRating} selected={rating}/>
        <div className="input-group">
          <input onChange={handleTextChange} type="text" placeholder='write a review' value={text} />
          <Button type='submit' isDisabled={btnDisabled}>Send</Button>
        </div>
      </form>
      {message && <div className='message'>{message}</div>}
    </Card>
  )
}

export default FeedbackForm

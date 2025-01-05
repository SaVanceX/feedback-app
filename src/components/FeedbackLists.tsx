import React, { useContext } from 'react'
import FeedbackItem from './FeedbackItem'
import FeedbackContext from '../context/FeedbackContext'
import Spinner from './Shared/Spinner'


function FeedbackLists() {
// @ts-ignore

  const {appData, isLoading} = useContext(FeedbackContext)

  if(!isLoading && (!appData || appData.length === 0)) {
    return <p>No feedback yet</p>
  }

  return isLoading ? (
    <Spinner/>
  ):(
    <div className='feedback-list'>
      {appData.map((item: any) => (
        <FeedbackItem
          key={item.id}
          item={item}
        />
      ))}
    </div>
  )


}

export default FeedbackLists

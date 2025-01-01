import React from 'react'

type SelectProps = {
  select: any;
  selected: any;
}

function RatingSelect({select, selected}: SelectProps) {

  const handleChange = ({ currentTarget: { value } }:any) => {
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
            checked={+selected === i + 1}
          />
          <label htmlFor={`num${i + 1}`}>{i + 1}</label>
        </li>
      ))}
    </ul>
  )
}

export default RatingSelect

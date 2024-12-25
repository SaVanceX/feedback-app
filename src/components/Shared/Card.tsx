import React, {ReactNode} from 'react'

type CardProps = {
  children: ReactNode;
  reverse?: boolean;
}

// This is a styled component
function Card({children, reverse = false}: CardProps) {
  return (
    <div className={`card ${reverse && 'reverse'}`}>
      {children}
    </div>
  )

}



export default Card

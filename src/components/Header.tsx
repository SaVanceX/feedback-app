import React from "react"


function Header({text = 'Feedback UI'}: {text?: string}) {

  return (
    <header>
      <div className="container">
        <h2>{ text }</h2>
      </div>
    </header>
  )
}


export default Header

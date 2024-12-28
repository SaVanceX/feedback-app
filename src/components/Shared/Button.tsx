import React, { ReactNode } from 'react'




type ButtonProps = {
  children: ReactNode;
  version?: string;
  type: 'submit' | 'button' | 'reset';
  isDisabled: boolean;
}

function Button({
  children,
  version = 'primary',
  type = 'button',
  isDisabled = false
 }: ButtonProps) {
  return (
    <button type={type} disabled={isDisabled} className={`btn btn-${version}`}>
      {children}
    </button>
  )
}

export default Button

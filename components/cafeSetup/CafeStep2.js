import React from 'react'

const CafeStep2 = ({ next, value, handleChange }) => {
  const handleSubmit = (e) => {
    e.preventDefault()
    next()
  }
  return <div>cafeStep2</div>
}

export default CafeStep2

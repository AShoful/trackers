import React, { useState } from 'react'

const Input = () => {

  const [value, setValue] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(value)
    setValue('')
  }

  return <div>
    <form onSubmit={handleSubmit}>
      <input type="text" 
        placeholder="enter name" 
        onChange={(e) => setValue(e.target.value)}
        value={value} />
    </form>  
  </div>
}

export default Input
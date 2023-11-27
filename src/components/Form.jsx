import React, { useRef } from 'react'

const Form = ({fetchWeather}) => {
  const searchKey= useRef('')
  
  return (
    <div className='w-100 d-flex justify-content-center mt-4 p-4 '>
      <input ref={searchKey}  className='form-control me-2 ' placeholder='enter city name' type="text" />
      <input type="button" onClick={()=> fetchWeather(searchKey.current.value)} value="search" className='me-5 btn btn-primary text-white' name="" id="" />

    </div>
  )
}

export default Form
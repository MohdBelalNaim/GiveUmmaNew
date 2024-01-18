import React from 'react'

const Avatar = ({ name }) => {
  return (
      <div className='primary h-24 w-24 rounded-full text-white grid place-items-center text-5xl'>{name?.split('')[0]}</div>
  )
}

export default Avatar
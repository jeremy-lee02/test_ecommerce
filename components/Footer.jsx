import React from 'react'
import { AiFillInstagram, AiFillFacebook, AiOutlineTwitter, AiFillYoutube } from 'react-icons/ai'

const Footer = () => {
  return (
    <div className='footer-container'>
      <p>2022 Audio Store All Rights reserved</p>
      <p className='icons'>
        <AiFillInstagram />
        <AiFillFacebook />
        <AiOutlineTwitter />
        <AiFillYoutube />
      </p>
    </div>
  )
}

export default Footer
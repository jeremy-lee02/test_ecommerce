import React from 'react'
import Link from 'next/link'

import { urlFor } from '../lib/client'


const AudioBanner = ({audioBanner}) => {
  return (
    <div className='hero-banner-container'>
      <div>
        <p className='beats-solo'>{audioBanner.smallText}</p>
        <h3>{audioBanner.midText}</h3>
        <h1>Up To 80%</h1>
        <img src={urlFor(audioBanner.image)} alt='headphones' className='hero-banner-image' />
        <div>
          <Link href= {`/product/${audioBanner.product}`}>
            <button type='button'>{audioBanner.buttonText}</button>
          </Link>
          <div className='desc'>
            <h5>Description</h5>
            <p>{audioBanner.desc}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AudioBanner
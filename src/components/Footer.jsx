import React from 'react'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export const Footer = () => {
  return (
    <div className='d-flex justify-content-evenly pt-3'>
        <p>Connect with us on Social media</p>
        <div className='d-flex gap-5 '>
        <FontAwesomeIcon icon={faFacebookF} />
<FontAwesomeIcon icon={faTwitter} />
<FontAwesomeIcon icon={faInstagram} />
<FontAwesomeIcon icon={faYoutube} />
        </div>




        {/* <p><span>{faFacebookF}</span> <span>{faTwitter}</span> <span>{faInstagram}</span><span>{faYoutube}</span></p> */}
    </div>
  )
}

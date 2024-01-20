import React from 'react'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export const Footer = () => {
    return (
        <div className='d-flex justify-content-evenly align-items-center bg-dark pt-3 fs-5 '>
            <p className='text-white'>Connect with us on Social media</p>
            <div className='d-flex gap-5 '>
                <FontAwesomeIcon className='text-primary' icon={faFacebookF} />
                <FontAwesomeIcon className='text-danger' icon={faInstagram} />
                <FontAwesomeIcon className='text-primary text-opacity-75' icon={faTwitter} />
                <FontAwesomeIcon className='text-danger' icon={faYoutube} />
            </div>

            <p className='text-white' ><a  className='link-underline-primary'>Subscribe</a> to our newsletter!</p>




        </div>
    )
}

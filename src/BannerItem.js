import React from 'react'
import "./index.css"

const BannerItem = props => {
    const {BannerItemDetails} = props
    const { headerText, description, className } = BannerItemDetails
  return (
    
        <li className={`${className} banner-card-item`}>
            <div>
                <h1 className='heading'>{headerText}</h1>
                <p className='description'>{description}</p>
                <button className="show-more-btn" type='submit'>Show More</button>
            </div>
        </li>

    
  )
}

export default BannerItem
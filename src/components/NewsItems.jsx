import React from 'react'
import image from '../assets/news.webp'

export const NewsItems = ({title, description, src,url}) => {
    return (

        <div className="card bg-dark text-light mb-3 d-inline-block m-3 p-2" style={{maxWidth:"345px"}}>
            <img src={src?src:image} style={{height:"200px", width:"330px"}} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{title? title.slice(0,28): "Hot News"}</h5>
                {/* <h5 className="card-title">{title}</h5> */}
                <p className="card-text" style={{minHeight:'100px'}}>{description? description.slice(0, 140): "Read this interesting story below"}</p>
                {/* <h5 className="card-title">{title}</h5> */}
                {/* <p className="card-text">{description}</p> */}
                <a href={url} className="btn btn-primary">Read More</a>
            </div>
        </div>

    )
}

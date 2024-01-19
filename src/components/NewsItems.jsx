import React from 'react'

export const NewsItems = ({title, description, src,url}) => {
    return (

        <div className="card bg-dark text-light mb-3 d-inline-block m-3 p-2" style={{height:"500px",width:"360px"}}>
            <img src={src} style={{height:"200px", width:"340px"}} className="card-img-top" alt="..." />
            <div className="card-body">
                {/* <h5 className="card-title">{title.slice(0,50)}</h5>
                <p className="card-text">{description? description.slice(0, 90): "Read this interesting story below"}</p> */}
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <a href={url} className="btn btn-primary">Read More</a>
            </div>
        </div>

    )
}

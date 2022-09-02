import React from "react";

 const NewsItem =(props)=> {
  
    let { title, description, imageUrl, newsUrl, author, date, source } =
      props;
    return (
      <div className="my-3">
        <div className="card" style={{ width: "18rem" }}>
          <div style={{display:'flex',
        justifyContent:'flex-end',
        position:'absolute',
        right:"0"
        }}>
          <span className="badge rounded-pill bg-danger" >
            {source}</span>
          </div>
        
          <img
            src={
              imageUrl
                ? imageUrl
                : "https://ngs-space1.sgp1.digitaloceanspaces.com/am/uploads/mediaGallery/image/1642931887156.jpg-org"
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            
            <p className="card-text">{description}...</p>
            <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark">
              Read More
            </a>
            <p className="card-text">
              <small className="text-muted">
                by {!author ? "Unknown" : author} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
          </div>
        </div>
      </div>
    );
  
}

export default NewsItem;

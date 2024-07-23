import React, { Component } from 'react'

export class NewsItem extends Component {
 
  render() {
    let{title,description,imageUrl,newsUrl,author,date,source}=this.props;
    return (
      <div>
        
      <div className="card my-3" style={{width: '18rem'}}>
        
  <img src={!imageUrl?"https://www.hindustantimes.com/ht-img/img/2024/04/19/1600x900/India_Flag_1713518778477_1713518820010.jpeg":imageUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <span class="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{left:'85%', Index:'1'}}> 
   {source}
    
  </span>
    <p className="card-text">{description}</p>
    <p className="card-text"><small className="text-body-secondary">By {author} on {new Date(date).toGMTString()}</small></p>
    <a href={newsUrl} className="btn btn-sm btn-dark"> Read More &darr;</a>
  </div>
</div>

      </div>
    )
  }
}

export default NewsItem

import React,{useEffect}from "react";
import { useState } from "react";
import PropTypes from 'prop-types';
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

const News=(props)=>{
  const [articles, setarticles] = useState([]);
  const [page, setpage] = useState(1);
  const [loading, setloading] = useState(true);
  const [totalResults, settotalResults] = useState(0);
  // document.title=`${this.capitalizeFirstLetter(props.category)}-NewsMonkey`;

  
  
 
  const capitalizeFirstLetter=(string)=> {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const updatenews=async()=>{
    const url=`https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apikey=${props.apikey}&page=${page}&pagesize=${props.pagesize}`;
    setloading(true);
    let data=await fetch(url);
    props.Setprogress(30);
    let parsedData=await data.json();
    props.Setprogress(70);
    setarticles(parsedData.articles);
    settotalResults(parsedData.totalResults);
    setloading(false);
    props.Setprogress(100);


  }

  useEffect(() => {
    updatenews();
  }, []);
  

      
  

  const handlenext=async()=>{
    
    setpage(page+1);
    updatenews();
    // if(!(this.state.page+1>Math.ceil(this.state.totalresults/20))){  //Math.ciel() returns nearest large integer ex: Math.ceil(4.5) return 5

    // let url=`https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apikey={props.apikey}fa179312df03425a86d0c341fe8d025e&page=${this.state.page+1}&pagesize=${props.pagesize}`;
    // this.setState({loading:true});
    // let data= await fetch(url);
    // let parsedData= await data.json();
    // //console.log(parsedData);
    // this.setState({articles:parsedData.articles,page:this.state.page+1,loading:false});
    // }
  }

 const handleprev=async()=>{
    
    setpage(page-1);
    updatenews();
    // let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey={props.apikey}fa179312df03425a86d0c341fe8d025e&page=${this.state.page-1}&pagesize=${props.pagesize}`;
    // this.setState({loading:true});
    // let data= await fetch(url);
    // let parsedData= await data.json();
    // //console.log(parsedData);
    // this.setState({articles:parsedData.articles,
    // page:this.state.page-1,
    // loading:false

    // }
    //   );

  }

  const fetchMoreData=async()=>{
    
   
    const url=`https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apikey=${props.apikey}&page=${page+1}&pagesize=${props.pagesize}`;
    setpage(page+1)
    let data=await fetch(url);
    let parsedData=await data.json();
    setarticles(articles.concat(parsedData.articles));
    settotalResults(parsedData.totalResults);
    setloading(false);
    


  }
  
   
   
    return (
      
      <>
          <h1 className="text-center" style={{marginTop:'90px'}}>NewsMonkey - Top {capitalizeFirstLetter(props.category)} Headlines</h1>
        {loading && <Spinner/>}
        
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length!==totalResults}
          loader={<Spinner/>}
        >
         <div className="container">
        <div className="row">
        {articles.map((element)=>{
          return  <div className="col-md-4" key={element.url}>
          <NewsItem title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
        </div>
        })}
        </div>
        </div> 
        </InfiniteScroll>
        
        {/* <div className="container d-flex justify-content-between">
          <button disabled={this.state.page<=1} onClick={this.handleprev} className="btn btn-dark">&larr;Previous</button>
          <button disabled={this.state.page+1>Math.ceil(this.state.totalresults/props.pagesize)} className="btn btn-dark" onClick={this.handlenext}>&rarr;Next</button>
        </div> */}
      </>
    );
  
}

News.propTypes={
  country:PropTypes.string,
  pagesize:PropTypes.number,
  category:PropTypes.string,
}


News.defaultProps={
  country:"in",
  pagesize:8,
  category:"general",
}

export default News;

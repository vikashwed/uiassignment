import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Fetch.css';

class Fetch extends Component {

  constructor(props){
      super(props);
        this.state = {
            error : null,
            isLoaded : false,
            posts : []        
        };
  }

componentDidMount() {
        // I will use fake api from jsonplaceholder website
        // this return 100 posts 
        //fetch("https://api.spacexdata.com/v3/launches?limit=100")
         fetch("https://api.spaceXdata.com/v3/launches?limit=100&launch_success=true&land_success=true&launch_year=2018")
        .then( response => response.json())
        .then(
            // handle the result
            (result) => {
                this.setState({
                    isLoaded : true,
                    posts : result
                });
            },

            // Handle error 
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                })
            },
        )
    }

  render() {
        const {error, isLoaded, posts} = this.state;

        if(error){
            return <div>Error in loading</div>
        }else if (!isLoaded) {
            return <div>Loading ...</div>
        }else{
            return(
                <div>
                <div class="backmain">
  <div class="mainbox">
    <h1 class="mainheading">SpaceX Lanuch Programs</h1>
    <div class="fullwidth">
      <div class="leftbox">
        <h2>Filters</h2>
        <div class="subtxt">Launch Year</div>
            <ul class="filterval">        
              <li class="active"><a href="#">2006</a></li>
              <li><Link to="/2007">2007</Link></li>
              <li><Link to="/2008">2008</Link></li>
              <li><a href="#">2009</a></li>
              <li><a href="#">2010</a></li>
              <li><a href="#">2011</a></li>
              <li><a href="#">2012</a></li>
              <li><a href="#">2013</a></li>
              <li><a href="#">2014</a></li>
              <li><a href="#">2015</a></li>
              <li><a href="#">2016</a></li>
              <li><a href="#">2017</a></li>
              <li><a href="#">2018</a></li>
              <li><a href="#">2019</a></li>
              <li><a href="#">2020</a></li>     
            </ul>
          
        <div class="subtxt">Successful Launch </div>
          <ul class="filterval">
          <li><a href="#">True</a></li>
          <li><a href="#">False</a></li>          
        </ul>     
        <div class="subtxt">Successful Landing</div>
          <ul class="filterval">
          <li><a href="#">True</a></li>
          <li><a href="#">False</a></li>          
        </ul>

      </div>
      <div class="rightbox">
        <ul class="listbx">
          {
             posts.map(post => (
                  //{posts.links.map((mission_patch, index) => ())}
        <li><div class="imgblk"><img  src={post.links.mission_patch} /></div>
        <div class="head"><a href="#">{post.mission_name} </a></div>
        <div class="txt">Mission Ids: <span>{post.mission_id}</span></div>
        <div class="txt">Launch: <span>{post.launch_year }</span></div>
        <div class="txt">Successful Launch: <span>{post.launch_success ? "True" : "False" }</span></div>
        <div class="txt">Successful Landing: <span>{post.rocket.first_stage.cores[0].land_success ? "True" : "False" }</span></div>
        </li>
         ))
         }         
        </ul>
      </div>
    </div>
  </div>  
</div>
<footer class="showtxt"><strong>Developed by :</strong> Vikash Gupta</footer>
</div>
            );
        }    
    }







  
}

export default Fetch;
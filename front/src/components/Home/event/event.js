import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

class Event extends Component {
  render(){
    const events = [{
  title : "hello",
  sDate : "5-6" ,
  eDate : "5-6"  ,
  sTime : "5-6" ,
  eTime : "5-6" ,
  description : "hi",
  // img : src ""
}, 
{
  title : "hello",
  sDate : "5-6" ,
  eDate : "5-6"  ,
  sTime : "5-6" ,
  eTime : "5-6" ,
  description : "hi",
  // img : src ""
} , ]
    return (
          <div className="bg-light page-section" id="portfolio">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h2 className="section-heading text-uppercase">  OUR EVENTS </h2>
                <h3 className="section-subheading text-muted"> the place of magic !</h3>
              </div>
            </div>
            <div className="row">
              {
               events.map(({title , sDate , eDate , sTime , eTime , description , img } , index) => 
               <div class="card">
               <a>
                   <img className="img-fluid" src={ `https://unsplash.it/350/140/?${Math.floor(Math.random(0,100) * 100)}` } alt="portfolio_img" />
               </a>
     <ul class="list-group my-0 pl-1">
     <strong> {title} </strong>
       <li class="list-inline-item"><i class="far fa-clock"></i> {events.sDate}</li>
       <li class="list-inline-item"><i class="fas fa-calendar-check"></i> 5-Nov  </li>
       <li class="list-inline-item"><i class="fas fa-calendar-check"></i> 5-Nov  </li>
       <li class="list-inline-item"><i class="fas fa-map-marker-alt"></i> New-Delhi</li> 
       </ul>
  <strong rows = "5"  rows="4" cols="50" name = "description">
here we will find the life 
</strong> 
<button type="button" class="btn btn-warning">book</button>
           </div>
               ) 
              }  
            </div>
          </div>
        </div>
        );
    }
  }
    export default Event;

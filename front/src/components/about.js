import React , {Component} from "react";
import {NavLink} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';


class About extends Component {
  render(){
        
    return (
 
      
  <section className="page-section" id="about">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading text-uppercase">About</h2>
          <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <ul className="timeline">
            <li>
              <div className="timeline-image">
                <img className="rounded-circle img-fluid" src="img/about/1.jpg" alt=""/>
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>11-Nov - 20-Nov</h4>
                  <h4 className="subheading">Our Humble Beginnings</h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">we started with alot of love and exiting !</p>
                </div>
              </div>
            </li>
            <li className="timeline-inverted">
              <div className="timeline-image">
                <img className="rounded-circle img-fluid" src="img/about/2.jpg" alt=""/>
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>20-Nov - 21 - Nov </h4>
                  <h4 className="subheading"> we faild </h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">but we decide to work as a team and make a lot of effort !</p>
                </div>
              </div>
            </li>
            <li>
              <div className="timeline-image">
                <img className="rounded-circle img-fluid" src="img/about/3.jpg" alt=""/>
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4> 25 - Nov</h4>
                  <h4 className="subheading">we stand and sucees again </h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">and we lunced oue first website !</p>
                </div>
              </div>
            </li>
           
            <li className="timeline-inverted">
              <div className="timeline-image">
                <h4>Be Part
                  <br/>Of Our
                  <br/>Story!</h4>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
    )
}
}


export default About;

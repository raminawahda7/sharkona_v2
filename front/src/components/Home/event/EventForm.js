import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
class EventForm extends Component {
    render(){
          
    return (
   
          <section className="page-section" id="contact">
          <div className="container">
            <div className="row">
             <div className="col-lg-12 text-center">
                 <h2 className="section-heading text-uppercase"> Share your event  </h2>
                 <h3 className="section-subheading text-muted">we will be happy to meet you ♥</h3>
               </div>
             </div>
             <div className="row">
               <div className="col-sm-12">
                <form id="contactForm" name="sentMessage" novalidate="novalidate">
                   <div className="row">
                     <div className="col-md-6">
                       <div className="form-group">
                         <input className="form-control" id="title" type="text" placeholder="Event title *" required="required" data-validation-required-message="Please enter Your Event Title ."/>
                 <p className="help-block text-danger"></p>
                       </div>

                       <div className="form-group">
                         <input className="form-control" id="date" type="date" placeholder="start Time *" required="required" data-validation-required-message="Please enter event start time."/>
                         <p className="help-block text-danger"></p>
                       </div>
                       <div className="form-group">
                        <input className="form-control" id="date" type="time" placeholder="start date *" required="required" data-validation-required-message="Please enter event start date."/>
                         <p className="help-block text-danger"></p>
                       </div>

                      

                       <div className="form-group">
                         <input className="form-control" id="name" type="text" placeholder="Event Location  *" required="required" data-validation-required-message="Please enter your event Locaton."/>
                 <p className="help-block text-danger"></p>
                       </div>
                     
      
                     </div>
                     <div className="col-md-6">
                       <div className="form-group">
                   <input className="form-control" id="phone" type="phone" placeholder="phone number *" required="required" data-validation-required-message="Please enter your phone number."/>
                 <p className="help-block text-danger"></p>
                       </div>
                      
                       <div className="form-group">
                         <input className="form-control" id="date" type="date" placeholder=" end Time *" required="required" data-validation-required-message="Please enter event end time."/>
                         <p className="help-block text-danger"></p>
                       </div>
                       <div className="form-group">
                         <input className="form-control" id="date" type="time" placeholder="end Date *" required="required" data-validation-required-message="Please enter event end date."/>
                         <p className="help-block text-danger"></p>
                       </div>
          
                       <div className="form-group">
                         <input className="form-control" id="logo" type="file" placeholder=" insert your company logo*" required="required" data-validation-required-message="Please insert your company img."/>
                         <p className="help-block text-danger"></p>
                       </div>
                
          
                     </div>
                     
                     
                   
                     <div className="clearfix"></div>
                     <div className="col-lg-12 text-center">
                       <div id="success"></div>
                       <button id=" join us " className="btn btn-primary btn-xl text-uppercase" type="submit">join us</button>
                     </div>
                   </div>
                 </form>
               </div>
             </div>
           </div>
         </section>
  
      )
  }
  }
  
  
  export default EventForm;
  
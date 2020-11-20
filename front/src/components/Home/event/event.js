import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import calen from './eventpic/calender.png'
import book from './eventpic/book.png'

import clock from './eventpic/clock.png'
class Event extends Component {
  render() {
    const events = [{
      title: "Jawwal Event",
      sDate: "10/11/2020",
      sTime: "06:00 pm",
      eDate: "16/11/2020",
      eTime: "10:30 pm",
      location: "Ramallah",
      phoneNumber: "0599587398"
    }]
    return (
      <div className="eventPage page-section " id="contact">
        <div className="container ">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="forEvent">  OUR EVENTS ♥ </h2>
              <h3 className="wellcom"> THe  PlAce WheRe yOu wiLL EnjOy !</h3><br /><br />
            </div>
          </div>
          <div className="row ">
            {
              events.map(({ title, sDate, sTime, eDate, eTime, location, phoneNumber }, index) =>
                <div class="card">
                  <a>
                    <img className="img-fluid" src={`https://unsplash.it/350/140/?${Math.floor(Math.random(0, 100) * 100)}`} alt="portfolio_img" />
                  </a>
                  <ul class=" list-group my-0 pl-1">
                    <strong className="pEvent"> {title} </strong><br />
                    <li class="list-inline-item" className="pEvent"><i class="fas fa-calendar-check" > &nbsp; <img className="clockStyle" src={clock} /> Start Event:&nbsp; {sTime}</i> &nbsp; <i class="fas fa-calendar-check" > <img className="clockStyle" src={clock} />End Event:&nbsp; {eTime}  &nbsp; </i></li><br /><br />
                    <li class="list-inline-item" className="pEvent"><i class="fas fa-calendar-check" >  &nbsp; <img className="clockStyle" src={calen} />Start Date:&nbsp;{sDate}</i> &nbsp; <i class="fas fa-calendar-check" > <img className="clockStyle" src={calen} />End Date:&nbsp;{eDate}  &nbsp; </i></li><br /><br />
                    <li class="list-inline-item" className="pEvent"><i class="fas fa-calendar-check" >  &nbsp; Event Location:&nbsp;{location}</i> &nbsp; <i class="fas fa-calendar-check" >Phone Number:&nbsp; {phoneNumber}  &nbsp; </i></li><br /><br />
                  </ul>
                  <button type="button" class="btn btn-warning">  <img className="clockStyle" src={book} />book</button>
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

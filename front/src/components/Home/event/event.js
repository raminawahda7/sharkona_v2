import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import Card from './eventCard'


class Event extends Component {
  constructor(props) {
    super(props)
    this.state = {
      events: [],
      orgEvents: [],
      userEvents: []
    }
  }

  componentDidMount = () => {
    this.getEvents()
    this.getOrgEvents({ orgId: this.props.orgId })
  }

  getOrgEvents = (obj) => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(obj)
    };
    fetch('/orgEvents', requestOptions)
      .then(response => response.json())
      .then(data => this.setState({ orgEvents: data }));
  }

  getEvents = () => {
    const requestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    };
    fetch('/retrieveEvent', requestOptions)
      .then(response => response.json())
      .then(data => {
        this.setState({ events: data })
        console.log(data)
      })
  }

  render() {
    // const events = [{
    //   title: "Jawwal Event",
    //   sDate: "10/11/2020",
    //   sTime: "06:00 pm",
    //   eDate: "16/11/2020",
    //   eTime: "10:30 pm",
    //   location: "Ramallah",
    //   phoneNumber: "0599587398"
    // }]

    const { events } = this.state

    return (
      <div className="eventPage page-section ">
        <div className="container ">
          <div className="row" >
            <div className="col-lg-12 text-center">
              <h2 className="forEvent">  OUR EVENTS ♥ </h2>
              <h3 className="wellcom"> THe  PlAce WheRe yOu wiLL EnjOy !</h3><br /><br />
            </div>
          </div>
          <div className="row" id="eventsCard">
            {
              events.map(({ name, startDate, startTime, endDate, endTime, location, phoneNumber }, index) =>
                <Card title={name} sDate={startDate} sTime={startTime} eDate={endDate} eTime={endTime} location={location} phoneNumber={phoneNumber} key={index} />
              )
            }

          </div>
        </div>
      </div>
    );
  }
}
export default Event;

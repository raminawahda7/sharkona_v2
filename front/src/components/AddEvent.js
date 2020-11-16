import React, { Component } from "react"


export class AddEvent extends Component {
    render() {
        return (
            <form>
                <h3>Add Event</h3>

                <div className="form-group">
                    <label>Event name</label>
                    <input type="text" className="form-control" placeholder="Event name" />
                </div>

                <div className="form-group">
                    <label>Start Date </label>
                    <input class="form-control" type="date" value="2011-08-19" id="example-date-input" />
                </div>

                <div className="form-group">
                    <label>End date</label>
                    <input class="form-control" type="date" value="2011-08-19" id="example-date-input" />
                </div>

                <div className="form-group">
                    <label>start Time</label>
                    <input class="form-control" type="time" value="13:45:00" id="example-time-input" />
                </div>

                <div className="form-group">
                    <label>End Time</label>
                    <input class="form-control" type="time" value="13:45:00" id="example-time-input" />
                </div>

                <div className="form-group">
                    <label>Discription of Event</label>
                    <textarea class="form-control" id="exampleTextarea" rows="3"></textarea>
                    
                </div>

                <div class="form-group">
                    <label for="exampleInputFile">upload Your Company Logo</label>
                    <input type="file" class="form-control-file" id="exampleInputFile" aria-describedby="fileHelp" />
                    <small id="fileHelp" class="form-text text-muted" />
                </div>

                <button type="submit" className="btn btn-primary btn-block">Add Event</button>
            </form>
        );
    }
}

export default AddEvent
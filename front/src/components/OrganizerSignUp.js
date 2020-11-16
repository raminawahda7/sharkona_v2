import React, { Component } from "react"

export class OrganizerSignUp extends Component {
    render() {
        return (
            <form>
                <h3>Sign Up Organizer</h3>

                <div className="form-group">
                    <label>Your name</label>
                    <input type="text" className="form-control" placeholder="Your name" />
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <label>Your Location</label>
                    <input type="text" className="form-control" placeholder="Your location" />
                </div>

                <div className="form-group">
                    <label>Your Number</label>
                    <input type="text" className="form-control" placeholder="Your Number" />
                </div>

                <div className="form-group">
                    <label>Your Company Name</label>
                    <input type="text" className="form-control" placeholder="Your Company Name" />
                </div>

                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered <a href="/">sign in?</a>
                </p>
            </form>
        )
    }
}


export default OrganizerSignUp
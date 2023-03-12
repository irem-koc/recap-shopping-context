import React from "react";
import "./Signup.css";
const Signup = () => {
    return (
        <div className="signup">
            <div className="input-name">
                <label htmlFor="name">Name:</label>
                <input
                    className="name-input"
                    type="text"
                    name="name"
                    autoFocus
                    autoComplete="off"
                />
            </div>
            <div className="input-surname">
                <label htmlFor="name">Surname:</label>
                <input
                    className="surname-input"
                    type="text"
                    name="surname"
                    autoComplete="off"
                />
            </div>
            <button className="submit-btn">Submit</button>
        </div>
    );
};

export default Signup;

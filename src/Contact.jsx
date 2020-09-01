import React from 'react';
import './index.css';
import { useState } from 'react';

const Contact = () => {

    const [data, setData] = useState({
        name: "",
        phone: "",
        email: "",
        message: ""
    });

    const inputEvent = (event) => {
        const { name, value } = event.target;
        setData((preVal) => {
            return { ...preVal, [name]: value }
        });
    }

    const formSubmit = (event) => {
        event.preventDefault();
        alert(`${data.name}...${data.email}...${data.phone}...${data.message}`);
        setData({
            name: "",
            phone: "",
            email: "",
            message: ""
        });
    }

    return (
        <>
            <div className="my-5">
                <h1 className="text-center"> Contact US </h1>
            </div>

            <div className="container contact_div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form onSubmit={formSubmit}>
                            <div class="mb-3">
                                <label
                                    for="exampleFormControlInput1"
                                    class="form-label">Name</label>
                                <input
                                    required
                                    type="text"
                                    class="form-control"
                                    id="exampleFormControlInput1"
                                    name="name"
                                    onChange={inputEvent}
                                    value={data.name}
                                    placeholder="Enter your name" />
                            </div>
                            <div class="mb-3">
                                <label
                                    for="exampleFormControlInput1"
                                    class="form-label">Email</label>
                                <input
                                    type="email"
                                    class="form-control"
                                    id="exampleFormControlInput1"
                                    name="email"
                                    onChange={inputEvent}
                                    value={data.email}
                                    autoComplete="none"
                                    placeholder="name@example.com" />
                            </div>
                            <div class="mb-3">
                                <label
                                    for="exampleFormControlInput1"
                                    class="form-label">Phone</label>
                                <input
                                    type="number"
                                    class="form-control"
                                    id="exampleFormControlInput1"
                                    name="phone"
                                    onChange={inputEvent}
                                    value={data.phone}
                                    placeholder="Enter your number" />
                            </div>
                            <div class="mb-3">
                                <label
                                    for="exampleFormControlTextarea1"
                                    class="form-label">Message</label>
                                <textarea
                                    class="form-control"
                                    id="exampleFormControlTextarea1"
                                    name="message"
                                    onChange={inputEvent}
                                    value={data.message}
                                    rows="3"></textarea>
                            </div>
                            <div class="col-12">
                                <button class="btn btn-outline-primary mb-5" type="submit">Send</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;
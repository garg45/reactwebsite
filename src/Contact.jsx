import React, { useState } from 'react';

const Contact = () => {

    const [data, setData] = useState({
        fullname:"",
        msg:"",
        phone:"",
        email:""
    });
    const inputEvent=(event)=>{
        const {name, value}= event.target;
        setData((preval)=>{
            return{
                ...preval,
               [name]:value
            }
        });
    }
    const submitForm=(e)=>{
        e.preventDefault()
        alert(`My fullname is ${data.fullname}, my mobile number is ${data.phone} and my email id is ${data.email} and I have sent message is ${data.msg}`);
        setData(()=>{
            return{
                fullname:"",
                msg:"",
                phone:"",
                email:""
            }
        });
    }
    return (
        <>
            <div className='my-5'>
                <h1 className='text-center'>Contact Us</h1>
            </div>
            <div className='container contact_div'>
                <div className='row'>
                    <div className='col-md-6 col-10 mx-auto'>
                        <form onSubmit={submitForm}>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">FullName</label>
                                <input type="text" class="form-control" id="exampleFormControlInput1" name='fullname' value={data.fullname} onChange={inputEvent} placeholder="Enter your name" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput2" class="form-label">Phone</label>
                                <input type="number" class="form-control" id="exampleFormControlInput2" name='phone' value={data.phone} onChange={inputEvent} placeholder="mobile number" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput3" class="form-label">Email address</label>
                                <input type="email" class="form-control" id="exampleFormControlInput3" name='email' value={data.email} onChange={inputEvent} placeholder="name@example.com" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlTextarea4" class="form-label">Message</label>
                                <textarea class="form-control" id="exampleFormControlTextarea4" rows="3" onChange={inputEvent} name='msg' value={data.msg}></textarea>
                            </div>
                            <div class="col-12">
                                <button class="btn btn-outline-primary" type="submit">Submit form</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;
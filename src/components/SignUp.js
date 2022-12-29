import React, { useState } from "react";

 const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
    const [mobile, setMobile] = useState('');
    const [state, setState] = useState('');
    const [city, setCity] = useState('');
    const [desc, setDesc] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="auth-form-container">
            <h2>Register</h2>
        <form className="register-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Full name</label>
            <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="full Name" />
            <label htmlFor="mobile">Mobile</label>
            <input value={mobile} onChange={(e) => setMobile(e.target.value)} id="mobile" placeholder="0123456789"   />
            <label htmlFor="email">email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
            <label htmlFor="password">password</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="****" id="password" name="password" />
            <label htmlFor="state"> State</label>
            <input value={state} name="state" onChange={(e) => setState(e.target.value)} id="state" placeholder="state" />
            <label htmlFor="city"> City</label>
            <input value={city} name="city" onChange={(e) => setCity(e.target.value)} id="city" placeholder="city" />
            <label htmlFor="desc"> Description</label>
            <input value={desc} name="desc" onChange={(e) => setDesc(e.target.value)} id="desc" placeholder="description" />
            <button type="submit">Log In</button>
        </form>
        <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
    </div>
    )
}

export default Register;
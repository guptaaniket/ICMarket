import React, { useState } from 'react';
import './DepositBonusForm.css';

const DepositBonusForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        country: '',
        agree: false,
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);

        if (formData.name && formData.email && formData.phone && formData.country && formData.agree) {
            alert('Form submitted successfully!');
        }
    };

    return (
        <div className="form-wrapper">

            <form className="bonus-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="First and Last Name*"
                    value={formData.name}
                    onChange={handleChange}
                    className={submitted && !formData.name ? 'error' : ''}
                />
                {submitted && !formData.name && (
                    <div className="error-message">This field is required.</div>
                )}
                <input
                    type="email"
                    name="email"
                    placeholder="Email*"
                    value={formData.email}
                    onChange={handleChange}
                    className={submitted && !formData.email ? 'error' : ''}
                />
                {submitted && !formData.email && (
                    <div className="error-message">This field is required.</div>
                )}

                <div className="phone-country">
                    <div className="phone-wrapper">
                        <select className="code-selector">
                            <option value="+61">+61</option>
                            <option value="+1">+1</option>
                            <option value="+91">+91</option>
                        </select>
                        <input
                            type="tel"
                            name="phone"
                            placeholder="Phone Number*"
                            value={formData.phone}
                            onChange={handleChange}
                            className={submitted && !formData.phone ? 'error' : ''}
                        />
                    </div>
                    {submitted && !formData.email && (
                        <div className="error-message">This field is required.</div>
                    )}
                    <select
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        className={submitted && !formData.country ? 'error' : ''}
                    >
                        <option value="">Please Select</option>
                        <option value="Australia">Australia</option>
                        <option value="USA">USA</option>
                        <option value="India">India</option>
                    </select>
                </div>
                {submitted && !formData.country && (
                    <div className="error-message">This field is required.</div>
                )}

                <div className="d-flex flex-row checkbox-label">
                    <input
                        type="checkbox"
                        name="agree"
                        checked={formData.agree}
                        onChange={handleChange}
                        style={{
                            width: "auto",
                            alignSelf: "start"
                        }}
                    />
                    <span style={{ textAlign: 'left' }}>
                        By completing this form, I confirm that I am opening a live account with IC Markets Global and that I have read and agreed to the<a> Terms and Conditions</a>, Deposit Bonus Terms and Conditions,<a>Privacy Policy</a> , and <a>Cookies Policy</a> .
                    </span>

                </div>
                {submitted && !formData.agree && (
                    <div className="error-message">This field is required.</div>
                )}
                <p className="terms-note">*Terms and Conditions apply</p>

                <button className="hero-button-register">Register</button>
            </form>
        </div>
    );
};

export default DepositBonusForm;
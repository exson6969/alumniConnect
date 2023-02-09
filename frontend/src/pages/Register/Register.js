import React, { useState, useEffect } from 'react';
import Header from '../../components/Header/Header';
import MainButton from '../../components/MainButton/MainButton';
import "./Register.css";
import { Navigate } from 'react-router-dom';

const Register = (props) => {
  const [redirect, setRedirect] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    cnfpassword: '',
    major: '',
    currentlocation:'', 
    occupation:'',
    phoneNumber:'',
    instagram:'',
    twitter:'',
    github:'',
    degree:'',
    institution:'',
    graduationYear:'',
    currentTitle:'',
    currentCompany:'',
    currentIndustry:'',
    previousCompany:'',
    previousIndustry:'',
    skills1:'',
    skills2:'',
    skills3:'',
    skills4:'',
    skills5:'',
    personalInterest1:'',
    personalInterest2:'',
    personalInterest3:'',
    hobby1:'',
    hobby2:'',
    hobby3:'',  
  });

  
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    try {
      const response =  fetch('http://localhost:5000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data =  response.json();
      console.log(JSON.parse(data));
    } catch (err) {
      console.error(err);
    }    setRedirect(true);
  };

  if (redirect) {
    return <Navigate to="/profile" />;
  };

  return (
    <div>
      <Header />
      <form className='register-form' onSubmit={handleSubmit}>
        <div className="all_info">
          <div className="info">
            <h3 class="register-heading">Personal Info</h3>
            <div class="field">
              <input
                class='input-field'
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div class="field">
              <input
                class='input-field'
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <div class="field">
              <input
                class='input-field'
                type="password"
                name="cnfpassword"
                placeholder="Confirm Password"
                value={formData.cnfpassword}
                onChange={handleChange}
              />
            </div>
            <div class="field">
              <input
                class='input-field'
                type="text"
                name="major"
                placeholder="Major"
                value={formData.major}
                onChange={handleChange}
              />
            </div>
            <div class="field">
              <input
                class='input-field'
                type="text"
                name="currentlocation"
                placeholder="Current Location"
                value={formData.currentlocation}
                onChange={handleChange}
              />
            </div>
            <div class="field">
              <input
                class='input-field'
                type="text"
                name="occupation"
                placeholder="Occupation"
                value={formData.occupation}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="info">
            <h3 class="register-heading">Contact Information</h3>
            <div class="field">
              <input
                class='input-field'
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div class="field">
              <input
                class='input-field'
                type="number"
                name="phoneNumber"
                placeholder="Phone Number"
                value={formData.phoneNumber}
                onChange={handleChange}
              />
            </div>
            <div class="field">
              <input
                class='input-field'
                type="text"
                name="instagram"
                placeholder="Instagram Username"
                value={formData.instagram}
                onChange={handleChange}
              />
            </div>
            <div class="field">
              <input
                class='input-field'
                type="text"
                name="twitter"
                placeholder="Twitter"
                value={formData.twitter}
                onChange={handleChange}
              />
            </div>
            <div class="field">
              <input
                class='input-field'
                type="text"
                name="github"
                placeholder="Github"
                value={formData.github}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="info">
            <h3 class="register-heading">Education Information</h3>
            <div class="field">
              <input
                class='input-field'
                type="text"
                name="degree"
                placeholder="Degree"
                value={formData.degree}
                onChange={handleChange}
              />
            </div>
            <div class="field">
              <input
                class='input-field'
                type="text"
                name="institution"
                placeholder="Institution"
                value={formData.institution}
                onChange={handleChange}
              />
            </div>
            <div class="field">
              <input
                class='input-field'
                type="text"
                name="graduationYear"
                placeholder="Graduation Year"
                value={formData.graduationYear}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="info">
            <h3 class="register-heading">Career Information</h3>
            <div class="field">
              <input
                class='input-field'
                type="text"
                name="currentTitle"
                placeholder="Current Job Title"
                value={formData.currentTitle}
                onChange={handleChange}
              />
            </div>
            <div class="field">
              <input
                class='input-field'
                type="text"
                name="currentCompany"
                placeholder="Current Company"
                value={formData.currentCompany}
                onChange={handleChange}
              />
            </div>
            <div class="field">
              <input
                class='input-field'
                type="text"
                name="currentIndustry"
                placeholder="Current Industry"
                value={formData.currentIndustry}
                onChange={handleChange}
              />
            </div>
            <div class="field">
              <input
                class='input-field'
                type="text"
                name="previousCompany"
                placeholder="Previous Company"
                value={formData.previousCompany}
                onChange={handleChange}
              />
            </div>
            <div class="field">
              <input
                class='input-field'
                type="text"
                name="previousIndustry"
                placeholder="Previous Industry"
                value={formData.previousIndustry}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="info">
            <h3 class="register-heading">Skills</h3>
            <div class="field">
              <input
                class='input-field'
                type="text"
                name="skills1"
                placeholder="Skill 1"
                value={formData.skills1}
                onChange={handleChange}
              />
            </div>
            <div class="field">
              <input
                class='input-field'
                type="text"
                name="skills2"
                placeholder="Skills 2"
                value={formData.skills2}
                onChange={handleChange}
              />
            </div>
            <div class="field">
              <input
                class='input-field'
                type="text"
                name="skills3"
                placeholder="Skills 3"
                value={formData.skills3}
                onChange={handleChange}
              />
            </div>
            <div class="field">
              <input
                class='input-field'
                type="text"
                name="skills4"
                placeholder="Skills 4"
                value={formData.skills4}
                onChange={handleChange}
              />
            </div>
            <div class="field">
              <input
                class='input-field'
                type="text"
                name="skills5"
                placeholder="skills 5"
                value={formData.skills5}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="info">
            <h3 class="register-heading">Interests and Hobbies</h3>
            <div class="field">
              <input
                class='input-field'
                type="text"
                name="personalInterest1"
                placeholder="Personal Interest 1"
                value={formData.personalInterest1}
                onChange={handleChange}
              />
            </div>
            <div class="field">
              <input
                class='input-field'
                type="text"
                name="personalInterest2"
                placeholder="Personal Interest 2"
                value={formData.personalInterest2}
                onChange={handleChange}
              />
            </div>
            <div class="field">
              <input
                class='input-field'
                type="text"
                name="personalInterest3"
                placeholder="Personal Interest 3"
                value={formData.personalInterest3}
                onChange={handleChange}
              />
            </div>
            <div class="field">
              <input
                class='input-field'
                type="text"
                name="hobby1"
                placeholder="Hobby 1"
                value={formData.hobby1}
                onChange={handleChange}
              />
            </div>
            <div class="field">
              <input
                class='input-field'
                type="text"
                name="hobby2"
                placeholder="Hobby 2"
                value={formData.hobby2}
                onChange={handleChange}
              />
            </div>
            <div class="field">
              <input
                class='input-field'
                type="text"
                name="hobby3"
                placeholder="Hobby 3"
                value={formData.hobby3}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <div class="register-submit"><MainButton name="Register" /></div>
      </form>
    </div>
  )
}

export default Register
import React, { useState } from 'react';
import NavBar from './NavBar';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';

const Home = () => {
  
  let [person, setPerson] = useState({
    username: "",
    email: "",
    gender: "",
    hobbies: [],
  });

  let { username, email, gender, hobbies } = person;

  let navigate = useNavigate();

  let handleChange = (event) => {
    let { name, value } = event.target;
    if (name === "hobbies") {
      value = value.split(",");
    }
    setPerson({ ...person, [name]: value });
  };

  let handleSubmit = async (e) => {
    e.preventDefault();
    if (username === "" || email === "" || gender === "" || hobbies.length === 0) {
      toast.error("Please fill all the fields...");
    } else {
      try {
        const response = await axios.post("http://localhost:3000/student/", person);
        if (response.status === 200) {
    
          navigate("/ViewAll");
          setPerson({
            username: "",
            email: "",
            gender: "",
            hobbies: [],
          });
        } else {
          toast.error("An error occurred while adding the person.");
        }
      } catch (e) {
        console.log(e);
        toast.error("An error occurred while adding the person.");
        
      }
    }
  };

  return (
    <>
      <NavBar/>
      <div className='FP'>
        <h1>WELCOME TO HOME PAGE</h1>    
        <form onSubmit={handleSubmit} className='Head'> 
          <legend>ADD PERSON</legend>
          <div>
            <label htmlFor="">Username</label>
            <input type="text" placeholder='Enter the username' value={username} name='username' onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="">Email</label>
            <input type="email" placeholder='Enter the email' value={email} name='email' onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="">Hobbies</label>
            <input type="text" placeholder='Enter hobbies separated by commas' value={hobbies.join(",")} name='hobbies' onChange={handleChange} />
          </div>
          <div>
            <select name="gender" value={gender} onChange={handleChange}>
              <option value="">Select gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <button>ADD PERSON</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Home;

import axios from 'axios';
import NavBar from './NavBar'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import toast from 'react-hot-toast';

const Update = () => {
    let [student, setStudent]= useState({
        username: "",
        email: "",
        gender: "",
        hobbies: [],
    });
    let { username, email, gender, hobbies } = student;

    let navigate = useNavigate();

    let {id} = useParams()
    console.log(id);

    let getApi= async ()=>{
    let {data} = await axios.get("http://localhost:3000/student/"+id);
    setStudent(data);
    }

    useEffect(()=>{
        try {
            getApi()
        } catch (e) {
            console.log(e)
        }
    },[])

    let handleChange= event =>{
        console.log(event);
        let {name, value} = event.target;
        if (name === "hobbies") {
            value = value.split(",");
        }
        setStudent({...student, [name]:value});
    };

    let handleSubmit= e =>{
        e.preventDefault();
        console.log(student)
        try {
            if (username === "" || email === "" || gender === "" || hobbies.length === 0){
                toast.error("Please fill all the fields...!");
            }else{
                axios.put("http://localhost:3000/student/"+id, student);
                navigate("/ViewAll");
                toast.success('Successfully Updated!')
                setStudent({
                    username: "",
                    email: "",
                    gender: "",
                    hobbies: [],
                });
            }
        } catch (e) {
            console.log(e)
            toast.error("An error occurred while updating the person.");
        }
    };

return (
    <>
      <NavBar />
      <form onSubmit={handleSubmit} className='FP'>
        <legend className='Head'>UPDATE STUDENT</legend>
        <div>
            <input type="text" placeholder='Enter the username' value={username} name='username' onChange={handleChange} />
        </div>
        <div>
            <input type="email" placeholder='Enter the email' value={email} name='email' onChange={handleChange} />
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
            <input type="text" placeholder='Enter hobbies separated by commas' value={hobbies ? hobbies.join(",") : ""} name='hobbies' onChange={handleChange} />
        </div>
        <div>
            <button>UPDATE STUDENT</button>
        </div>
      </form>
    </>
  )
}

export default Update

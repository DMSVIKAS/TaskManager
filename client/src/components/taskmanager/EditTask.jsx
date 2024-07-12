import './edittask.scss';
import {MdClose} from "react-icons/md";
import { useDispatch } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
const EditTask = () => {
	const navigate=useNavigate();
	const {itemId}=useParams();
	const [name, setName] = useState('');

	const handleSubmit=async (e)=>{
		e.preventDefault();
		console.log("Hello");
		console.log(name);
		console.log(itemId);
	try{
		let response = await axios.put(`http://localhost:4000/task/edit/${itemId}`,{name});
		if(response){
			alert("Updated Successfully");
			navigate("/taskmanager");
		}
	}catch(error){
		console.log(error);
	}
	}
	return (
		<div class="container1">
			{
				 
				<form onSubmit={handleSubmit}>
					<div class = "close-btn"> <MdClose/></div>
					<label htmlFor="name">Edit Issue Name:</label>
					<input type="text" id="name" value={name} name="name" onChange={(e) => setName(e.target.value)}/>
					<button onClick={handleSubmit}>Submit</button>
				</form>
				
			}
		</div>
	)
};

export default EditTask;
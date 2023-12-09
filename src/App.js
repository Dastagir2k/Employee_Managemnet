// import './App.css';
// import {useState} from "react";
// import Axios from "axios"
// function App() {
//   const [name,setName]=useState('');
//   const [email,setEmail]=useState('');
//   const [gender,setGender]=useState('');
//   const [employee,setEmployee]=useState([]);
//   // const displayInfo=()=>{
//   //   console.log(name+email+gender);
//   // }


//   const AddEmployee=(e)=>{
//     e.preventDefault();
//     Axios.post('http://localhost:3002/create',
//     {
//       name:name,
//       email:email,
//       gender:gender,
//     }).then(()=>{
//       console.log('Success');
//     }).catch((err)=>{
//       console.log("Errrorrrrr"+err);
//     })
//   }

//   const ShowEmployee = ()=>{
//     Axios.get('http://localhost:3002/show')
//     .then((result)=>{
//       setEmployee(result.data);
//       console.log(result);
//     }).catch((err)=>{
//       console.log("Error occur while display"+err);
//     })
//   }

//   return (
//     <div className='App'>
//       <div className='info'>
//         <label>Name :</label>
//         <input type='text'
//         onChange={(e)=>{setName(e.target.value)}}/>
//         <label>Email :</label>
//         <input type='email'
//         onChange={(e)=>{setEmail(e.target.value)}}/>
//         <label>Gender :</label>
//         <input type='text'
//         onChange={(e)=>{setGender(e.target.value)}}/>
//         <button onClick={AddEmployee}>Add Employee</button>
//       </div>
//       <hr/>
//       <div className='employee'>
//         <button onClick={ShowEmployee}>Show Employee</button>
//         {employee.map((val, id) => {
//           return <div key={id} className='employee'>
//             <h2>{val.name}</h2>
//             <h2>{val.email}</h2>
//             <h2>{val.gender}</h2>
//           </div>;
//         })}
//       </div>
//       {/* <div className='employee'>
//         <button onClick={ShowEmployee}>Shoe Employee</button>
//         <div>
//           {employee.map((data,id)=>(
//             <div key={id}>
//               <div>{data.name}</div>
//               <div>{data.email}</div>
//               <div>{data.gender}</div>
//             </div>
//           ))}
//         </div>
//       </div> */}
      
//     </div>
//   );
// }

// export default App;


import './App.css';
import { useState } from "react";
import Axios from "axios";

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [employee, setEmployee] = useState([]);

  const AddEmployee = (e) => {
    e.preventDefault();
    Axios.post('http://localhost:3002/create', {
      name: name,
      email: email,
      gender: gender,
    })
      .then(() => {
        console.log('Success');
      })
      .catch((err) => {
        console.log("Error: " + err);
      });
  }

  const ShowEmployee = () => {
    Axios.get('http://localhost:3002/show')
      .then((result) => {
        setEmployee(result.data);
        console.log(result);
      })
      .catch((err) => {
        console.log("Error occur while displaying: " + err);
      });
  }

  return (
    <div className='App'>
      <div className='info'>
        <label>Name :</label>
        <input type='text' onChange={(e) => { setName(e.target.value) }} />
        <label>Email :</label>
        <input type='email' onChange={(e) => { setEmail(e.target.value) }} />
        <label>Gender :</label>
        <input type='text' onChange={(e) => { setGender(e.target.value) }} />
        <button onClick={AddEmployee}>Add Employee</button>
      </div>
      <hr />
      <div className='employees'>
        <button onClick={ShowEmployee}>Show Employee</button>
        {employee.map((val, index) => (
  <div key={index} className='employee'>
    <h2>Name: {val.name}</h2>
    <h2>Email: {val.email}</h2>
    <h2>Gender: {val.gender}</h2>
  </div>
))}
      </div>
    </div>
  );
}

export default App;

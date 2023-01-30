import React, { useState } from "react";
import StudentDetails from '../components/StudentDetails'
import SimplePaper from "./MuiPaper";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function Student() {

    const [StudentDetails, setStudentDetails] = useState([
        {
            name: "Wasath Theekshana",
            age: "19",
            email: "wasath.vt@gmail.com",
            skill: "HTML"
        },

        {
            name: "Lithara Perera",
            age: "20",
            email: "lithara2002@gamil.com",
            skill: "HTML, CSS"
        },

        {
            name: "Trishan Phillipsz",
            age: "20",
            email: "asktikki69@gmail.com",
            skill: "UI/UX"
        },

        {
            name: "Yasith Silva",
            age: "21",
            email: "yasithranusha@gmail.com",
            skill: "DevOps"
        },

        {
            name: "Yashas Hewage",
            age: "21",
            email: "phyrashmin@students.nsbm.ac.lk",
            skill: "DevOps, Jqueary"
        },

    ]);



    const studentList = StudentDetails.map(aName => {
        return (
            <div>
                <SimplePaper
                    name={aName.name}
                    age={aName.age}
                    email={aName.email}
                    skill={aName.skill}
                />
            </div>
        )
    })

    const Btn = () => {
        return (
            <React.Fragment>
                <Stack spacing={2} direction="row">
                    <Button variant="outlined" onClick={addUserHandler}>Outlined</Button>
                </Stack>
            </React.Fragment>
        )
    };
    

    const addUserHandler = () => {
        const newUser = {
            name: "Dakum Perera",
            age: "21",
            email: "asdperera@students.nsbm.ac.lk",
            skill: "DevOps, QA Enginere"
        };

        setStudentDetails((StudentDetails) => StudentDetails.concat(newUser));
    };




    return (
        <div>
            {Btn()}
            {studentList}
        </div>
    )
};


export default Student;








































































// const StudentList = () => {
//     return (
//         StudentDetails.map(aName => {
//             return (
//                 <h1>{aName.name}</h1>
//             )
//         })
//     )
// }

// const studentList = StudentDetails.map(theName => {
//     return (
//         <h1>
//             {theName.name + theName.age}
//         </h1>
//     )
// })
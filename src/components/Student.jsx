import React from "react";
import StudentDetails from '../components/StudentDetails'
import SimplePaper from "./MuiPaper";

function Student() {

    const StudentDetails = [
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

    ]

    const studentList = StudentDetails.map(aName => {
        return(
            <div>
                <SimplePaper 
                    name= {aName.name}
                    age= {aName.age}
                    email= {aName.email}
                    skill= {aName.skill}
                />
            </div>
        )
    })

    
    return (
        <div>
            {studentList}
        </div>
    )
}


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
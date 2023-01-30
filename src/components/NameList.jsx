import React from 'react'
import NameListItem from './NameListItem';

function NameList() {

    const nameList = [
        {
            "name": {
                "title": "Miss",
                "first": "Jennie",
                "last": "Nichols"
            },
            "location": {
                "city": "Billings",
            },
            "email": "jennie.nichols@example.com",
            "dob": {
                "date": "1992-03-08T15:13:16.688Z",
                "age": 30
            },
            "picture": {
                "medium": "https://randomuser.me/api/portraits/med/men/75.jpg",
            },
        },

        {
            "name": {
                "title": "Miss",
                "first": "Lithara",
                "last": "Perera"
            },
            "location": {
                "city": "Panadura",
            },
            "email": "lithara2002@gmail.com",
            "dob": {
                "date": "1954-05-27T08:17:31.046Z",
                "age": 21
            },
            "picture": {
                "medium": "https://randomuser.me/api/portraits/med/men/94.jpg",
            },
        },

        {
            "name": {
                "title": "Mr",
                "first": "Wasath",
                "last": "Theekshana"
            },
            "location": {
                "city": "Ja-Ela",
            },
            "email": "wasath.vt@gmail.com",
            "dob": {
                "date": "1954-05-27T08:17:31.046Z",
                "age": 21
            },
            "picture": {
                "medium": "https://randomuser.me/api/portraits/med/women/67.jpg",
            },
        },
    ]

    const nameListComponents = () => {
        return(
            nameList.map(aName => {
                return(
                    <NameListItem
                            name={aName.name.first + ' ' + aName.name.last}
                            city={aName.location.city}
                            email={aName.email}
                            birthday={aName.dob.date}
                            avatar={aName.picture.medium}
                        />
                )
            })
        )
    }

    return (
        <div>
            <h1>Name List</h1>
            <hr />
            <ul>
                {nameListComponents()}
            </ul>
        </div>
    )
}

export default NameList;
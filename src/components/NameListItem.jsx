import React from 'react'
import NameList from './NameList'

function NameListItem(props) {
    return (
        <div>

            <li>
                <p> <img src={props.avatar} alt="Profile Picture" /> {props.name} </p>
                <p>City : {props.city}</p>
                <p>Email : {props.email}</p>
                <p>Birthday :
                    {new Intl.DateTimeFormat('si-LK').format(new Date(props.birthday))}
                </p>
            </li>
        </div>
    )
}

export default NameListItem
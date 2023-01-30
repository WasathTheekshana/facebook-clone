import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

export default function SimplePaper(props) {
    return (
        <div>

            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    '& > :not(style)': {
                        m: 1,
                        p: 3,
                        width: 300,
                        height: 150,
                    },
                }} 
            >
                <Paper elevation={3} style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', }}>
                    <h2>{props.name}</h2>
                    <div>
                        <p>I'm {props.age} years old. </p>
                        <p>I'm so much skill full in {props.skill} sides.</p>
                        <p>You can contact me through <span>{props.email}</span></p>
                    </div>
                </Paper>
            </Box>
        </div>
    );
}
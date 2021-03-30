import React from 'react';
import'./Home.css'
import Button from'../../components/Button/Button';
import {Grid} from '@material-ui/core';

function Home(){
    return(
        <Grid container spacing={3}>
         <Button buttonz="Play"/>
        <Button buttonz="Stop"/>
        <Button  buttonz=" Rewind"/>
        <Button  buttonz="Fast-Forward"/>

        <Grid item xs={3}>
        <div>
        <div  className="root">
        <h1>STEVEOHH"S VCR</h1>
        <p>Throwback Classic!!!</p>
        </div>
       
        </div>
        </Grid>
        </Grid>

    )
} 

export default Home;
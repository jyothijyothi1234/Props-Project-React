import React from "react";
import { Button, Grid,Typography } from "@mui/material";



function ElementWise(Props){

    return(
        <Grid container xs={12}>
        <Grid item xs={8}>
        <Typography variant="h1" component="h2">
where are u
 {Props.name}
</Typography>
<Button  onClick={()=>Props.setCount(Props.count+1)}  sx={{bgcolor:"green"}}> + </Button><br /><br />
<Button  onClick={()=>Props.setCount(Props.count-1)}   sx={{bgcolor:"red"}}> - </Button>

        </Grid>
        </Grid>
    );
}


export default  ElementWise;

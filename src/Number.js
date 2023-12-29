import { Grid ,Typography} from "@mui/material";
import React from "react";
import ElementWise from "./Card";


function CardElement(Props){

    return(
        <Grid container xs={12}>
        <Grid item xs={8}>
        <Typography variant="h1" component="h2">
 HELLO 
 {Props.name}
</Typography>
<ElementWise   name={Props.name}  count={Props.count} setCount={Props.setCount}/>

<Typography variant="h2" component="h2">
{Props.count}
</Typography>


        </Grid>
        </Grid>
    );
}


export  default  CardElement;
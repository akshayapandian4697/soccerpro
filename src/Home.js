import { Grid, Typography } from "@mui/material";
import React from "react";

//component for employee Home
function Home() {

    return (
        <Grid className="container-height">
            <Grid className="container-height image-content text-white">
                <Typography
                    variant="h1"
                    className="display-4 text-center text-stroke"
                >
                    Manchester United!
                </Typography>
                <hr />
                <Typography
                    variant="h5"
                    color={"white"}
                    className="lead text-center text-stroke"
                >
                    "Glory glory Man Utd, as the reds go marching on"
                </Typography>
            </Grid>
        </Grid>


    )
}

export default Home;
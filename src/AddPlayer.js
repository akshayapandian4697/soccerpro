import React, { useRef, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import Cookies from "js-cookie";
import { useNavigate } from 'react-router-dom';

import {
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    Box,
    Button,
    Grid,
    Container,
    Typography,
    TextField,
    OutlinedInput
} from "@mui/material";

function AddPlayer() {
    const { handleSubmit, control, trigger, formState: { errors } } = useForm();
    const formRef = useRef(null);
    const [playerList, setPlayerList] = useState(
        JSON.parse(Cookies.get("playerList") || "[]")
    );
    const navigate = useNavigate();

    const onSubmit = (data) => {
        const updatedPlayerList = [...playerList, data];
        setPlayerList(updatedPlayerList);
        Cookies.set("playerList", JSON.stringify(updatedPlayerList));
        console.log(updatedPlayerList);
        navigate("/playerlist");
    };


    const handleBlur = async (fieldName) => {
        await trigger(fieldName);
    };

    return (
        <Container className="container-height ">
            <hr />
            <Typography variant="h5" align="center" gutterBottom>
                Add Player Details
            </Typography>
            <hr />

            <form name="addPlayer" ref={formRef} onSubmit={handleSubmit(onSubmit)}>
                <Grid container spacing={4}>
                    <Grid item xs={6}>
                        <Controller
                            control={control}
                            name="FirstName"
                            rules={{ required: "First name is required" }}
                            render={({ field }) => (
                                <TextField
                                    label="First name*"
                                    fullWidth
                                    id="FirstName"
                                    {...field}
                                    error={!!errors.FirstName}
                                    helperText={errors.FirstName?.message}
                                    onBlur={() => handleBlur("FirstName")}
                                />
                            )}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Controller
                            control={control}
                            name="LastName"
                            rules={{ required: "Last name is required" }}
                            render={({ field }) => (
                                <TextField
                                    label="Last name*"
                                    fullWidth
                                    id="LastName"
                                    {...field}
                                    error={!!errors.LastName}
                                    helperText={errors.LastName?.message}
                                    onBlur={() => handleBlur("LastName")}
                                />
                            )}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Controller
                            control={control}
                            name="Age"
                            rules={{
                                required: "Age is required",
                                pattern: {
                                    value: /^\d+$/,
                                    message: "Please enter a valid age"
                                }
                            }}
                            render={({ field }) => (
                                <TextField
                                    label="Age*"
                                    fullWidth
                                    type="number"
                                    id="Age"
                                    {...field}
                                    error={!!errors.Age}
                                    helperText={errors.Age?.message}
                                    onBlur={() => handleBlur("Age")}
                                />
                            )}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Controller
                            control={control}
                            name="Position"
                            rules={{ required: "Position is required" }}
                            render={({ field }) => (
                                <FormControl fullWidth error={!!errors.Position}>
                                    <InputLabel id="title-label">Position*</InputLabel>
                                    <Select
                                        labelId="title-label"
                                        id="Position"
                                        name="Position"
                                        input={<OutlinedInput notched label="Position" />}
                                        {...field}
                                        onBlur={() => handleBlur("Position")}
                                    >
                                        <MenuItem disabled value="">
                                            --Please select--
                                        </MenuItem>
                                        <MenuItem value="Goalkeeper">
                                            Goalkeeper (GK)
                                        </MenuItem>
                                        <MenuItem value="Centre-Back">
                                            Centre-Back (CB)
                                        </MenuItem>
                                        <MenuItem value="Sweeper">
                                            Sweeper (SW)
                                        </MenuItem>
                                        <MenuItem value="Full-Back">
                                            Full-Back (RB, LB)
                                        </MenuItem>
                                        <MenuItem value="Wing-Back">
                                            Wing-Back (RWB, LWB)
                                        </MenuItem>
                                        <MenuItem value="Defensive Midfielder">
                                            Defensive Midfielder (CDM)
                                        </MenuItem>
                                        <MenuItem value="Central Midfielder">
                                            Central Midfielder (CM)
                                        </MenuItem>
                                        <MenuItem value="Box-to-Box Midfielder">
                                            Box-to-Box Midfielder (BBM)
                                        </MenuItem>
                                        <MenuItem value="Attacking Midfielder">
                                            Attacking Midfielder (CAM)
                                        </MenuItem>
                                        <MenuItem value="Wide Midfielder">
                                            Wide Midfielder (RM, LM)
                                        </MenuItem>
                                        <MenuItem value="Winger">
                                            Winger (RW, LW)
                                        </MenuItem>
                                        <MenuItem value="Inside Forward">
                                            Inside Forward (IF)
                                        </MenuItem>
                                        <MenuItem value="Forward">
                                            Forward (CF)
                                        </MenuItem>
                                        <MenuItem value="Striker">
                                            Striker (ST)
                                        </MenuItem>
                                    </Select>
                                    {errors.Position && (
                                        <Typography color="error" variant="caption">
                                            {errors.Position.message}
                                        </Typography>
                                    )}
                                </FormControl>
                            )}
                        />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <Controller
                            control={control}
                            name="NationalTeam"
                            rules={{ required: "National team is required" }}
                            render={({ field }) => (
                                <TextField
                                    label="National Team*"
                                    fullWidth
                                    type="text"
                                    id="NationalTeam"
                                    {...field}
                                    error={!!errors.NationalTeam}
                                    helperText={errors.NationalTeam?.message}
                                    onBlur={() => handleBlur("NationalTeam")}
                                />
                            )}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Controller
                            control={control}
                            name="DateOfBirth"
                            rules={{ required: "Date of Birth is required" }}
                            render={({ field }) => (
                                <TextField
                                    label="Date of Birth*"
                                    fullWidth
                                    type="date"
                                    InputLabelProps={{ shrink: true }}
                                    id="DateOfBirth"
                                    {...field}
                                    error={!!errors.DateOfBirth}
                                    helperText={errors.DateOfBirth?.message}
                                    onBlur={() => handleBlur("DateOfBirth")}
                                />
                            )}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Controller
                            control={control}
                            name="DateOfJoining"
                            rules={{ required: "Date of Joining is required" }}
                            render={({ field }) => (
                                <TextField
                                    label="Date of Joining*"
                                    fullWidth
                                    type="date"
                                    InputLabelProps={{ shrink: true }}
                                    id="DateOfJoining"
                                    {...field}
                                    error={!!errors.DateOfJoining}
                                    helperText={errors.DateOfJoining?.message}
                                    onBlur={() => handleBlur("DateOfJoining")}
                                />
                            )}
                        />
                    </Grid>
                </Grid>

                <Box mt={3} display="flex" justifyContent="center" className="box">
                    <Button variant="contained" color="primary" type="submit">
                        Submit
                    </Button>
                </Box>
            </form>
        </Container>
    );
}

export default AddPlayer;

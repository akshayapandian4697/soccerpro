import React, { useState } from "react";
import Cookies from "js-cookie";
import {
    Container,
    TableContainer,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Typography,
    IconButton,
    TextField
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import DoneIcon from "@mui/icons-material/Done";

function PlayerList() {
    const [editingIndex, setEditingIndex] = useState(-1);
    const [playerList, setPlayerList] = useState(JSON.parse(Cookies.get("playerList") || "[]"));

    const handleDelete = (index) => {
        const updatedPlayerList = playerList.filter((_, i) => i !== index);
        setPlayerList(updatedPlayerList);
        Cookies.set("playerList", JSON.stringify(updatedPlayerList));
        window.location.reload();
    };

    const handleEdit = (index) => {
        setEditingIndex(index);
    };

    const handleSave = (index) => {
        setEditingIndex(-1);
    };

    return (
        <Container className="container-height ">
            <hr />
            <Typography variant="h5" className="bold" align="center" gutterBottom>
                Player List
            </Typography>
            <hr />
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                <Typography variant="h7" className="bold">No.</Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="h7" className="bold">First Name</Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="h7" className="bold">Last Name</Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="h7" className="bold">Age</Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="h7" className="bold">Position</Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="h7" className="bold">National Team</Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="h7" className="bold">Date of Birth</Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="h7" className="bold">Date of Joining</Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="h7" className="bold">Actions</Typography>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {playerList.map((player, index) => (
                            <TableRow key={index}>
                                <TableCell>{index + 1}</TableCell>
                                {editingIndex === index ? (
                                    <TableCell>
                                        <TextField
                                            value={player.FirstName}
                                            fullWidth
                                            onChange={(e) => {
                                                const updatedPlayerList = [...playerList];
                                                updatedPlayerList[index].FirstName = e.target.value;
                                                setPlayerList(updatedPlayerList);
                                            }}
                                        />
                                    </TableCell>
                                ) : (
                                    <TableCell>{player.FirstName}</TableCell>
                                )}
                                <TableCell>{editingIndex === index ? (
                                    <TextField
                                        value={player.LastName}
                                        fullWidth
                                        onChange={(e) => {
                                            const updatedPlayerList = [...playerList];
                                            updatedPlayerList[index].LastName = e.target.value;
                                            setPlayerList(updatedPlayerList);
                                        }}
                                    />
                                ) : (
                                    <TableCell>{player.LastName}</TableCell>
                                )}</TableCell>
                                <TableCell>{editingIndex === index ? (
                                    <TextField
                                        value={player.Age}
                                        fullWidth
                                        onChange={(e) => {
                                            const updatedPlayerList = [...playerList];
                                            updatedPlayerList[index].Age = e.target.value;
                                            setPlayerList(updatedPlayerList);
                                        }}
                                    />
                                ) : (
                                    <TableCell>{player.Age}</TableCell>
                                )}</TableCell>
                                <TableCell>{editingIndex === index ? (
                                    <TextField
                                        value={player.Position}
                                        fullWidth
                                        onChange={(e) => {
                                            const updatedPlayerList = [...playerList];
                                            updatedPlayerList[index].Position = e.target.value;
                                            setPlayerList(updatedPlayerList);
                                        }}
                                    />
                                ) : (
                                    <TableCell>{player.Position}</TableCell>
                                )}</TableCell>
                                <TableCell>{editingIndex === index ? (
                                    <TextField
                                        value={player.NationalTeam}
                                        fullWidth
                                        onChange={(e) => {
                                            const updatedPlayerList = [...playerList];
                                            updatedPlayerList[index].NationalTeam = e.target.value;
                                            setPlayerList(updatedPlayerList);
                                        }}
                                    />
                                ) : (
                                    <TableCell>{player.NationalTeam}</TableCell>
                                )}</TableCell>
                                <TableCell>
                                    {editingIndex === index ? (
                                        <TextField
                                            type="date"
                                            value={player.DateOfBirth}
                                            fullWidth
                                            onChange={(e) => {
                                                const updatedPlayerList = [...playerList];
                                                updatedPlayerList[index].DateOfBirth = e.target.value;
                                                setPlayerList(updatedPlayerList);
                                            }}
                                        />
                                    ) : (
                                        <TableCell>{player.DateOfBirth}</TableCell>
                                    )}
                                </TableCell>
                                <TableCell>
                                    {editingIndex === index ? (
                                        <TextField
                                            type="date"
                                            value={player.DateOfJoining}
                                            fullWidth
                                            onChange={(e) => {
                                                const updatedPlayerList = [...playerList];
                                                updatedPlayerList[index].DateOfJoining = e.target.value;
                                                setPlayerList(updatedPlayerList);
                                            }}
                                        />
                                    ) : (
                                        <TableCell>{player.DateOfJoining}</TableCell>
                                    )}
                                </TableCell>
                                <TableCell>
                                    {editingIndex === index ? (
                                        <IconButton
                                            aria-label="done"
                                            color="primary"
                                            onClick={() => handleSave(index)}
                                        >
                                            <DoneIcon />
                                        </IconButton>
                                    ) : (
                                        <>
                                            <IconButton
                                                aria-label="edit"
                                                color="primary"
                                                onClick={() => handleEdit(index)}
                                            >
                                                <EditIcon />
                                            </IconButton>
                                            <IconButton
                                                aria-label="delete"
                                                color="error"
                                                onClick={() => handleDelete(index)}
                                            >
                                                <DeleteIcon />
                                            </IconButton>
                                        </>
                                    )}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
}

export default PlayerList;

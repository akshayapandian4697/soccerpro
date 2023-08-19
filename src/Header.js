import { BrowserRouter, Link } from "react-router-dom";
import PageRoutes from "./PageRoute";
import { Box, Toolbar, Button, Typography, Container, Grid } from "@mui/material"

//function for import header
function Header() {

    const styles = {
        textTransform: 'none',
        border: '2px solid white'

    }
    return (
        <BrowserRouter>
            <Grid className="bg-dark text-light py-2 header-red">
                <Container>
                    <Grid container justifyContent="center">
                        <Grid item xs={12}>
                            <hr color="white" />
                            <Typography variant="h4" align="center" gutterBottom>
                                Manchester United
                            </Typography>
                            <Typography variant="h4" align="center" gutterBottom>
                                Soccer Team Management System
                            </Typography>
                            <hr color="white" />
                        </Grid>
                    </Grid>
                </Container>

                <Box position="static" className="header-red">
                    <Toolbar className="text-align">
                        <Grid display="flex" justifyContent="space-between" width="50%">
                            <Button color="inherit" style={styles} component={Link} to="/" >Home</Button>
                            <Button color="inherit" style={styles} component={Link} to="/playerlist">Player List</Button>
                            <Button color="inherit" style={styles} component={Link} to="/addplayer">Add Player</Button>
                        </Grid>
                    </Toolbar>
                </Box>
            </Grid>
            <PageRoutes />
        </BrowserRouter>
    )
}

export default Header;
import {Box, Button, Container, Typography} from "@mui/material";
import {useState} from "react";

export default function App() {
    const [value, setValue] = useState(0);
    return (
        <Container >
            <Typography my={2} variant="h5">Counter!</Typography>
            <Box display="flex" justifyContent="space-evenly" alignContent="center" py={2} border="solid 1px">
                <Button variant="contained" onClick={() => setValue(prevState => prevState - 1)}>-</Button>
                <Typography variant="h6">{value}</Typography>
                <Button variant="contained" onClick={() => setValue(prevState => prevState + 1)}>+</Button>
            </Box>
        </Container>
    );
}


import { Box, Paper, Typography } from "@mui/material";
import { HashScroll } from "react-hash-scroll";

interface LandingSessionProps {
    children: React.ReactNode;
    hash: string;
}

export default function LandingSession({hash}: LandingSessionProps) {
    return <HashScroll hash={hash}>
        <Box sx={{
            height: "100vh",
            width: "100vw",
            display: "flex",
            displayPrint: "flex",
            alignItems: "center",
            justifyContent: "center",
        }}>

            <Paper sx={{
                backgroundColor: "#f99",
            }}>
                <Typography variant="h4" m={10}>{hash}</Typography>
            </Paper>

        </Box>
    </HashScroll>
}

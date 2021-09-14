import { Stack } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import LandingBar from "./LandingBar";
import Session from "./LandingSession";

function LandingBody() {

    return <Stack m={1}>
        <Session hash="#home">
        </Session>
        <Session hash="#nft">
        </Session>
        <Session hash="#gameplay">
        </Session>
        <Session hash="#market">
        </Session>
    </Stack>
}

export default function LandingPage() {
    return (
        <>
            <BrowserRouter>
                <LandingBar />
                <LandingBody />
            </BrowserRouter>
        </>
    );
}
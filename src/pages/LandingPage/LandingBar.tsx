import { AppBar, Box, Paper, Stack, Tab, Tabs, Toolbar, Typography } from "@mui/material";
import { useState } from "react";
import { HashScroll } from "react-hash-scroll";
import { useNavigate } from "react-router-dom";


export default function LandingBar() {
  const [value, setValue] = useState("nft");
  const navigate = useNavigate();
  
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
      
    <div>
      <AppBar position="fixed" color="default" elevation={0} >
        <Toolbar>
          <Typography variant="h6" sx={{flexGrow: 1}}>
          </Typography>
          <Tabs value={value} onChange={(e, value) => {
            handleChange(e, value);
            console.log(value);
            navigate(`#${value}`);
            
          }}>
            <Tab label="Home" value="home" />
            <Tab label="NFT" value="nft" />
            <Tab label="Gameplay" value="gameplay" />
            <Tab label="Market" value="market" />
          </Tabs>
        </Toolbar>
      </AppBar>
      
    </div>
      
  )
}

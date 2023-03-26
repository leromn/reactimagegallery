import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Toolbar } from "@mui/material/";
import MenuIcon from "@mui/icons-material/Menu";
import BurstModeIcon from "@mui/icons-material/BurstMode";
import AddIcon from "@mui/icons-material/Add";
import Gallery from "./gallery";
import { useState } from "react";
import ImgUpl from "./imgUpl";

export default function Home() {
  const [visible, setVisible] = useState(false);
  const showUplForm = () => {
    if (visible) {
      setVisible(false);
    } else {
      setVisible(true);
    }
  };
  return (
    <div className="Home">
      <AppBar
        position="sticky"
        style={{ backgroundColor: "white", color: "black" }}
        className="Head"
      >
        <Toolbar>
          <MenuIcon />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Home
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>

      <div
        className="Body11"
        style={{ backgroundColor: "yellow", height: "90vh" }}
      >
        <Gallery />
      </div>
      <ImgUpl enabled={visible} />
      <AppBar
        position="static"
        style={{
          backgroundColor: "white",
          color: "black",
          alignContent: "center"
        }}
        className="Bottom"
      >
        <Toolbar>
          <Button color="inherit">
            <BurstModeIcon />
          </Button>
          <div style={{ width: "5vw" }}></div>
          <Button color="inherit" onClick={showUplForm}>
            <AddIcon />
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

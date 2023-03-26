import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Toolbar } from "@mui/material/";
import MenuIcon from "@mui/icons-material/Menu";
import QueueMusicIcon from "@mui/icons-material/QueueMusic";
import HomeIcon from "@mui/icons-material/Home";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import CardCont from "./crd";

export default function HomeComp() {
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

      <div className="Body1">
        <h1>Good morning</h1>
      </div>

      <div className="Body2">
        <div className="Body2Child1">
          <Button
            color="inherit"
            style={{ borderRadius: "16px", backgroundColor: "#4ca771" }}
          >
            for you
          </Button>
          <Button
            color="inherit"
            style={{ borderRadius: "16px", backgroundColor: "#c0e6ba" }}
          >
            new
          </Button>
          <Button
            color="inherit"
            style={{ borderRadius: "16px", backgroundColor: "#c0e6ba" }}
          >
            Trending
          </Button>
        </div>

        <div className="Body2Child2">
          <CardCont />
          <CardCont />
          <CardCont />
        </div>
      </div>

      <AppBar
        position="static"
        style={{ backgroundColor: "white", color: "black" }}
        className="Bottom"
      >
        <HomeIcon style={{ color: "black" }} />
        <AutoAwesomeIcon />
        <QueueMusicIcon />
        <AccessAlarmIcon />
      </AppBar>
    </div>
  );
}

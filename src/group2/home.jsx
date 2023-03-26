import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Toolbar, Grid } from "@mui/material/";
import MenuIcon from "@mui/icons-material/Menu";
import QueueMusicIcon from "@mui/icons-material/QueueMusic";
import HomeIcon from "@mui/icons-material/Home";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";

export default function HomeComp() {
  return (
    <div className="Home2">
      <Toolbar>
        <Button color="inherit">
          <MenuIcon />
        </Button>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Home
        </Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
      <div className="Home2Cr1">one</div>
      <div className="Home2Cr2">
        <Grid container>
          <Grid item xs={6} md={12}>
            two
          </Grid>
          <Grid item xs={6}>
            two
          </Grid>
          <Grid item xs={12}>
            three
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

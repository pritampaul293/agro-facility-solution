import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import DirectionsBikeIcon from "@mui/icons-material/DirectionsBike";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import HomeIcon from "@mui/icons-material/Home";
import ManageAccountsSharpIcon from "@mui/icons-material/ManageAccountsSharp";
import MenuIcon from "@mui/icons-material/Menu";
import PaymentIcon from "@mui/icons-material/Payment";
import RateReviewIcon from "@mui/icons-material/RateReview";
import { Button } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import * as React from "react";
import {
  Link,
  Route,
  Switch,
  useHistory,
  useRouteMatch,
} from "react-router-dom";


import AddLand from "../../components/Dashboard/AddLand/AddLand";
import ManageBookings from "../../components/Dashboard/ManageBookings/ManageBookings";
import ManageLands from "../../components/Dashboard/ManageLands/ManageLands";






import MyBookings from "../../components/Dashboard/MyBookings/MyBookings";
import MakeAdmin from "../../components/Dashboard/MakeAdmin/MakeAdmin";
import DashProfile from "../../components/Dashboard/DashProfile/DashProfile";
import useAuth from "../../hooks/useAuth";
import Review from "../../components/Dashboard/Review/Review";

const drawerWidth = 260;

function Dashboard(props) {
  const history = useHistory();
  const { url, path } = useRouteMatch();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const { user, admin, logOut } = useAuth();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div
      style={{
        display: "flex",
        textAlign: "center",
        color:'rgb(156, 0, 0)',
        justifyContent: "space-between",
        flexDirection: "column",
        minHeight: "100vh"
       
      }}
    >
      <div>
        <Toolbar>
          <h3
            style={{
              fontWeight: "900",
              fontSize: "1.5rem"
            }}
          >
            ADHUNIK KRISHI KHAMAR
          </h3>
        </Toolbar>
        <Divider />
        {/* user dashboard starts */}
        {user.email && !admin && (
          <List>
            <ListItem button onClick={() => history.push("/")}>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <Link to="/" className="drawer-link">
                <ListItemText>Home</ListItemText>
              </Link>
            </ListItem>
            <ListItem button onClick={() => history.push(`${url}/pay`)}>
              <ListItemIcon>
                <PaymentIcon />
              </ListItemIcon>
              <Link to={`${url}/addLand`} className="drawer-link">
                <ListItemText>Add Products</ListItemText>
              </Link>
            </ListItem>
            <ListItem button onClick={() => history.push(`${url}/myOrders`)}>
              <ListItemIcon>
                <FormatListBulletedIcon />
              </ListItemIcon>
              <Link to={`${url}/mybookings`} className="drawer-link">
                <ListItemText>My Bookings</ListItemText>
              </Link>
            </ListItem>
            <ListItem button onClick={() => history.push(`${url}/pay`)}>
              <ListItemIcon>
                <PaymentIcon />
              </ListItemIcon>
              <Link to={`${url}/pay`} className="drawer-link">
                <ListItemText>Pay</ListItemText>
              </Link>
            </ListItem>
            <ListItem button onClick={() => history.push(`/review`)}>
              <ListItemIcon className="drawer-icon">
                <RateReviewIcon />
              </ListItemIcon>
              <Link to={`${url}/review`} className="drawer-link">
                <ListItemText>Review</ListItemText>
              </Link>
            </ListItem>
          </List>
        )}
        {/* admin dashboard starts */}
        {user.email && admin && (
          <>
            <ListItem button onClick={() => history.push("/")}>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <Link to="/" className="drawer-link">
                <ListItemText>Home</ListItemText>
              </Link>
            </ListItem>
            <List>
              <ListItem button onClick={() => history.push(`${url}/makeAdmin`)}>
                <ListItemIcon>
                  <AdminPanelSettingsIcon />
                </ListItemIcon>
                <Link to={`${url}/makeAdmin`} className="drawer-link">
                  <ListItemText>Make Admin</ListItemText>
                </Link>
              </ListItem>
              <ListItem
                button
                onClick={() => history.push(`${url}/manageBicycles`)}
              >
                <ListItemIcon>
                  <ProductionQuantityLimitsIcon />
                </ListItemIcon>
                <Link to={`${url}/manageBicycles`} className="drawer-link">
                  <ListItemText>Add Products</ListItemText>
                </Link>
              </ListItem>
              <ListItem
                button
                onClick={() => history.push(`${url}/manageBookings`)}
              >
                <ListItemIcon>
                  <ManageAccountsSharpIcon />
                </ListItemIcon>
                <Link to={`${url}/manageBookings`} className="drawer-link">
                  <ListItemText>Manage Bookings</ListItemText>
                </Link>
              </ListItem>
             
            </List>
          </>
        )}

        <Divider />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingBottom: "30px",
        }}
      >
        <Button variant="contained" color="error" onClick={()=>{
          logOut();
          history.push('/')
        }}>
          Logout
        </Button>
      </div>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex", bagroundColor: "#1d1d1d" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          backgroundColor: "#3a3a3a",
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        style={{ bagroundColor: "#1d1d1d" }}
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        style={{
          backgroundColor: "#1d1d1d",
          minHeight: "100vh",
          color: "#bbbbbb",
        }}
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Switch>
          <Route exact path="/dashboard">
            <DashProfile user={user} />
          </Route>

          {user.email && !admin && (
            <Route exact path={path}>
              <MyBookings  />
            </Route>
          )}
          {/* {user.email && admin && (
            <Route exact path={path}>
              <ManageOrders />
            </Route>
          )} */}

          <Route exact path={`${path}/review`}>
            <Review />
          </Route>
         
          <Route exact path={`${path}/makeAdmin`}>
            <MakeAdmin />
          </Route>
          <Route exact path={`${path}/`}>
            <AddLand />
          </Route>
          <Route exact path={`${path}/manageLands`}>
            <ManageLands />
          </Route>
          <Route exact path={`${path}/manageBookings`}>
            <ManageBookings />
          </Route>
          
        </Switch>
      </Box>
    </Box>
  );
}

export default Dashboard;

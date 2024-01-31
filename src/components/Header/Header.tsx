import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Select,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import {
  SearchOutlined,
  NotificationsOutlined,
  ArrowDropDownOutlined,
} from "@mui/icons-material";

import logotype from "../../assets/svg/logotype.svg";

import { useGlobalContext } from "../../contexts/GlobalContext";
import { useModalContext } from "../../contexts/ModalContext";
import { SelectChangeEvent } from "@mui/material/Select";

const Header = () => {
  const {
    state: { isAuthorized, langSelected },
    dispatch,
  } = useGlobalContext();
  const { modalOpen } = useModalContext();

  const [anchorEl, setAnchorEl] = useState<HTMLDivElement | null>(null); // todo type
  const isMenuOpen = Boolean(anchorEl);

  const handleLanguageChange = (event: SelectChangeEvent<string>) => {
    dispatch({ type: "SET_LANGUAGE", payload: event.target.value as string });
  };

  const handleMenuTrigger = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget as HTMLDivElement); // todo: pass type suda
  };

  const handleMenuClose = () => {
    setAnchorEl(null); // Reset the state to null
  };

  const user = {
    picture:
      "https://www.google.com/images/branding/googlelogo/1x/googlelogo_light_color_272x92dp.png",
    email: "asd@asd.kz",
    name: "asd",
  };

  const notifications = {
    total: 4,
  };

  return (
    <AppBar position="sticky" elevation={0}>
      <Container>
        <Toolbar disableGutters>
          <NavLink to="/" style={{ display: "flex" }}>
            <Box
              component="img"
              sx={{ height: 20, userSelect: "none" }}
              alt="Finance center"
              src={logotype}
            />
          </NavLink>

          <Box sx={{ flexGrow: 1 }} />

          <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
            <IconButton color="inherit">
              <SearchOutlined />
              {/* todo search bar by click */}
            </IconButton>

            <IconButton color="inherit">
              <Badge badgeContent={notifications?.total || 0} color="warning">
                <NotificationsOutlined />
              </Badge>
            </IconButton>

            <Select
              sx={{
                color: "inherit",
                minWidth: 70,
                boxShadow: "none",
                ".MuiOutlinedInput-notchedOutline": { border: "none" },
                "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                  { border: "none" },
                "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                  { border: "none" },
              }}
              value={langSelected}
              onChange={handleLanguageChange}
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem value={"ru-RU"}>RU</MenuItem>
              <MenuItem value={"kk-KZ"}>KZ</MenuItem>
              <MenuItem value={"en-US"}>EN</MenuItem>
            </Select>

            {!isAuthorized ? (
              <Box sx={{ display: "flex" }}>
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: "4px" }}
                  onClick={handleMenuTrigger}
                >
                  <Avatar
                    alt={user.name}
                    src={user.picture}
                    sx={{
                      border: "solid black 1px",
                      width: 36,
                      height: 36,
                      background: "#13131313",
                    }}
                  />
                  <Typography sx={{ fontWeight: "medium", userSelect: "none" }}>
                    {user.email}
                  </Typography>
                  <ArrowDropDownOutlined
                    sx={{
                      transform: isMenuOpen ? "rotate(180deg)" : "rotate(0)",
                    }}
                  />
                </Box>

                <Menu
                  sx={{ mt: "45px" }}
                  anchorEl={anchorEl}
                  keepMounted
                  anchorOrigin={{ vertical: "top", horizontal: "right" }}
                  transformOrigin={{ vertical: "top", horizontal: "right" }}
                  open={isMenuOpen}
                  onClose={handleMenuClose}
                >
                  <MenuItem key="test" onClick={handleMenuClose}>
                    <Typography textAlign="center">Test</Typography>
                  </MenuItem>
                  {/* settings.map((setting) => (
                    <MenuItem key={setting} onClick={handleMenuClose}>
                      <Typography textAlign='center'>{setting}</Typography>
                    </MenuItem>
                  )) */}
                </Menu>
              </Box>
            ) : (
              <Stack direction="row" spacing={2}>
                <Button variant="outlined" onClick={() => modalOpen("login")}>
                  Вход
                </Button>
                <Button onClick={() => modalOpen("register")}>
                  Регистрация
                </Button>
              </Stack>
            )}
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;

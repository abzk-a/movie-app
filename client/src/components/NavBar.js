import React, { useState, useEffect } from "react";
import { AppBar, Toolbar, Typography, InputBase, Avatar, Box, IconButton } from "@mui/material";
import { Search as SearchIcon, ArrowDropDown } from "@mui/icons-material";
import { alpha, styled } from "@mui/material/styles";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": { backgroundColor: alpha(theme.palette.common.white, 0.25) },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: { marginLeft: theme.spacing(1), width: "auto" },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: { width: "20ch", "&:focus": { width: "30ch" } },
  },
}));

const NavBar = ({ onSearch }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AppBar
      position="fixed"
      elevation={scrolled ? 4 : 0}
      sx={{ bgcolor: scrolled ? "background.paper" : "transparent", transition: "background-color 0.3s ease" }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography
  variant="h6"
  sx={{
    fontWeight: "bold",
    cursor: "pointer",
    color: "#e90365",
    mt: "-4px", // Adjust this value as needed (negative moves it up)
    lineHeight: 1 // Reduces extra space below text
  }}
>
  Flixzone
</Typography>


        <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
          <Typography sx={{ cursor: "pointer", "&:hover": { color: "secondary.main" } }}>Home</Typography>
          <Typography sx={{ cursor: "pointer", "&:hover": { color: "secondary.main" } }}>Trending</Typography>
          <Typography sx={{ cursor: "pointer", "&:hover": { color: "secondary.main" } }}>New Releases</Typography>
          <Typography sx={{ display: "flex", alignItems: "center", gap: 0.5, cursor: "pointer" }}>
            Categories <ArrowDropDown />
          </Typography>

          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
              onChange={(e) => onSearch(e.target.value)}
            />
          </Search>

          <IconButton>
            <Avatar alt="User" src="/assets/avatar.png" />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;

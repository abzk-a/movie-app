import React, { useState, useEffect } from "react";
import { AppBar, Toolbar, Typography, Avatar, Box, IconButton, Autocomplete, TextField } from "@mui/material";
import { Search as SearchIcon, ArrowDropDown } from "@mui/icons-material";
import { alpha, styled } from "@mui/material/styles";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": { backgroundColor: alpha(theme.palette.common.white, 0.25) },
  marginLeft: 0,
  flexShrink: 0,
  [theme.breakpoints.up("sm")]: { marginLeft: theme.spacing(1) },
}));

const NavBar = ({ onSearch, movies }) => {
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
            <Autocomplete
              freeSolo
              options={movies}
              getOptionLabel={(movie) => typeof movie === "string" ? movie : movie.title}
              filterOptions={(options, { inputValue }) => {
                const query = inputValue.trim().toLowerCase();
                if (!query) return [];

                return options
                  .filter((movie) =>
                    [movie.title, movie.category, ...movie.genres]
                      .some((value) => value.toLowerCase().includes(query))
                  )
                  .slice(0, 6);
              }}
              noOptionsText="No matching movies"
              onInputChange={(_event, value) => onSearch(value)}
              onChange={(_event, movie) => {
                if (movie && typeof movie !== "string") onSearch(movie.title);
              }}
              renderOption={(props, movie) => (
                <Box component="li" {...props} key={movie.title} sx={{ display: "block" }}>
                  <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                    {movie.title}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    {[movie.category, ...movie.genres].join(" · ")}
                  </Typography>
                </Box>
              )}
              sx={{
                width: { xs: "min(46vw, 220px)", sm: 250 },
                "& .MuiInputBase-root": { color: "inherit", pr: "8px !important" },
                "& .MuiInputBase-input": { padding: "8px 8px 8px 4px !important" },
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  placeholder="Search movies..."
                  variant="standard"
                  inputProps={{ ...params.inputProps, "aria-label": "Search movies" }}
                  InputProps={{
                    ...params.InputProps,
                    disableUnderline: true,
                    startAdornment: (
                      <>
                        <SearchIcon sx={{ mx: 1, color: "inherit", opacity: 0.7 }} />
                        {params.InputProps.startAdornment}
                      </>
                    ),
                  }}
                />
              )}
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

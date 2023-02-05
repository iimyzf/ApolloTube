import { useState, useEffect } from "react";
import { Typography, Box, createTheme, ThemeProvider } from "@mui/material";
import { useParams } from "react-router-dom";

import { fetchFromAPI } from "../constants/fetchFromAPI";
import { Videos } from "./";

const SearchFeed = () => {
    const [videos, setVideos] = useState(null);
    const { searchTerm } = useParams();

    useEffect(() => {
        fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) =>
            setVideos(data.items)
        );
    }, [searchTerm]);

    const theme = createTheme({
        typography: {
            fontFamily: ["Nunito", "sans-serif"].join(","),
        },
    });

    return (
        <Box p={3}>
            <ThemeProvider theme={theme}>
                <Typography
                    variant="h4"
                    fontWeight={400}
                    color="white"
                    mb={3}
                    textAlign="center"
                    ml={{ sm: "100px" }}
                >
                    Search results for{" "}
                    <span style={{ color: "#5d47ad", fontWeight: 900 }}>
                        {searchTerm}
                    </span>
                </Typography>
            </ThemeProvider>
            <Box display="flex">
                <Box sx={{ mr: { sm: "100px" } }} />
                {<Videos videos={videos} />}
            </Box>
        </Box>
    );
};

export default SearchFeed;

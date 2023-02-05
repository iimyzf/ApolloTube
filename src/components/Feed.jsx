import React, { useEffect, useState } from "react";
import {
    Box,
    createTheme,
    Stack,
    Typography,
    ThemeProvider,
} from "@mui/material";

import { fetchFromAPI } from "../constants/fetchFromAPI";
import { Videos, Categories } from "./";

const Feed = () => {
    const [selectedCategory, setSelectedCategory] = useState("Recent");
    const [videos, setVideos] = useState(null);

    useEffect(() => {
        setVideos(null);

        fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) =>
            setVideos(data.items)
        );
    }, [selectedCategory]);

    const theme = createTheme({
        typography: {
            fontFamily: ["Nunito", "sans-serif"].join(","),
        },
    });

    return (
        <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
            <Box
                sx={{
                    height: { sx: "auto", md: "92vh" },
                    borderRight: "1px solid #a78fd9",
                    px: { sx: 0, md: 3 },
                }}
            >
                <Categories
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                />

                <ThemeProvider theme={theme}>
                    <Typography
                        className="copyright"
                        fontSize="14px"
                        fontWeight={500}
                        variant="body2"
                        sx={{ mt: 1.5, color: "#fff" }}
                    >
                        Copyright © 2023 ApolloTube
                    </Typography>
                </ThemeProvider>
            </Box>

            <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
                <ThemeProvider theme={theme}>
                    <Typography
                        variant="h4"
                        fontWeight="bold"
                        mb={2}
                        sx={{
                            color: "white",
                            textAlign: "center",
                        }}
                    >
                        {selectedCategory}{" "}
                        <span
                            style={{
                                color: "#5d47ad",
                            }}
                        >
                            Videos
                        </span>
                    </Typography>
                </ThemeProvider>

                <Videos videos={videos} />
            </Box>
        </Stack>
    );
};

export default Feed;

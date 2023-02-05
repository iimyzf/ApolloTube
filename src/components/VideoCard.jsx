import React from "react";
import { Link } from "react-router-dom";
import {
    Typography,
    Card,
    CardContent,
    CardMedia,
    createTheme,
    ThemeProvider,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import {
    demoThumbnailUrl,
    demoVideoUrl,
    demoVideoTitle,
    demoChannelUrl,
    demoChannelTitle,
} from "../constants";

const VideoCard = ({
    video: {
        id: { videoId },
        snippet,
    },
}) => {
    const theme = createTheme({
        typography: {
            fontFamily: ["Nunito", "sans-serif"].join(","),
        },
    });

    return (
        <Card
            sx={{
                width: { xs: "100%", sm: "358px", md: "320px" },
                boxShadow: "none",
                borderRadius: 3,
                border: 0,
                outline: 0,
                backgroundColor: "transparent",
            }}
        >
            <Link to={videoId ? `/video/${videoId}` : `/video/cV2gBU6hKfY`}>
                <CardMedia
                    image={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
                    alt={snippet?.title}
                    sx={{ width: { xs: "100%", sm: "358px" }, height: 180 }}
                />
            </Link>
            <CardContent
                sx={{
                    backgroundColor: "#1c1c1c",
                    height: "90px",
                }}
            >
                <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                    <ThemeProvider theme={theme}>
                        <Typography
                            variant="subtitle1"
                            fontWeight="bold"
                            color="#fff"
                        >
                            {snippet?.title.slice(0, 60) ||
                                demoVideoTitle.slice(0, 60)}
                        </Typography>
                    </ThemeProvider>
                </Link>
                <Link
                    to={
                        snippet?.channelId
                            ? `/channel/${snippet?.channelId}`
                            : demoChannelUrl
                    }
                >
                    <ThemeProvider theme={theme}>
                        <Typography
                            variant="subtitle2"
                            color="gray"
                            fontSize="14px"
                        >
                            {snippet?.channelTitle || demoChannelTitle}
                            <CheckCircleIcon
                                sx={{
                                    fontSize: "12px",
                                    color: "gray",
                                    ml: "5px",
                                    mt: "10px",
                                }}
                            />
                        </Typography>
                    </ThemeProvider>
                </Link>
            </CardContent>
        </Card>
    );
};

export default VideoCard;

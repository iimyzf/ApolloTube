import { Stack, useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";
import { logo } from "../constants";
import { SearchBar } from "./";

const Navbar = () => {
    const matches = useMediaQuery("(max-width:450px)");

    return (
        <Stack
            direction="row"
            alignItems="center"
            p={2}
            sx={{
                position: "sticky",
                background: "#0f0b22",
                top: 0,
                justifyContent: "space-between",
            }}
        >
            <Link
                to="/"
                style={{
                    display: "flex",
                    alignItems: "center",
                    marginLeft: "20px",
                }}
            >
                <img
                    src={logo}
                    alt="logo"
                    height={50}
                    style={{
                        marginRight: "10px",
                        borderRadius: 50,
                        border: "1px solid white",
                    }}
                />
                <span
                    style={{
                        color: "white",
                        fontSize: "18px",
                        fontWeight: 700,
                    }}
                >
                    Apollo
                </span>
                <span
                    style={{
                        color: "#5d47ad",
                        fontSize: "20px",
                        fontWeight: 900,
                    }}
                >
                    Tube
                </span>
            </Link>
            {!matches && <SearchBar />}
        </Stack>
    );
};

export default Navbar;

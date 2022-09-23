import React from "react";
import { Navbar, Link, Text, useTheme } from "@nextui-org/react";
import useMediaQuery from '@mui/material/useMediaQuery';

const desktopNavbar = () => {
    const { isDark } = useTheme();
    return (
        <Navbar isBordered={isDark} variant="sticky">
            <Navbar.Brand>
                <Text b color="inherit" hideIn="xs">
                    Mark's Portfolio
                </Text>
            </Navbar.Brand>
            <Navbar.Content hideIn="xs">
                <Navbar.Link href="#">About</Navbar.Link>
                <Navbar.Link href="#">Project</Navbar.Link>
                <Navbar.Link href="#">Contact</Navbar.Link>
            </Navbar.Content>
        </Navbar>
    )
}

const mobileNavbar = () => {

    const collapseItems = [
        "Home",
        "About",
        "Blog",
        "Contact",
    ];

    return (<Navbar isBordered variant="sticky">
        <Navbar.Brand>
            <Navbar.Toggle aria-label="toggle navigation" />
        </Navbar.Brand>
        <Navbar.Collapse>
            {collapseItems.map((item, index) => (
                <Navbar.CollapseItem key={item}>
                    <Link
                        color="inherit"
                        css={{
                            minWidth: "100%",
                        }}
                        href="#"
                    >
                        {item}
                    </Link>
                </Navbar.CollapseItem>
            ))}
        </Navbar.Collapse>
    </Navbar>)
}


export default function App() {
    const matches = useMediaQuery('(min-width:600px)');

    //Use conditional rendering to render the navbar based on the screen size
    return (
        <div>
            {matches ? desktopNavbar() : mobileNavbar()}
        </div>
    )
}


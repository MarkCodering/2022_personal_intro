import React from "react";
import { Navbar, Link, Text, useTheme } from "@nextui-org/react";
import useMediaQuery from '@mui/material/useMediaQuery';

const desktopNavbar = () => {

    return (
        <Navbar variant="sticky">
            <Navbar.Brand>
                <Link href="/">
                <Text b color="inherit" hideIn="xs">
                    Mark Portfolio
                </Text>
                </Link>
            </Navbar.Brand>
            <Navbar.Content hideIn="xs">
                <Navbar.Link href="/about">About</Navbar.Link>
                <Navbar.Link href="/projects">Projects</Navbar.Link>
                <Navbar.Link href="https://www.markchen.io/">Blog</Navbar.Link>
                <Navbar.Link href="/contact">Contact</Navbar.Link>
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
                        href="/"
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


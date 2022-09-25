import Head from 'next/head'
import Navbar from '../../components/Navbar'
import styles from '../../styles/Home.module.css'
import { Card, Grid, Text, Link } from "@nextui-org/react";

const STLProjects = () => {
    return (
        <Card css={{ p: "$6", mw: "600px" }}>
            <Card.Header>
                <img
                    alt="nextui logo"
                    src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                    width="34px"
                    height="34px"
                />
                <Grid.Container css={{ pl: "$6" }}>
                    <Grid xs={12}>
                        <Text h4 css={{ lineHeight: "$xs" }}>
                            Next UI
                        </Text>
                    </Grid>
                    <Grid xs={12}>
                        <Text css={{ color: "$accents8" }}>nextui.org</Text>
                    </Grid>
                </Grid.Container>
            </Card.Header>
            <Card.Body css={{ py: "$2" }}>
                <Text>
                    Make beautiful websites regardless of your design experience.
                </Text>
            </Card.Body>
            <Card.Footer>
                <Link
                    icon
                    color="primary"
                    target="_blank"
                    href="https://github.com/nextui-org/nextui"
                >
                    Visit source code on GitHub.
                </Link>
            </Card.Footer>
        </Card>
    );
}

export default function About() {
    return (
        <div className={styles.container}>
            <Head>
                <title>About - Mark Portfolio</title>
                <meta name="description" content="Personal Portfolio Website from Mark" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Navbar />

            <div className={styles.hero}>
                <h1>About Mark</h1>
                <p>Mark is a computer science student, an undergraduate student, a tech entrepreneur</p>
                <STLProjects />
            </div>

            <footer className={styles.footer}>
                <a
                    href="https://www.markchen.io"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by Vercel || Designed By Mark Chen
                </a>
            </footer>
        </div>
    )
}
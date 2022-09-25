import { Avatar, Button, Grid, Link } from '@nextui-org/react'
import styles from '../styles/Home.module.css'

export default function Hero() {
    return (
        <div className={styles.hero}>
            <Avatar
                src="https://avatars.githubusercontent.com/u/58692435?v=4"
                css={{ size: "$20" }}
            />
            <h1>Hi, my name is Mark</h1>
            <p>I am a computer science student, an undergraduate student, a tech entrepreneur</p>
            <Grid.Container gap={0.5} justify="left">
                <Grid sm={1}>
                    <Button
                        auto
                        color="gradient"
                        href="https://www.markchen.io"
                    >
                        My Blog
                    </Button>
                </Grid>
                <Grid sm={1}>
                    <Button
                        auto    
                        color="gradient"
                        href="/about"
                    >
                        Get Started
                    </Button>
                </Grid>
            </Grid.Container>
        </div>
    )
}
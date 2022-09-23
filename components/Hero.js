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
            <Link href="https://www.markchen.io">
                <Button color="gradient" auto>
                    My Personal Blog
                </Button>
            </Link>
        </div>
    )
}
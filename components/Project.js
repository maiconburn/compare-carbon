import Box from '@material-ui/core/Box'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import styles from '../styles/Projects.module.scss'



function Project(props) {
    return (
        <Box key={props.projectKey}>
            <Card className={styles.card}>
                <CardActionArea className={styles.actionArea}>
                    <CardMedia
                    className={styles.media}
                    component="img"
                    alt="Contemplative Reptile"
                    image="./img/amazon-project.jpg"
                    title="Contemplative Reptile"
                    />
                    <CardContent className={styles.content}>
                        <Typography gutterBottom variant="h5" component="h2">
                            {props.projectName}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin blandit rutrum accumsan. Donec eget tortor ultricies neque placerat fringilla. Praesent at eleifend augue, quis facilisis nisi.
                        </Typography>
                    </CardContent>
                    <CardActions className={styles.actions}>
                        <Button size="small" color="secondary">
                        Buy it now
                        </Button>
                        <Button size="small" color="secondary">
                        Learn More
                        </Button>
                    </CardActions>
                </CardActionArea>
            </Card>
        </Box>
    )
}

export default Project
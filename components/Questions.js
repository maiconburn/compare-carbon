import React, {useEffect, useState} from 'react'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import questionsList from '../json/questions.json'
import { useRouter } from 'next/router'
import styles from '../styles/Home.module.scss'

export default function GetStarted(props) {

    const router = useRouter()

    let { currentQuestion } = router.query

    if(!currentQuestion){
        currentQuestion = props.currentQuestion
    }

    const question = questionsList[currentQuestion]
    const nextQuestion = (((question.id + 1) == questionsList.length ) ? 0 : question.id + 1)


    return (
        <Container maxWidth="lg" className={styles.intro}>
            <Box xs='12'>
                <Grid 
                    className={styles.introText} 
                    container
                    direction="column"
                    alignItems="center"
                    justify="center"
                >
                    <Grid item xs='12'>
                        <Typography className={styles.questionsText} variant="h3">
                            {question.text}
                        </Typography>
                    </Grid>
                </Grid>
                <Grid 
                    container
                    direction="row"
                    alignItems="center"
                    justify="center"
                >
                    <Grid container xs='6'>
                        
                        {question.options.map(value =>
                            <Grid container justify="center" xs={12/question.options.length}>
                                <Button color="primary" onClick={() => router.push('/screening/?currentQuestion='+nextQuestion, { shallow: true })} className={styles.questionsButton} variant="contained" size="large">{value}</Button>
                            </Grid>
                        )}
                        
                    </Grid>
                </Grid>
            </Box>  
        </Container>
    )
}

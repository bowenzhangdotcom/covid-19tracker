import React from 'react'; 
import {Card, CardContent, Typography, Grid} from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';

import styles from './Cards.module.css';

const Cards = ({data: {confirmed, recovered, deaths, lastUpdate}}) => {
    if(!confirmed) {
        return 'Loading...'
    }

    function createCardTemplate(headerName, dataName, body2Text, styleType) {
        return (
            <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styleType)}>
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>{headerName}</Typography>
                    <Typography variant="h5">
                        <CountUp start={0} end={dataName.value} duration={1.5} separator=","/>
                    </Typography>
                    <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                    <Typography variant="body2">{body2Text}</Typography>
                </CardContent>
            </Grid>
        );
    }
    
    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                {createCardTemplate('Infected', confirmed,'Number of active cases of COVID-19',styles.infected)}
                {createCardTemplate('Recovered', recovered,'Number of recoveries from COVID-19', styles.recovered)}
                {createCardTemplate('Deaths', deaths,'Number of deaths caused by COVID-19', styles.deaths)}
            </Grid>
        
        </div>
    );
}

export default Cards; 
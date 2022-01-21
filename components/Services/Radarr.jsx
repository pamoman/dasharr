/*
 * Service - Radarr
 */

import React, { useState, useEffect } from 'react';
import { Grid, Box, Typography } from '@mui/material';
import CheckCircle from '@mui/icons-material/CheckCircle';
import NotificationImportant from '@mui/icons-material/NotificationImportant';
import styles from './styles';

const Radarr = ({ apikey, endpoint }) => {
    const timer = 5000;
    const [health, setHealth] = useState({});
    const [queue, setQueue] = useState({});
    const [movies, setMovies] = useState({});

    const queries = [
        { set: setHealth, url: `${endpoint}/health?apiKey=${apikey}` },
        { set: setQueue, url: `${endpoint}/queue?apiKey=${apikey}` },
        { set: setMovies, url: `${endpoint}/movie?apiKey=${apikey}` }
    ];

    const getQueries = () => {
        return Promise.all(
            queries.map(query => fetch(query.url).then(res => res.json()))
        )
        .then(data => {
            queries.forEach((query, i) => query.set(data[i]));
        });
    };

    useEffect(() => {
        getQueries();

        const interval=setInterval(()=> {
            getQueries()
        }, timer)

        return() => clearInterval(interval);
    }, []);

    return (
        <>
            <Grid sx={{ mb: 2 }} container direction="row" justifyContent="center" alignItems="center" columnSpacing={1}>
                <Grid item>
                    <Typography sx={styles.fieldName} variant="subtitle1" color="text.secondary" noWrap>
                        STATUS
                    </Typography>
                </Grid>

                <Grid item>
                    <Box sx={styles.serviceStatus(health)}>
                        {health.length > 0
                            ? health.length
                            : "OK"
                        }
                    </Box>
                </Grid>
            </Grid>

            <Grid sx={{ mb: 2 }} container direction="row" justifyContent="center" alignItems="center" columnSpacing={1}>
                <Grid item>
                    <Typography sx={styles.fieldName} variant="subtitle1" color="text.secondary" noWrap>
                        QUEUE
                    </Typography>
                </Grid>

                <Grid item>
                    <Box sx={styles.fieldValue}>
                        {queue.totalRecords || 0}
                    </Box>
                </Grid>
            </Grid>

            <Grid container direction="row" justifyContent="center" alignItems="center" columnSpacing={1}>
                <Grid item>
                    <Typography sx={styles.fieldName} variant="subtitle1" color="text.secondary" noWrap>
                        MOVIES
                    </Typography>
                </Grid>

                <Grid item>
                    <Box sx={styles.fieldValue}>
                        {movies.length || 0 }
                    </Box>
                </Grid>
            </Grid>
        </>
    )
};

export default Radarr;
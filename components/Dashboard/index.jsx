/*
 * Dashboard
 */

import { Container, Grid, Typography } from '@mui/material';
import MuiFasIcon from '@components/MuiFasIcon';
import ServiceCard from '@components/ServiceCard';
import styles from './styles';

const Dashboard = ({ services, filters }) => {
    if (!filters.includes("All")) {
        services = services.filter(service => filters.includes(service.name));
    }

    return (
        <Grid container justifyContent="center">
            <Grid item xs={12}>
                <Container fixed disableGutters>
                    {services.map((service, i) => {
                        const { name, icon, items } = service;
                        
                        return (
                            <Grid sx={styles.serviceContainer} key={`dashboard-service-${i}`} container spacing={4}>
                                <Grid item xs={12}>
                                    <Grid container direction="row" justifyContent="flex-start" alignItems="center">
                                        <Grid sx={styles.serviceIcon} item>
                                            <MuiFasIcon color="primary" size="2x">{icon}</MuiFasIcon>
                                        </Grid>
                                        <Grid item>
                                            <Typography variant="h4" component="h2" color="primary.main">
                                                {name}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>

                                {items &&
                                    items.map((item, j) => {
                                        return (
                                            <Grid key={`dashboard-item-${j}`} item xs={12} md={6} lg={4}>
                                                <ServiceCard item={item} />
                                            </Grid>
                                        );
                                    })
                                }
                            </Grid>
                        )
                    })}
                </Container>
            </Grid>
        </Grid>
    )
};

export default Dashboard;
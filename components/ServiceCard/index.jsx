/*
 * ServiceCard
 */

import { Link, Box, Card, CardContent, CardMedia, CardActions, Typography } from '@mui/material';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import * as Services from '@components/Services';
import styles from './styles';

const ServiceCard = ({ item }) => {
    const { name, logo, subtitle, url, target, data = {} } = item;
    const CardService = Services[data?.name];

    return (
        <Link underline="none" href={url} target={target}>
            <Card sx={styles.card}>
                <Box sx={styles.mediaContainer}>
                    <CardMedia
                        component="img"
                        sx={styles.mediaContainer.media}
                        image={logo}
                        alt={name}
                    />
                </Box>

                <CardContent sx={styles.content}> 
                    <Typography sx={styles.content.typography} variant="h5" noWrap>
                        {name}
                    </Typography>

                    <Typography sx={styles.content.typography} variant="subtitle1" color="text.secondary" noWrap>
                        {subtitle}
                    </Typography>
                </CardContent>

                <CardActions disableSpacing sx={styles.actions(CardService)}>
                    {CardService
                        ?
                        <CardService apikey={data?.apikey} endpoint={data?.endpoint} />
                        :
                        <DoubleArrowIcon fontSize="large" />
                    }
                </CardActions>
            </Card>
        </Link> 
    )
};

export default ServiceCard;
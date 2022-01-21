/*
 * Footer
 */

import React from 'react';
import { useConfig, useFilters } from '@components/Contexts';
import { Box, BottomNavigation, BottomNavigationAction } from '@mui/material';
import MuiFasIcon from '@components/MuiFasIcon';
import styles from './styles';

const Footer = () => {
    const configContext = useConfig();
    const filterContext = useFilters();

    const { config } = configContext || {};
    const { footer } = config || {};
    const { serviceFilters = [], backgroundColor } = footer || {};
    const { filters, setFilters } = filterContext;

    return (
        <footer>
            <Box sx={styles.container}>
                <BottomNavigation
                    sx={theme => styles.bottomNav(theme, backgroundColor)}
                    showLabels
                    value={filters.join()}
                    onChange={(_, newValue) => {
                        setFilters(newValue.split(","));
                    }}
                >
                    {serviceFilters.map((serviceFilter, i) => {
                        const { label, icon, services } = serviceFilter;
            
                        return (
                            <BottomNavigationAction
                                key={`footer-link-${i}`}
                                label={label}
                                value={services.join()}
                                icon={<MuiFasIcon>{icon}</MuiFasIcon>}
                            />
                        );
                    })}
                </BottomNavigation>
            </Box>
        </footer>
    )
};

export default Footer;
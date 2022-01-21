/*
 * SmartHome
 */

import Dashboard from '@components/Dashboard';
import { useConfig, useFilters } from '@components/Contexts';

const SmartHome = () => {
    const configContext = useConfig();
    const filterContext = useFilters();

    const { config: { services } } = configContext || {};
    const { filters } = filterContext || [];

    return (
        <>
            {services &&
                <Dashboard services={services} filters={filters} />
            }
        </>
    )
};

export default SmartHome;

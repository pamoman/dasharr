/*
 * Styles - Services
 */

import * as colors from '@mui/material/colors';

const styles = {
    fieldName: {
        width: 45,
        textAlign: "left",
        fontSize: 10
    },
    fieldValue: {
        width: 35,
        fontSize: 12,
        fontWeight: "bold" ,
        textAlign: "center",
        paddingTop: 0.2,
        paddingBottom: 0.2,
        backgroundColor: colors.blue[500],
        borderRadius: 1
    },
    serviceStatus: (health) => ({   
        width: 35,
        fontSize: 12,
        fontWeight: "bold" ,
        textAlign: "center",
        paddingTop: 0.2,
        paddingBottom: 0.2,
        backgroundColor: `${health.length > 0 ? colors.red[500] : colors.green[400]}`,
        borderRadius: 1,
    }),
    serviceStatusIcon: {
        fontSize: 12,
    }
};

export default styles;
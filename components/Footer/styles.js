/*
 * Styles - Footer
 */

const styles = {
    container: {
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0
    },
    bottomNav: (theme, backgroundColor) => ({
        padding: 2,
        [theme.breakpoints.down('sm')]: {
            paddingBottom: 4,
        },
        backgroundColor
    })
};

export default styles;
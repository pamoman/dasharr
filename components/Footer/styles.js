/*
 * Styles - Footer
 */

const styles = {
    container: (theme, backgroundColor) => ({
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        padding: 2,
        backgroundColor,
        [theme.breakpoints.down('sm')]: {
            paddingBottom: 6,
        },
    })
};

export default styles;
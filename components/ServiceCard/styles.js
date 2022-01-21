/*
 * Styles - Service Card
 */

const styles = {
    card: {
        display: "flex",
        borderRadius: 2,
        height: 95
    },
    mediaContainer: {
        display: "flex",
        flexDirection: 'column',
        flexBasis: "25%",
        justifyContent: 'center',
        alignItems: 'center',
        px: 2,
        py: 2,
        media: {
            width: 45,
            height: 45
        },
    },
    content: {
        display: "flex",
        flexDirection: 'column',
        flexBasis: "30%",
        justifyContent: 'center',
        alignItems: 'flex-start',
        px: 2,
        py: 2,
        typography: {
            width: 150
        }
    },
    actions: CardService => ({
        backgroundColor: "inherit",
        display: "flex",
        flexDirection: 'column',
        flexBasis: "45%",
        justifyContent: 'center',
        alignItems: 'center',
        px: 2,
        py: 2,
        overflowY: CardService ? "scroll" : "inherit"
    })
};

export default styles;
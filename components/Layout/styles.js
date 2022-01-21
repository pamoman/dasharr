/*
 * Styles - Layout
 */

const styles = {
    layout: backgroundImage => ({
        minHeight: '100vh',
        background: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center'
    })
};

export default styles;
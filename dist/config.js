const config = {
    BASE_URL: import.meta.env.NSDA_BASE_URL || 'https://staging.speechanddebate.org/',
    API_URL: import.meta.env.NSDA_API_URL || 'http://localhost:10010/v2',
    API_HOST: import.meta.env.NSDA_API_HOST || 'localhost',
    CONTACT_URL: import.meta.env.NSDA_CONTACT_URL ||
        'https://staging.speechanddebate.org/contact/?message=',
    DONATE_URL: import.meta.env.NSDA_DONATE_URL ||
        'https://staging.speechanddebate.org/donate',
    STORE_URL: import.meta.env.NSDA_STORE_URL ||
        'https://staging.speechanddebate.org/store',
    STORE_ORDERS_URL: import.meta.env.NSDA_STORE_ORDERS_URL ||
        'https://staging.speechanddebate.org/store/orders',
    STORE_CART_URL: import.meta.env.NSDA_STORE_CART_URL ||
        'https://staging.speechanddebate.org/store/cart',
    LOGO_URL: import.meta.env.NSDA_LOGO_URL ||
        'https://staging.speechanddebate.org/wp-content/uploads/homepage_sparky_transparent.png',
    ERROR_IMAGE_URL: import.meta.env.NSDA_ERROR_IMAGE_URL ||
        'https://staging.speechanddebate.org/wp-content/uploads/2019_NSDAMug-300x300.jpg',
    LOGIN_URL: import.meta.env.NSDA_LOGIN_URL ||
        'https://staging.speechanddebate.org/login',
    LOGOUT_URL: import.meta.env.NSDA_LOGOUT_URL ||
        'https://staging.speechanddebate.org/logout',
    WP_ADMIN_URL: import.meta.env.NSDA_WP_ADMIN_URL ||
        'https://staging.speechanddebate.org/wp-admin/index.php',
    WP_MENU_URL: import.meta.env.NSDA_WP_MENU_URL ||
        'https://staging.speechanddebate.org/wp-json/menus/v1/menus/353',
    WP_STORE_ADMIN_ORDERS_URL: import.meta.env.NSDA_WP_STORE_ADMIN_ORDERS_URL ||
        'https://staging.speechanddebate.org/store/wp-admin/post.php',
    ACCOUNT_URL: import.meta.env.NSDA_ACCOUNT_URL ||
        'https://staging.speechanddebate.org/account',
    CAMPUS_URL: import.meta.env.NSDA_CAMPUS_URL ||
        'https://campus.speechanddebate.org/',
    DEBUG: import.meta.env.NSDA_DEBUG || true,
    DEBUG_REMOTE: import.meta.env.NSDA_DEBUG_REMOTE || false,
    RETRY_DELAY: import.meta.env.NSDA_RETRY_DELAY || 500,
    SCHOOL_DUES_AVAILABLE: import.meta.env.NSDA_SCHOOL_DUES_AVAILABLE ||
        new Date().getMonth() !== 6,
    TRP_AVAILABLE: import.meta.env.NSDA_TRP_AVAILABLE ||
        new Date().getMonth() < 6 ||
        new Date().getMonth() > 8,
    TRP_EARLY_BIRD_AVAILABLE: import.meta.env.NSDA_TRP_EARLY_BIRD_AVAILABLE ||
        (new Date().getMonth() > 6 && new Date().getMonth() < 9),
    STUDENT_AVAILABLE: import.meta.env.NSDA_STUDENT_AVAILABLE || new Date().getMonth() !== 6,
    COACH_AVAILABLE: import.meta.env.NSDA_COACH_AVAILABLE || new Date().getMonth() !== 6,
    NFHS_AVAILABLE: import.meta.env.NSDA_NFHS_AVAILABLE || new Date().getMonth() !== 6,
    PREPAID_SCHOOL_AVAILABLE: import.meta.env.NSDA_PREPAID_SCHOOL_AVAILABLE ||
        (new Date().getMonth() < 7 && new Date().getMonth() > 2),
    PREPAID_TRP_AVAILABLE: import.meta.env.NSDA_PREPAID_TRP_AVAILABLE || false,
    PREPAID_TRP_EARLY_BIRD_AVAILABLE: import.meta.env.NSDA_PREPAID_TRP_EARLY_BIRD_AVAILABLE ||
        (new Date().getMonth() < 7 && new Date().getMonth() > 2),
    PREPAID_STUDENT_AVAILABLE: import.meta.env.NSDA_PREPAID_STUDENT_AVAILABLE || true,
    MAINTENANCE_MODE: import.meta.env.NSDA_MAINTENANCE_MODE || false,
    MAINTENANCE_MODE_ADMIN: import.meta.env.NSDA_MAINTENANCE_MODE_ADMIN || false,
    MAINTENANCE_NOTIFICATION: import.meta.env.NSDA_MAINTENANCE_NOTIFICATION || false,
    MAINTENANCE_START: import.meta.env.NSDA_MAINTENANCE_START || '2021-06-21T06:00:00-06:00',
    MAINTENANCE_END: import.meta.env.NSDA_MAINTENANCE_END || '2021-06-22T06:00:00-06:00',
    BLU_MAINTENANCE: import.meta.env.NSDA_BLU_MAINTENANCE || false,
    COLLEGE_SURVEY: import.meta.env.NSDA_COLLEGE_SURVEY || false,
    ALUMNI_PROMPT: import.meta.env.NSDA_ALUMNI_PROMPT || false,
    PUBLISH_PATH: import.meta.env.NSDA_PUBLISH_PATH || './build',
    ASSET_PATH: import.meta.env.NSDA_ASSET_PATH || '/public/',
    STANDALONE: import.meta.env.NSDA_STANDALONE || false,
    MATOMO_ID_ACCOUNT: import.meta.env.NSDA_MATOMO_ID_ACCOUNT || '',
    MATOMO_ID_ADMIN: import.meta.env.NSDA_MATOMO_ID_ADMIN || '',
    VIRTUOUS_PROFILE_URL: import.meta.env.NSDA_VIRTUOUS_PROFILE_URL ||
        'https://app.virtuoussoftware.com/Generosity/Contact/View',
};
const env = process.env.NODE_ENV ?? 'development';
switch (env) {
    case 'staging':
        config.BASE_URL = 'https://staging.speechanddebate.org/';
        config.API_URL = 'https://api-staging.speechanddebate.org/v2/';
        config.API_HOST = 'api-staging.speechanddebate.org';
        config.STANDALONE = true;
        break;
    case 'production':
        config.BASE_URL = 'https://www.speechanddebate.org/';
        config.API_URL = 'https://api.speechanddebate.org/v2/';
        config.API_HOST = 'api.speechanddebate.org';
        config.CONTACT_URL =
            'https://www.speechanddebate.org/contact/?message=';
        config.DONATE_URL = 'https://www.speechanddebate.org/donate';
        config.LOGIN_URL = 'https://www.speechanddebate.org/login';
        config.LOGOUT_URL = 'https://www.speechanddebate.org/logout';
        config.STORE_URL = 'https://www.speechanddebate.org/store';
        config.STORE_ORDERS_URL =
            'https://www.speechanddebate.org/store/orders';
        config.STORE_CART_URL = 'https://www.speechanddebate.org/store/cart';
        config.LOGO_URL =
            'https://www.speechanddebate.org/wp-content/uploads/homepage_sparky_transparent.png';
        config.ERROR_IMAGE_URL =
            'https://www.speechanddebate.org/wp-content/uploads/2019_NSDAMug-300x300.jpg';
        config.WP_ADMIN_URL =
            'https://www.speechanddebate.org/wp-admin/index.php';
        config.WP_MENU_URL =
            'https://www.speechanddebate.org/wp-json/menus/v1/menus/353';
        config.WP_STORE_ADMIN_ORDERS_URL =
            'https://www.speechanddebate.org/store/wp-admin/post.php';
        config.ACCOUNT_URL = 'https://account.speechanddebate.org';
        config.PUBLISH_PATH =
            '/var/www/speechanddebate/wp-content/plugins/nsda-ams/build';
        config.STANDALONE = true;
        config.MATOMO_ID_ACCOUNT = '6';
        config.MATOMO_ID_ADMIN = '7';
        break;
    case 'test':
    case 'development':
    default:
        break;
}
Object.keys(config).forEach((key) => {
    if (config[key] === 'true') {
        config[key] = true;
    }
    if (config[key] === 'false') {
        config[key] = false;
    }
});
export default config;

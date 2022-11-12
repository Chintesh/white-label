<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'new_dev_db' );

/** MySQL database username */
define( 'DB_USER', 'new_dev_usr' );

/** MySQL database password */
define( 'DB_PASSWORD', 'mAnsS5cerJXdJFjL' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );


define( 'WP_HOME', 'http://139.59.68.86/new_dev' );
define( 'WP_SITEURL', 'http://139.59.68.86/new_dev' );

/**
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'uLp/mt9op0d3HKBQuBqJFLgWIBwFLhhiRKBLp6gUuEDeRPjDHWxh6Lb1mL8rJMyWJ/EgWxPvo345fz5thz6e6w==');
define('SECURE_AUTH_KEY',  'KBkUF/04Hu7LUv308jHUdGCuNwgBEcTpnyDmCmBQEthNDtqWhQ9ze67yqaICdCLVRfxP+e//X6WocrcQtfar2g==');
define('LOGGED_IN_KEY',    '21vLZl5Ly0YXRPLkR/8klo83RnSUvXE9cTLodRcqEmCf2FoIvEsqxn9/Rv//RCO7+aGfPWS6tWZv4jW+ecUDdg==');
define('NONCE_KEY',        'upUvz0osYI5D0USvt2tfxXP/Ooumemh+Ece1B0giL132mjgPl6qCmwiaXIV5DVtxdT6wlEhTV4SVQ9umQnPGhg==');
define('AUTH_SALT',        'dc5IWhnaetO2XbGC62nh7nNZi3YnBtdy8PgIs9fZSCc71Bc7sq1oiLRSF3ysoi5Ud/PkbOx0Zv9DEfGdyzwU7w==');
define('SECURE_AUTH_SALT', 'M+kf5bS1CMUw+5fqpsj+lp5evIB8igWNDlnEvI/GcP7X7HjK8NIlmwf7vPx3EXQOAY6OhDLyRevIiObu4L67Jg==');
define('LOGGED_IN_SALT',   '/Hx8Kt6FeGjVsFUOXhnKuamIctPzqZOe7+qwSfYPNZi6LbOlV0dItTjKzdqSPGVz1Vt7plbVqSrKZ+sP7R/czQ==');
define('NONCE_SALT',       'Z8FkmhfHrPyt8ZVhm2jDdoy+H9RkW9Cyt3rpwN9qpqBzMcFu5FOPCE8Q9rDB62pE438orXBBoUmrjvfXmiIKlg==');

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';




/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';

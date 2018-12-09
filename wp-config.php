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
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'teetalkies');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', '');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'O1+bS;c^W*dSxQ:n#O774vUlM&?okoQ34?|])]C._CuXXc|S++:w7q63X)LbcQF:');
define('SECURE_AUTH_KEY',  'L6XXj=]<]312D3<btXXZMnRfjf imKif$]OCX<|3Mlh6y*<.PE3NRgms48n]1;-v');
define('LOGGED_IN_KEY',    ']+*VX{/&Vv`3:ea)`#u;<*#K>!l1id0]mO@ycPA*4^/dDMy`r0(kpZ7hM^=/E=ou');
define('NONCE_KEY',        '/}K4Ab%7_{Jm0v@vZ>s`f$&XMd]l=jS yhp-3QQrL> w$0|S.0Wtho)M@HYu,Y}Y');
define('AUTH_SALT',        'z:/q0wkAvT(%]`sWt*=JM);pc +9TXY1P)GB`<T(ssyJwH8N!]O$xxTVgKx^E[!r');
define('SECURE_AUTH_SALT', '0?4]|t<.-&%=+a4TcvaG-mK386#R5Cu]p**EHWLqV!RxB]yrAaa]Tt$#u^C2pEE=');
define('LOGGED_IN_SALT',   ' &2PDxEf)[Jlp)qs`gS(IdC]gjFPr`>R?o:L6G/X}Y>;{2S,|pek do5L*:j 72M');
define('NONCE_SALT',       '-qE>UWTS^U/U%/2h(kphvM@|U-8^+xUp: nMENqGrk%}uvd_>Rb?rpnZ#kWQCF!*');


/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_teetalkies';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', true);


/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');

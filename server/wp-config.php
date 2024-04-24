<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'click-news-server' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '4:8`ozUSqJu>{!b?4o|H7J|hL,#oPcdiUPIxbW==keR%BF:$+{[$$p~BZj[9&y^B' );
define( 'SECURE_AUTH_KEY',  'Xm|mCDk8N$iB)i%!Sdzc%9Q)BYQ`Va4[ kCFkw*~Z=SYWh#%2|YMc)#MP^LAiFy{' );
define( 'LOGGED_IN_KEY',    '84epBK],o}v80 [AXrZc%AzZz2lzSz/{ssdPC8No%d=BD_u>U?5Ie,{M0P8~:DTa' );
define( 'NONCE_KEY',        'vDiY^BC)pl[D62|R`7XeeqM{fGfY*#~y*O/&mv(-S8,gdu,7KAC^a#Fk+22%=X @' );
define( 'AUTH_SALT',        'e,w BP?:d_ndAg;9r1L&|Zjwmf9lhZw`(Nh*L@Kh%>XM+r[S}L0kc2u/xKAhIPC$' );
define( 'SECURE_AUTH_SALT', '$:VL+Z.^u96!;Z1N4~h-[c7}P6;3Ef5L@*~G[/=>M2Vlr:N=EhJQb^J{@N%{o{%>' );
define( 'LOGGED_IN_SALT',   'ani0yi^ZjewmFA.SQn?4Hw<tMXYT9>0V1rDU{dj y(4f?:%I@DTx$0h<$SVpN%s=' );
define( 'NONCE_SALT',       'yi0&>{uzHIY8RVDmQDq^1yLWH,DX+LN44&4t>ZI*[btk3ODKVVGrQ4Q)`=@P`kEF' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';

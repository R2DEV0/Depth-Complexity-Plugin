<?php
/**
 *
 * Plugin Name:     The Depth & Complexity Plugin
 * Plugin URI: 		  https://depthcomplexity.com
 * Description:     Custom addons and extensions for the Depth & the Complexity website
 * Version:         1.0.0.5
 * Text Domain:     depthandcomplexity
 * Author:          Kevin Chancey
 * Author URI:      kevin@kevtech.net
 * Text Domain:     depth-and-complexity
 * Domain Path:     /languages
 */

defined('ABSPATH') || exit;

$dir = plugin_dir_path( __FILE__ );
$dir_includes = $dir . 'includes/';

require_once($dir_includes . 'settings.php');
require_once($dir_includes . 'RestAPI.php');
require_once($dir_includes . 'DCOnline.php');
require_once($dir_includes . 'CustomRCP.php');
require_once($dir_includes . 'CustomWoo.php');

add_action( 'plugins_loaded', function() {
  DC_Optimize\RestAPI::get_instance();
  DC_Optimize\DCOnline::get_instance();
  DC_Optimize\CustomRCP::get_instance();
  DC_Optimize\CustomWoo::get_instance();
});

// register_activation_hook(__FILE__, 'dc_activate');
// register_deactivation_hook(__FILE__, 'dc_deactivate');

?>
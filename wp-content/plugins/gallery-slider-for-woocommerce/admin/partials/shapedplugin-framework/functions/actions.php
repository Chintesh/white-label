<?php
/**
 * The admin settings page of this plugin.
 *
 * Defines various settings of Gallery Slider for WooCommerce.
 *
 * @package    Woo_Gallery_Slider
 * @subpackage Woo_Gallery_Slider/admin
 * @author     Shapedplugin <support@shapedplugin.com>
 */

if ( ! defined( 'ABSPATH' ) ) {
	die;
} // Cannot access directly.
if ( ! function_exists( 'wp_get_current_user' ) ) {
	include ABSPATH . 'wp-includes/pluggable.php';
}
$capability      = apply_filters( 'wcgs_ui_permission', 'manage_options' );
$wcgs_is_capable = current_user_can( $capability ) ? true : false;

if ( ! function_exists( 'wcgs_reset_ajax' ) && $wcgs_is_capable ) {
	/**
	 *
	 * Reset Ajax
	 *
	 * @since 1.0.0
	 * @version 1.0.0
	 */
	function wcgs_reset_ajax() {

		$nonce  = ( ! empty( $_POST['nonce'] ) ) ? sanitize_text_field( wp_unslash( $_POST['nonce'] ) ) : '';
		$unique = ( ! empty( $_POST['unique'] ) ) ? sanitize_text_field( wp_unslash( $_POST['unique'] ) ) : '';

		if ( ! wp_verify_nonce( $nonce, 'wcgs_backup_nonce' ) ) {
			wp_send_json_error( array( 'error' => esc_html__( 'Error: Invalid nonce verification.', 'gallery-slider-for-woocommerce' ) ) );
		}

		// Success.
		delete_option( $unique );

		wp_send_json_success();

	}
	add_action( 'wp_ajax_wcgs-reset', 'wcgs_reset_ajax' );
}

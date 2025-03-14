<?php
/**
 * Plugin Name:       My Portfolio Blocks
 * Description:       Show what you can do with these blocks!
 * Version:           0.1.0
 * Requires at least: 6.7
 * Requires PHP:      7.4
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       kn-portfolio-blocks
 *
 * @package Kn
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function kn_kn_portfolio_blocks_block_init() {
	register_block_type( __DIR__ . '/build/blocks/kn-portfolio-blocks' );
	register_block_type( __DIR__ . '/build/blocks/portfolio-projects' );
	register_block_type( __DIR__ . '/build/blocks/project-list' );
	wp_enqueue_script( 'wp-api' );
}
add_action( 'init', 'kn_kn_portfolio_blocks_block_init' );


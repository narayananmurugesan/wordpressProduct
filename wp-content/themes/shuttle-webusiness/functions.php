<?php

// ----------------------------------------------------------------------------------
//	Register Front-End Styles And Scripts
// ----------------------------------------------------------------------------------

function shuttle_child_frontscripts() {

	wp_enqueue_style( 'shuttle-style', get_template_directory_uri() . '/style.css', array( 'shuttle-bootstrap' ) );
	wp_enqueue_style( 'shuttle-style-webusiness', get_stylesheet_directory_uri() . '/style.css', array( 'shuttle-style' ), wp_get_theme()->get('Version') );
}
add_action( 'wp_enqueue_scripts', 'shuttle_child_frontscripts' );


// ----------------------------------------------------------------------------------
//	Hide blog options in customizer - Blog layout used
// ----------------------------------------------------------------------------------

function shuttle_child_adminscripts() {

	if ( is_customize_preview() ) {

		// Add theme stylesheets
		wp_enqueue_style( 'shuttle-child-backend', get_stylesheet_directory_uri() . '/styles/backend/style-backend.css', '', '' );

	}
}
add_action( 'admin_enqueue_scripts', 'shuttle_child_adminscripts' );


// ----------------------------------------------------------------------------------
//	Update Options Array With Child Theme Settings
// ----------------------------------------------------------------------------------

// Add child theme settings to options array
function shuttle_updateoption_child_settings() {

	// Set theme name combinations
	$name_theme_upper = 'Shuttle';
	$name_theme_lower = strtolower( $name_theme_upper );

	// Set possible options names
	$name_options_free  = 'shuttle_redux_variables';
	$name_options_child = 'shuttle_child_settings_webusiness';

	// Get options values (theme options)
	$options_free = get_option( $name_options_free );

	// Get child settinsg values
	$options_child_settings = get_option( $name_options_child );

	// Only set child settings values if not already set 
//	if ( $options_child_settings != 1 ) {

		$options_free['shuttle_styles_skinswitch']  = '1';
		$options_free['shuttle_styles_skin']        = 'webusiness';
		$options_free['shuttle_blog_style']         = 'option1';
		$options_free['shuttle_blog_style2layout']  = 'option1';
		$options_free['shuttle_header_styleswitch'] = 'option1';


		// Add child settings to theme options array
		update_option( $name_options_free, $options_free );

//	}

	// Set the child settings flag
	update_option( $name_options_child, 1 );

}
add_action( 'init', 'shuttle_updateoption_child_settings', 999 );

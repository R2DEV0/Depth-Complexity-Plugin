<?php

function dc_register_settings() {
  register_setting( 'dc_options', 'dc_collection_post', 'dc_collection_post_validate' );
  add_settings_section( 'dc_api', 'Plugin Settings for Depth and Complexity Plugin', 'dc_api_section_text', 'dc_settings' );

  add_settings_field( 'dc_collection_post', 'DC Collection Post Id', 'dc_collection_post_callback', 'dc_settings', 'dc_api' );
}
add_action( 'admin_init', 'dc_register_settings' );

function dc_collection_post_validate( $value ) {
  return $value;
}

function dc_collection_post_callback() {
  $dc_collection_post = get_option( 'dc_collection_post' );
  echo '<input id="dc_collection_post" name="dc_collection_post" title="The authorized post used to check if user is autorized to access to the DC Collection downloads" type="text" value="' . $dc_collection_post . '" />';
}


function dc_api_section_text() {
  echo '';
}


function dc_register_options_page() {
  add_options_page('Depth and Complexity Settings', 'Depth and Complexity', 'manage_options', 'dc', 'dc_options_page');
}

add_action( 'admin_menu', 'dc_register_options_page' );


function dc_options_page()
{
?>
  <h1>Depth and Complexity Settings</h1>
  <form action="options.php" method="post">
    <?php
      settings_fields( 'dc_options' );
      do_settings_sections( 'dc_settings' );
    ?>
    <input name="submit" class="button button-primary" type="submit" value="<?php esc_attr_e( 'Save' ); ?>" />
  </form>
<?php
}
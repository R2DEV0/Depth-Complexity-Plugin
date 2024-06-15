<?php

namespace DC_Optimize;

class CustomWoo
{
  private static $instance;

  public static function get_instance()
  {
      if (null === self::$instance) {
          self::$instance = new self();
      }
      return self::$instance;
  }

  public function __construct()
  {
    add_filter('woocommerce_is_purchasable', array($this, 'filter_is_purchasable'), 10, 2);
    add_action('woocommerce_single_product_summary', array($this, 'custom_replace_add_to_cart_button'), 30);
    add_filter('woocommerce_get_price_html', array($this, 'filter_product_price_html'), 10, 2);
  }

  function custom_replace_add_to_cart_button() {
    global $product;

    if($product){
      $product_category_ids = wc_get_product_term_ids($product->get_id(), 'product_cat');
    
      if ($product->is_downloadable() && $product_category_ids && in_array(289, $product_category_ids)) {
        $custom_rcp_instance = CustomRCP::get_instance();
        $post_id = get_option('dc_collection_post');
        $user_auth = $custom_rcp_instance->check_user_auth($post_id);

        if($user_auth){
          $download_files = $product->get_downloads();

          if ($download_files) {
            foreach ($download_files as $download) {
                $download_url = esc_url($download['file']);
                // $download_name = esc_html($download['name']);
    
                echo '<div class="dc-download-section"><p><strong>You have full access to this product:</strong></p>
                      <a target="_blank" class="button alt" href="' . $download_url . '"> Download Now! </a></div>';
            }
          }
        }
      }
    }
  }

  function filter_is_purchasable($purchasable, $product) {
    global $product;
    $post_id = get_option('dc_collection_post');
    $custom_rcp_instance = CustomRCP::get_instance();
    $user_auth = $custom_rcp_instance->check_user_auth($post_id);

    if($product){
      $product_category_ids = wc_get_product_term_ids($product->get_id(), 'product_cat');
    
      if ($user_auth && $product->is_downloadable() && $product_category_ids && in_array(289, $product_category_ids)) {
        $purchasable = false;
      }
    }

    return $purchasable;
  }

  function filter_product_price_html($price_html, $product) {
    global $product;

    if($product){
      $product_category_ids = wc_get_product_term_ids($product->get_id(), 'product_cat');
      $post_id = get_option('dc_collection_post');
      $custom_rcp_instance = CustomRCP::get_instance();
      $user_auth = $custom_rcp_instance->check_user_auth($post_id);

      if ($user_auth && $product->is_downloadable() && $product_category_ids && in_array(289, $product_category_ids)) {
          return '';
      } else {
          return $price_html;
      }
    }
  }

}
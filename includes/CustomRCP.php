<?php

namespace DC_Optimize;

class CustomRCP
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
        add_filter('wp_nav_menu_items', array($this, 'custom_rcp_menu_filter'), 10, 2);
        add_action('init', array($this, 'custom_rcp_membership_check'), 10, 1);
    }

    public function check_user_auth($post_id){
      $user_id = get_current_user_id();
      return rcp_user_can_access($user_id, $post_id);
    }

    public function custom_rcp_menu_filter($items, $args) {

        $submenu_items = '';
    
        if ( $this->check_user_auth(49060) || current_user_can('administrator')) {
          $submenu_items .= '<li class="dc-menu-item menu-item dc-organizers"><a href="https://depthcomplexity.com/dc-graphic-organizers/">Graphic Organizers</a></li>';
        }
        
        if( $this->check_user_auth(49077) || current_user_can('administrator') ){
          $submenu_items .= '<li class="dc-menu-item menu-item dc-async-courses"><a href="https://depthcomplexity.com/async-courses/">Asynchronous Courses</a></li>';
        }

        $dc_post_id = get_option('dc_collection_post');
        
        if($this->check_user_auth($dc_post_id) || current_user_can('administrator')){
          $submenu_items .= '<li class="dc-menu-item menu-item dc-collection"><a href="https://depthcomplexity.com/dc-collection/">Classroom Ready Activities</a></li>';
        }

        if($this->check_user_auth(50883) || current_user_can('administrator')){
          $submenu_items .= '<li class="dc-menu-item menu-item dc-suite"><a href="https://depthcomplexity.com/dc-suite/">Software Suite</a></li>';
        }

        if( is_user_logged_in()){
          $submenu_items .= '<li class="dc-menu-item menu-item dc-quick-hitters"><a href="https://depthcomplexity.com/quick-hitters/">Instructional Videos</a></li>';
        }

        if( $this->check_user_auth(49092) || current_user_can('administrator') ){
          $submenu_items .= '<li class="dc-menu-item menu-item dc-deep-dives"><a href="https://depthcomplexity.com/courses/">Deep Dive Videos</a></li>';
        }

        if ( is_user_logged_in() ) {
          $submenu_items .= '<li class="dc-menu-item menu-item dc-icons"><a href="https://depthcomplexity.com/free-downloadable-icons/">FREE Icons</a></li>';
          $submenu_items .= '<li class="dc-menu-item menu-item dc-my-orders"><a href="https://depthcomplexity.com/my-account/">Orders Dashboard</a></li>';
        } 

        $pattern = '/(<li.*?class="menu-item menu-item-type-custom menu-item-object-custom menu-item-49473 no-icon".*?>)/i';
        $replacement = '$1<div class="wrapper ab-submenu"><ul class="bb-sub-menu">' . $submenu_items . '</ul></div>';
        $items = preg_replace($pattern, $replacement, $items);
        
        return $items;
      }

      function custom_rcp_membership_check() {

        if(is_user_logged_in() && !current_user_can('administrator')){

          $user_id = get_current_user_id();
          $user_customer = rcp_get_customer_by_user_id($user_id);
          $user_customer_id = null;
          
          // user customer does not exist yet, create one first
          if(!$user_customer){
            $user_customer_id = rcp_add_customer( array(
              'user_id' => $user_id,
              'date_registered' => date('Y-m-d H:i:s')
            ));
          } else {
            $user_customer_id = $user_customer->get_id();
          }

          if($user_customer_id){
            $user_level_ids = rcp_get_customer_membership_level_ids($user_customer_id);

            global $wpdb;
            $group_member_table = $wpdb->prefix . 'rcp_group_members';
            $group_ids = $wpdb->get_col(
                $wpdb->prepare("SELECT group_id FROM $group_member_table WHERE user_id = %d", $user_id)
            );
  
            // keep track of levels so they do not get duplicates
            $user_added_levels = array();
          
            foreach($group_ids as $id){
              
              // RCP Group
              $group = rcpga_get_group($id);
              
              // Group Owner Id
              $group_owner_id = $group->get_owner_id();
              
              // Get Group Owner's RCP customer object
              $owner_customer = rcp_get_customer_by_user_id($group_owner_id);
    
              // Get Group Owner's Level Id's
              $owner_level_ids = rcp_get_customer_membership_level_ids($owner_customer->get_id());
    
              $missing_level_ids = array_diff($owner_level_ids, $user_level_ids);
              
              // Perform actions based on the missing items
              if (!empty($missing_level_ids)) {
                foreach ($missing_level_ids as $level) {
                  
                  // Add the subscription to the user
                  if (!in_array($level, $user_added_levels)) {
  
                    // get group owner's membership expiration dates
                    $membership_level = rcp_get_memberships(array(
                      'object_id' => $level
                    ));
  
                    if($membership_level[0]->get_status() == 'active'){
  
                      $expiration_date = $membership_level[0]->get_expiration_date() !== 'none' ? date('Y-m-d H:i:s', strtotime($membership_level[0]->get_expiration_date())) : NULL;
  
                      rcp_add_membership(array(
                        'customer_id' => $user_customer_id,
                        'created_date' => date('Y-m-d H:i:s'),
                        'expiration_date' => $expiration_date,
                        'object_id' => $level,
                        'object_type' => 'membership',
                        'status' => 'active'
                      ));
    
                      $user_added_levels[] = $level;
                    }
                  }
                }
              }
            }
          }
        }
      }     
}
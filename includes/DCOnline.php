<?php

namespace DC_Optimize;

class DCOnline
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
        add_filter( 'page_template', array($this, 'dc_page_template'));
    }

    public function dc_page_template($page_template)
    {
        if(is_page('dc-suite')){
            $dir = plugins_url('dc-optimize/');
            $page_template = dirname( __FILE__ ) . '/templates/dcsuite.php';
            wp_enqueue_script( 'dc-suite-js', $dir . 'public/bundles/index.bundle.js', array(), '1.0.0.0', true);
            wp_enqueue_style( 'dc-suite-css', $dir . 'public/css/main.css', array(), '1.0.0.0');
            wp_enqueue_style( 'dc-bootstrap-css', $dir . 'public/css/bootstrap.css', array(), '1.0.0.0');
            wp_enqueue_style( 'dc-bootstrap-icons', 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css');
        }

        return $page_template;
    }

}
<?php
/**
 * @package News Plugin
 * @version 1.0.0
 */
/*
Plugin Name: News Plugin
Plugin URI: https://clicknews.com
Description: Plugin for managing news articles on your website
Author: Dipendra
Version: 1.0.0
Author URI: https://clicknews.com
*/

function generate_news_post_type() {
    $labels = array(
        'name'                  => 'News',
        'singular_name'         => 'News',
    );
    $args = array(
        'label'                 => 'News',
        'labels'                => $labels,
        'supports'              => array('title', 'editor', 'custom-fields'),
        'taxonomies'            => array('category', 'post_tag'),
        'hierarchical'          => false,
        'public'                => true,
        'capability_type'       => 'post', 
        'show_in_rest'          => true,
        'rest_base'             => 'news',
    );
    register_post_type('news_post_type', $args);
}

add_action('init', 'generate_news_post_type', 0);

// Add a meta box for news details
function add_news_details_meta_box() {
    add_meta_box(
        'news_details_meta_box',
        'News Details',
        'render_news_details_meta_box',
        'news_post_type',
        'normal',
        'high'
    );
}

add_action('add_meta_boxes', 'add_news_details_meta_box');

// Render the content of the news details meta box
function render_news_details_meta_box($post) {
    // Get the current news details
    $news_title = get_post_meta($post->ID, '_news_title', true);
    $news_content = get_post_meta($post->ID, '_news_content', true);
    $news_author = get_post_meta($post->ID, '_news_author', true);
    $news_date = get_post_meta($post->ID, '_news_date', true);
    $news_stat = get_post_meta($post->ID, '_news_stat', true);
    $news_category = get_post_meta($post->ID, '_news_category', true);
    $news_img = get_post_meta($post->ID, '_news_img', true);

    // Use nonce for verification
    wp_nonce_field(basename(__FILE__), 'news_details_nonce');

    // Display the input fields for news details
    ?>
    <label for="news_title">News Title:</label>
    <input type="text" name="news_title" id="news_title" class="widefat" value="<?php echo esc_attr($news_title); ?>" />

    <label for="news_content">News Content:</label>
    <textarea name="news_content" id="news_content" class="widefat" rows="5"><?php echo esc_textarea($news_content); ?></textarea>

    <label for="news_author">News Author:</label>
    <input type="text" name="news_author" id="news_author" class="widefat" value="<?php echo esc_attr($news_author); ?>" />

    <label for="news_date">News Date:</label>
    <input type="text" name="news_date" id="news_date" class="widefat" value="<?php echo esc_attr($news_date); ?>" />

    <label for="news_stat">News Status:</label>
    <input type="text" name="news_stat" id="news_stat" class="widefat" value="<?php echo esc_attr($news_stat); ?>" />

    <label for="news_category">News Category:</label>
    <input type="text" name="news_category" id="news_category" class="widefat" value="<?php echo esc_attr($news_category); ?>" />

    <label for="news_img">News Image URL:</label>
    <input type="text" name="news_img" id="news_img" class="widefat" value="<?php echo esc_url($news_img); ?>" />
    <p>
        <input type="button" id="upload_news_image_button" class="button" value="Upload Image" />
    </p>
    <script>
        jQuery(document).ready(function($){
            var custom_uploader;

            $('#upload_news_image_button').click(function(e) {
                e.preventDefault();

                //If the uploader object has already been created, reopen the dialog
                if (custom_uploader) {
                    custom_uploader.open();
                    return;
                }

                //Extend the wp.media object
                custom_uploader = wp.media.frames.file_frame = wp.media({
                    title: 'Choose Image',
                    button: {
                        text: 'Choose Image'
                    },
                    multiple: false
                });

                //When a file is selected, grab the URL and set it as the text field's value
                custom_uploader.on('select', function() {
                    var attachment = custom_uploader.state().get('selection').first().toJSON();
                    $('#news_img').val(attachment.url);
                });

                //Open the uploader dialog
                custom_uploader.open();
            });
        });
    </script>
    <?php
}

// Save each news data field when saving the news
function save_news_details_meta($post_id) {
    // Verify nonce
    if (!isset($_POST['news_details_nonce']) || !wp_verify_nonce($_POST['news_details_nonce'], basename(__FILE__))) {
        return $post_id;
    }

    // Check if it's not an autosave
    if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) {
        return $post_id;
    }

    // Check the user's permissions
    if ('news_post_type' == $_POST['post_type'] && current_user_can('edit_post', $post_id)) {
        // Save each news data field individually
        update_post_meta($post_id, '_news_title', sanitize_text_field($_POST['news_title']));
        update_post_meta($post_id, '_news_content', sanitize_textarea_field($_POST['news_content']));
        update_post_meta($post_id, '_news_author', sanitize_text_field($_POST['news_author']));
        update_post_meta($post_id, '_news_date', sanitize_text_field($_POST['news_date']));
        update_post_meta($post_id, '_news_stat', sanitize_text_field($_POST['news_stat']));
        update_post_meta($post_id, '_news_category', sanitize_text_field($_POST['news_category']));
        update_post_meta($post_id, '_news_img', esc_url($_POST['news_img']));
    }
}

// Ensure all custom fields are exposed in REST API
function expose_custom_fields_in_rest_news() {
    register_rest_field('news_post_type', '_news_title', array(
        'get_callback'    => 'get_custom_field_news',
        'update_callback' => 'update_custom_field_news',
        'schema'          => null,
    ));

    register_rest_field('news_post_type', '_news_content', array(
        'get_callback'    => 'get_custom_field_news',
        'update_callback' => 'update_custom_field_news',
        'schema'          => null,
    ));

    register_rest_field('news_post_type', '_news_author', array(
        'get_callback'    => 'get_custom_field_news',
        'update_callback' => 'update_custom_field_news',
        'schema'          => null,
    ));

    register_rest_field('news_post_type', '_news_date', array(
        'get_callback'    => 'get_custom_field_news',
        'update_callback' => 'update_custom_field_news',
        'schema'          => null,
    ));

    register_rest_field('news_post_type', '_news_stat', array(
        'get_callback'    => 'get_custom_field_news',
        'update_callback' => 'update_custom_field_news',
        'schema'          => null,
    ));

    register_rest_field('news_post_type', '_news_category', array(
        'get_callback'    => 'get_custom_field_news',
        'update_callback' => 'update_custom_field_news',
        'schema'          => null,
    ));

    register_rest_field('news_post_type', '_news_img', array(
        'get_callback'    => 'get_custom_field_news',
        'update_callback' => 'update_custom_field_news',
        'schema'          => null,
    ));
}

function get_custom_field_news($object, $field_name, $request) {
    return get_post_meta($object['id'], $field_name, true);
}

function update_custom_field_news($value, $object, $field_name) {
    return update_post_meta($object->ID, $field_name, $value);
}

add_action('init', 'expose_custom_fields_in_rest_news');
add_action('save_post', 'save_news_details_meta');
add_action('rest_api_init', 'expose_custom_fields_in_rest_news');

import jQuery from 'jquery';

// get the URI from the current page
const data = {
	uri: window.location.pathname
}

// request Admin Bar after converting array to JSON
jQuery.ajax({
    type: 'POST',
    url: '/actions/admin-bar/bar',
    cache: false,
    data: JSON.stringify(data),
    dataType: 'json',
    success: function(data) {
        if (data.response === 'success' && typeof adminBarInit === "function") {
            // add Admin Bar to the bottom of the <body> element
            jQuery('body').append(data.content);

            // fire init function that gets loaded into the template
            // via the {{ getAdminBarAssets() }} Twig tag
            adminBarInit();
        }
    },
    error: function(err) {
        console.log("Error");
        console.log(err);
    }
});
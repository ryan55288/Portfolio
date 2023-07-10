    $(document).ready(function () {
        $('[data-toggle="list"]').click(function () {
            var target = $(this).attr('href');
            $(target).tab('show');
        });
    });
    window.open = function () {};
    window.print = function () {};
    // Support hover state for mobile.
    if (false) {
        window.ontouchstart = function () {};
    }
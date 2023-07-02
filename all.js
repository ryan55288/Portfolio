    $(document).ready(function () {
        $('[data-toggle="list"]').click(function () {
            var target = $(this).attr('href');
            $(target).tab('show');
        });
    }); 
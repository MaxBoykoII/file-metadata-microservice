$(document).ready(function() {

    var file;
    $('input[type=file]').change(function(e) {
        file = e.target.files[0];
    });

    $('form').on('submit', function(e) {
        e.preventDefault();
        var form = $(this),
            formData = new FormData();
        formData.append("file", file, file.name);

        $.ajax('/size', {
            type: 'POST',
            data: formData,
            cache: false,
            processData: false,
            contentType: false,
            success: function(res) {
                alert("The file size is " + res.size + " bytes.");
                form.trigger('reset');
            }, 
            timeout: 6000,
            error: function(error){
                alert("The file size is " + file.size + " bytes.");
                console.log(error);
                form.trigger('reset');
            }
        });
    });
})
$(function(){

    /*

        * RENDER MARKDOWN TO HTML
    
    */
    
    var converter = new showdown.Converter({
        'tables':true,
        'simpleLineBreaks':true
    });

    $.ajax({
        url: "../../profile.txt",
        dataType: "text",
        cache: false
    })
    .fail(function(jqXHR, textStatus, errorThrown) {
        console.error("Failed to get markdown", jqXHR, textStatus, errorThrown);

    })
    .done(function(data){
        MarkdowntoHTML(data);
    })

    function MarkdowntoHTML(markdown){
        mhtml = converter.makeHtml(markdown);

        $('#markdown-container').html(mhtml);

       // prevent orphans in text
        console.log($('#markdown-container h2').unorphanize());

        // showtime
        $('body').fadeIn(500);

    }

});

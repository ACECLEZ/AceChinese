$('script').each(function(){
    var scripthtml = $(this).html();
    $(this).replaceWith('<script type="text/gzip">' + scripthtml + '</script>');
});

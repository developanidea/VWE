(function() {
    if (document.body.contentEditable === 'true') {
        document.body.contentEditable = 'false';
        alert('edit mode disabled');
    } else {
        document.body.contentEditable = 'true';
        document.designMode = 'on';
        alert('edit mode enabled');
    }
})();

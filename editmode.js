(function() {
    // Allows you to click and type on ANY text on the website
    if (document.body.contentEditable === 'true') {
        document.body.contentEditable = 'false';
        alert('♢ Edit Mode: Disabled');
    } else {
        document.body.contentEditable = 'true';
        document.designMode = 'on';
        alert('♢ Edit Mode: Enabled! You can now edit the website text.');
    }
})();

(function() {
    // Disable heavy CSS animations and shadows to boost performance
    const style = document.createElement('style');
    style.innerHTML = `
        * { 
            animation: none !important; 
            transition: none !important; 
            box-shadow: none !important; 
            text-shadow: none !important; 
        }
    `;
    document.head.appendChild(style);
    alert('♢ Optimization: FPS Boost Enabled!');
})();

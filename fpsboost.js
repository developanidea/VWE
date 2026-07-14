(function() {
    // DISABLE CSS THAT HEAVY
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
    alert('fpsboost working');
})();

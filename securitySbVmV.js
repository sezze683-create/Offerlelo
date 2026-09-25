
// PROTECTION SCRIPT


(function() {
    // 1. Right Click Disable (Context Menu)
    document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
    });

    // 2. Keyboard Shortcuts Disable (F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U, Ctrl+S)
    document.addEventListener('keydown', function(e) {
        // F12 disable
        if (e.keyCode === 123) {
            e.preventDefault();
            return false;
        }
        // Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+Shift+C (Inspect Element shortcuts)
        if (e.ctrlKey && e.shiftKey && (e.keyCode === 73 || e.keyCode === 74 || e.keyCode === 67)) {
            e.preventDefault();
            return false;
        }
        // Ctrl+U (View Source disable)
        if (e.ctrlKey && e.keyCode === 85) {
            e.preventDefault();
            return false;
        }
        // Ctrl+S (Save Page disable - Isse HTTrack aur local saving rukti hai)
        if (e.ctrlKey && e.keyCode === 83) {
            e.preventDefault();
            return false;
        }
    });

    // 3. Text Selection aur Copy Disable (Taaki koi text/code copy na kare)
    document.addEventListener('selectstart', function(e) {
        e.preventDefault();
    });

    // 4. Anti-Debugger Loop (Agar koi inspect element khol bhi le, toh browser hang/pause ho jayega)
    setInterval(function() {
        debugger;
    }, 100);
})();

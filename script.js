function positionButton() {
    var iframe = document.querySelector('.iframe-left');
    var rect = iframe.getBoundingClientRect(); // Get position of iframe relative to viewport
    var iframeTop = rect.top + window.pageYOffset; // Top position of iframe
    var iframeLeft = rect.left + window.pageXOffset; // Left position of iframe

    // Adjust button position relative to iframe visibility
    if (iframe.style.display === 'none') {
        // If iframe is invisible, move button to the edge
        button.style.bottom = '10px';
        button.style.right = '10px';
    } else {
        // If iframe is visible, position button relative to iframe
        button.style.bottom = (window.innerHeight - rect.bottom) + 'px';
        button.style.right = (window.innerWidth - rect.right) + 'px';
    }
}
function toggleIframeVisibility() {
    var iframe = document.querySelector('.iframe-right');
    if (iframe.style.display === 'none') {
        button.textContent = '>';
        iframe.style.display = 'inline'; // Make iframe visible
    } else {
        button.textContent = '<';
        iframe.style.display = 'none'; // Make iframe invisible
    }
    positionButton(); // Adjust button position after toggling iframe visibility
}
// Check if the screen width is greater than 768px (common breakpoint for mobile)
if (window.matchMedia("(min-width: 768px)").matches) {
    var button = document.createElement('button');
    var iframe = document.querySelector('.iframe-left');
    iframe.style.paddingRight = '35px';
    button.textContent = '<';
    document.body.appendChild(button);
    positionButton();
    window.addEventListener('resize', positionButton);
    button.addEventListener('click', toggleIframeVisibility);
}

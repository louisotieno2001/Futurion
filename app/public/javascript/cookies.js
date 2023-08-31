function acceptCookies() {
    setCookie('consent', 'accepted', 30); // Set the expiration to 30 days
    document.getElementById('cookieBanner').style.display = 'none';
}

function declineCookies() {
    setCookie('consent', 'declined', 30); // Set the expiration to 30 days
    document.getElementById('cookieBanner').style.display = 'none';
}

function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

function getCookie(name) {
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookies = decodedCookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i].trim();
        if (cookie.indexOf(name + "=") === 0) {
            return cookie.substring(name.length + 1);
        }
    }
    return null;
}

// Function to check cookie consent and adjust banner visibility
function checkCookieConsent() {
    const consentCookie = getCookie('consent');
  
    if (consentCookie === 'accepted' || consentCookie === 'declined') {
      document.getElementById('cookieBanner').style.display = 'none';
    } else {
      // Banner is shown by default
    }
}
  
// Load the function when the page loads
window.onload = function() {
    checkCookieConsent();
};
  

// I use this everywhere It forces a https connection
if (window.location.protocol === "http:") {
    window.location.href = "https://" + window.location.host + window.location.pathname + window.location.search;
}
function openInternal(url) {
    window.open(url, "_self");
}

function openExternal(url, trusted) {
    if (trusted != 1) {
        if (window.confirm("You are about to be directed to an external site, wish to continue?\n\nSite Link: " + url)) {
            window.open(url, "_blank");
        }
    } else {
        window.open(url, "_blank");
    }
}
function clearURL() {
    let urlWithoutParams = window.location.protocol + '//' + window.location.host + window.location.pathname;
    window.history.pushState({}, document.title, urlWithoutParams);
}
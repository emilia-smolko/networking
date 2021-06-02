function handler(event) {
    var hitCount = 0;
    if (event.request.cookies['hit-count']) {
        hitCount = parseInt(event.request.cookies['hit-count'].value);
    }
    hitCount=hitCount+1;
    event.response.cookies['hit-count'] = {value: ''+hitCount};
    //event.response.headers['log-emi1'] = {value: ''+JSON.stringify(event)}; 
    return event.response;
}
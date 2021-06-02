'use strict';

const hitCountCookieName = 'hit-origin';

exports.handler = (event, context, callback) => {
    const request = event.Records[0].cf.request;
    console.log("event:"+JSON.stringify(event));
    console.log("context:"+JSON.stringify(context));
    const parsedCookies = parseCookies(request.headers);
    var hits = parseInt(getHitcount(parsedCookies),10)+1;
    updateHits(event.Records[0].cf.response, hits);
    console.log("response:"+JSON.stringify(event.Records[0].cf.response));
    callback(null, event.Records[0].cf.response);
};

function getHitcount(cookies){
    var hitCount = 0;
    if (cookies[hitCountCookieName]) {
        hitCount = cookies[hitCountCookieName];
    }
    return hitCount;
}

function updateHits(response, hit) {
    response.headers['set-cookie'] = response.headers['set-cookie'] || [];
    response.headers['set-cookie'] = [{
        key: "Set-Cookie",
        value: hitCountCookieName+"="+hit
    }];

}
function parseCookies(headers) {
    const parsedCookie = {};
    if (headers.cookie) {
        headers.cookie[0].value.split(';').forEach((cookie) => {
            if (cookie) {
                const parts = cookie.split('=');
                parsedCookie[parts[0].trim()] = parts[1].trim();
            }
        });
    }
    return parsedCookie;
}

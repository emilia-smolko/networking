'use strict';

const hitRate = 8;
const hitCountCookieName = 'hit-count';

exports.handler = (event, context, callback) => {
    console.log("event:"+JSON.stringify(event));
    console.log("context:"+JSON.stringify(context));
    const request = event.Records[0].cf.request;
    const parsedCookies = parseCookies(request.headers);
    var hits = 1+getHitcount(parsedCookies);
    if (!isPremiumUser(parsedCookies) && hits<hitRate) {
        console.log("To waiting room! "+JSON.stringify(request));
        setupWaitingRoom(request);
    }

    callback(null, request);
};

function getHitcount(cookies){
    var hitCount = 0;
    if (cookies[hitCountCookieName]) {
        hitCount = parseInt(cookies[hitCountCookieName]);
    }
    return hitCount;
}

function isPremiumUser(cookies) {
    const premiumUserCookieName = 'premium-user-cookie';
    const premiumUserCookieValue = 'some-secret-value';

    if (cookies[premiumUserCookieName] &&
        cookies[premiumUserCookieName] === premiumUserCookieValue) {
        console.log(`Cookie "${premiumUserCookieName}" has ` +
                    `a valid secret value of "${premiumUserCookieValue}".`);
        return true;
    }
    return false;
}

function setupWaitingRoom(request) {
    const waitingRoomS3 = 'BUCKET.s3.amazonaws.com';
    if (request.uri == '/index.html'){
        request.uri = '/wait.html';
    }
    if(request.origin && request.origin.s3){
        request.origin.s3.region = 'eu-west-1';
        request.origin.s3.domainName = waitingRoomS3;
        request.origin.s3.path= '/';
    }
    request.headers['host'] = [{ key: 'host', value: waitingRoomS3 }];
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
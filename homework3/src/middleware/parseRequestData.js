import express from 'express';
import { parseUserAgent, getGeoData } from './../utils/userData.js';

const parseRequestData = async (req, res, next) => {
    const ip = req.ip.startsWith('::ffff:') ? req.ip.split(':').pop() : req.ip;
    const userLangs = req.acceptsLanguages();
    const currentLanguage = userLangs ? userLangs[0] : 'unknown';
    const ua = parseUserAgent(req.headers['user-agent']);
    const geo = await getGeoData(ip);

    req.visitData = {
        datetime: new Intl.DateTimeFormat('uk-UA', {
            dateStyle: 'short',
            timeStyle: 'medium',
        }).format(new Date()),
        timezone: geo.timezone,
        url: `${req.protocol}://${req.get('host')}${req.originalUrl}`,
        ip,
        country: geo.country,
        city: geo.city,
        region: geo.regionName,
        provider: geo.isp,
        zip: geo.zip,
        coordinate: {
            latitude: geo.lat,
            longitude: geo.lon,
        },
        browser: ua.browser,
        os: ua.os,
        device: ua.device,
        networkType: geo.mobile ? 'Mobile Network' : 'Wi-Fi Network',
        proxy: geo.proxy ? 'Proxy, VPN or Tor' : 'no',
        defaultLang: currentLanguage,
        userLangs,
        cookies: req.headers.cookie,
    };

    next();
};

export default parseRequestData;

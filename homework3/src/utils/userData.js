import { createRequire } from 'module';
const require = createRequire(import.meta.url);

import axios from 'axios';
const uap = require('ua-parser-js');

export const getGeoData = async (ip) => {
    try {
        const response = await axios.get(`http://ip-api.com/json/${ip}?fields=country,countryCode,region,regionName,city,lat,lon,timezone,isp,mobile,proxy`);
        return response.data;
    } catch (error) {
        throw new Error(`Failed to fetch geo data: ${error.message}`);
    }
};

export const parseUserAgent = (userAgent) => {
    const ua = uap(userAgent);
    return {
        browser: ua.browser,
        os: ua.os,
        device: ua.device,
        cpu: ua.cpu,
    };
};
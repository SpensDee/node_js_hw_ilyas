import style from './colors.js';

const logger = {

    info(message, prefix = 'INFO') {
        console.log(
            style(prefix, { bgColor: "Magenta" }),
            style(message, { color: "Magenta" })
        );
    },

    warn(message, prefix = 'WARN') {
        console.warn(
            style(prefix, { bgColor: "Yellow" }),
            style(message, { color: "Yellow" })
        );
    },

    error(message, prefix = 'ERROR') {
        console.error(
            style(prefix, { bgColor: "Red" }),
            style(message, { color: "Red" })
        );
    },

    success(message, prefix = 'SUCCESS') {
        console.log(
            style(prefix, { bgColor: "Green", color: "White" }),
            style(message, { color: "Green" })
        );
    }
}

export default logger;
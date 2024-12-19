import 'dotenv/config';

function fontColorList(text) {
    return {
        Black:   `\x1b[30m ${text} \x1b[0m`,
        Red:     `\x1b[31m ${text} \x1b[0m`,
        Green:   `\x1b[32m ${text} \x1b[0m`,
        Yellow:  `\x1b[33m ${text} \x1b[0m`,
        Blue:    `\x1b[34m ${text} \x1b[0m`,
        Magenta: `\x1b[35m ${text} \x1b[0m`,
        Cyan:    `\x1b[36m ${text} \x1b[0m`,
        White:   `\x1b[37m ${text} \x1b[0m`,
    };
}

function bgColorList(text) {
    return {
        Black:   `\x1b[40m ${text} \x1b[0m`,
        Red:     `\x1b[41m ${text} \x1b[0m`,
        Green:   `\x1b[42m ${text} \x1b[0m`,
        Yellow:  `\x1b[43m ${text} \x1b[0m`,
        Blue:    `\x1b[44m ${text} \x1b[0m`,
        Magenta: `\x1b[45m ${text} \x1b[0m`,
        Cyan:    `\x1b[46m ${text} \x1b[0m`,
        White:   `\x1b[47m ${text} \x1b[0m`,
    };
}

export default function style(text, options) {
    const { bgColor, color } = options;
    if(process.env.COLORED_LOGS !== "true") {
        return text;
    }

    if(bgColor)
        return bgColorList(text)?.[bgColor] || text;
    if(color)
        return fontColorList(text)?.[color] || text;

    console.log(process.env.COLORED_LOGS)
} 

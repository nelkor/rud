const months = [
    'января',
    'февраля',
    'марта',
    'апреля',
    'мая',
    'июня',
    'июля',
    'августа',
    'сентября',
    'октября',
    'ноября',
    'декабря',
];

const parse = ymd => {
    ymd = String(ymd);

    return [
        ymd.slice(6, 8),
        ymd.slice(4, 6),
        ymd.slice(0, 4),
    ];
};

const rudDigits = (ymd, glue = '.') => parse(ymd).join(glue);

const rudString = (ymd, writeYear = true) => {
    const arr = parse(ymd);
    const result = [+arr[0], months[arr[1] - 1]];

    if (writeYear) result.push(arr[2]);

    return result.join(' ');
};

const rudInterval = (d1, d2) => {
    const arr1 = parse(d1);
    const arr2 = parse(d2);

    const first = [];

    if (arr1[2] != arr2[2]) first.unshift(arr1[2]);
    if (first.length || arr1[1] != arr2[1]) first.unshift(months[arr1[1] - 1]);
    if (first.length || arr1[0] != arr2[0]) first.unshift(+arr1[0]);

    return [first.join(' '), rudString(d2)].filter(a => a).join(' — ');
};

module.exports = {
    rudDigits,
    rudString,
    rudInterval,
};

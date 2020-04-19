const { rudDigits, rudString, rudInterval } = require('../dist/index.common');

describe('digits', () => {
    test('should be defined', () => {
        expect(rudDigits).toBeDefined();
    });

    test('should read numeric ymd', () => {
        expect(rudDigits(19900419)).toBe('19.04.1990');
        expect(rudDigits(12401103)).toBe('03.11.1240');
        expect(rudDigits(30470913)).toBe('13.09.3047');
    });

    test('should read string ymd', () => {
        expect(rudDigits('18610131')).toBe('31.01.1861');
        expect(rudDigits('20000225')).toBe('25.02.2000');
        expect(rudDigits('20110707')).toBe('07.07.2011');
    });

    test('should work with custom glue', () => {
        expect(rudDigits(19920517, '/')).toBe('17/05/1992');
        expect(rudDigits(12401103, '-')).toBe('03-11-1240');
        expect(rudDigits(30470913, '')).toBe('13093047');
    });
});

describe('string', () => {
    test('should be defined', () => {
        expect(rudString).toBeDefined();
    });

    test('should read numeric ymd', () => {
        expect(rudString(19900419)).toBe('19 апреля 1990');
        expect(rudString(12401103)).toBe('3 ноября 1240');
        expect(rudString(30470913)).toBe('13 сентября 3047');
    });

    test('should read string ymd', () => {
        expect(rudString('18610131')).toBe('31 января 1861');
        expect(rudString('20000225')).toBe('25 февраля 2000');
        expect(rudString('20110707')).toBe('7 июля 2011');
    });

    test('should work without year', () => {
        expect(rudString(20041230, false)).toBe('30 декабря');
        expect(rudString(20050320, false)).toBe('20 марта');
        expect(rudString(30540806, false)).toBe('6 августа');
    });
});

describe('interval', () => {
    test('should be defined', () => {
        expect(rudInterval).toBeDefined();
    });

    test('should correctly format different years', () => {
        expect(rudInterval(20100101, 20110101))
            .toBe('1 января 2010 — 1 января 2011');
    });

    test('should correctly format different months', () => {
        expect(rudInterval(20120101, 20120201))
            .toBe('1 января — 1 февраля 2012');
    });

    test('should correctly format different days', () => {
        expect(rudInterval(20130701, 20130721)).toBe('1 — 21 июля 2013');
    });

    test('should correctly format equal dates', () => {
        expect(rudInterval(20151111, 20151111)).toBe('11 ноября 2015');
    });
});

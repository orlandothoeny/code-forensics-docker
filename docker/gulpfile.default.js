var codeForensics = require('code-forensics');

var dateTimeSpanDays = 365;
var dateFrom = new Date();
dateFrom.setDate(dateFrom.getDate() - dateTimeSpanDays);
var dateFromAsString = dateFrom.toISOString().split('T')[0];
console.info('Using dateFrom: ' + dateFromAsString);

var dateToAsString = (new Date()).toISOString().split('T')[0];
console.info('Using dateTo: ' + dateToAsString);

codeForensics.configure(
    {
        repository: {
            rootPath: '/var/www/repo',
            // Example for only including PHP files: "includePaths: ['**/*.php'],"
            excludePaths: [
                'var',
                'vendor',
                'node_modules',
                '.idea'
            ]
        },
        tmpDir: '/var/www/repo/var/code-forensics/tmp',
        outputDir: '/var/www/repo/var/code-forensics/output',
        dateFormat: 'YYYY-MM-DD'
    },
    {
        dateFrom: dateFromAsString,
        dateTo: dateToAsString,
        minWordCount: 1,
        maxCoupledFiles: 20
    }
);
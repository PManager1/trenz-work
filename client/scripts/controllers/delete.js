if (stdin.isTTY) {
    stdin.setRawMode(true);
    stdin.setEncoding('utf8');
    stdout.write('\u000A>Bienvenido\u000A');

    process.stdin.setEncoding('utf8');

    process.stdin.on('readable', function() {
        var chunk = process.stdin.read();
        if (chunk !== null) {
            process.stdout.write('data: ' + chunk);
        }
    });


    if (stdin.isTTY) {
        stdin.setRawMode(true);
        stdin.setEncoding('utf8');
        process.stdin.setEncoding('utf8');
    };

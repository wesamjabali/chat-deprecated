function importAll (r) {
    window.Mutators = {};

    r.keys().forEach(path => {
        let file = path.replace('./', '').replace('.js', '');

        if(file.startsWith('_')) {
            return;
        }

        window.Mutators[file] = require(`./../resources/api/mutators/${file}`).default;

    });
}

importAll(require.context('./../resources/api/mutators', false, /\.js$/)); //

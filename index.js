exports.yargs = {
    command: 'captcha [options] <file>',
    describe: 'list contributors and credits',

    builder: {
        numbers: {
            type: 'boolean',
            alias: 'n',
            describe: 'Only crack numbers'
        }
    },

    handler: (argv) => {
        const fs = require('fs')
        const tesseractJs = require('tesseract.js')

        const options = {}

        if (argv.numbers) {
            options.tessedit_char_whitelist = '01234567890'
        }

        try {
            if (fs.statSync(argv.file).isDirectory()) {
                throw new Error(`${argv.file} must be a file`)
            }
        } catch (e) {
            console.error(e.message || err)

            process.exit(1)
        }

        tesseractJs.recognize(argv.file)
            .then((result) => {
                console.log(result.text)

                process.exit(0)
            })
            .catch((err) => {
                console.error(err.message || err)

                process.exit(1)
            })
    } 
}

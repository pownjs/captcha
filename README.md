[![Follow on Twitter](https://img.shields.io/twitter/follow/pownjs.svg?logo=twitter)](https://twitter.com/pownjs)

# Pown Captcha

Pown.js tool for cracking captcha based on Tesseract.js.

## Getting Started

From the same directory as your project's package.json, install this module with the following command:

```sh
$ npm install pown-captcha --save
```

Once that's done, you can invoke pown captcha like this:

```sh
$ ./node_modules/.bin/pown captcha
```

If installed globally you can invoke the tool like this:

```sh
$ pown-captcha
```

Otherwise you can invoke the command via Pown.js distribution:

```sh
$ pown captcha
```

## Wish List

Needless to say, this is a very basic tool that takes direct advantage of Tesseract.js. The following featres are welcome.

* [ ] More Tesseract.js options
* [ ] Training mode
* [ ] Crack a whole dir of captchas
* [ ] Crack captcha using scripts
* [ ] Pown.js module support for transforms
* [ ] Built-in known captcha cracking strategies

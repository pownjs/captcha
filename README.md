# pown-captcha  [![Gitter](https://img.shields.io/gitter/room/nwjs/nw.js.svg)](https://gitter.im/pownjs/Lobby)

> Pown.js tool for cracking captcha

## Quickstart

From the same directory as your project's package.json, install this module with the following command:

```sh
$ npm install pown-captcha --save
```

Once that's done, you can invoke pown captcha like this:

```sh
$ ./node_modules/.bin/pown captcha
```

If installed globally or as part of Pown.js distribution invoke like this:

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

# vue-amp-shadow

[![Build Status](https://travis-ci.org/yukagil/vue-amp-shadow.svg?branch=master)](https://travis-ci.org/yukagil/vue-amp-shadow)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

# Installation
[![NPM](https://nodei.co/npm/vue-amp-shadow.png)](https://nodei.co/npm/vue-amp-shadow/)

Package is installable via NPM
```
npm install --save vue-amp-shadow
```
or via Yarn
```
yarn add vue-amp-shadow
```


# Usage
## 1. Include Shadow AMP in the <head> of your page
```html
<head>
  ...
  <script async src="https://cdn.ampproject.org/shadow-v0.js"></script>
  ...
</head>
```
[learn more](https://www.ampproject.org/docs/guides/pwa-amp/amp-in-pwa#include-"shadow-amp"-in-your-progressive-web-app)

## 2. Mount with component

```js
import VueAmpShadow from "vue-amp-shadow";

export default {
  ...
  components: {
    VueAmpShadow
  }
  ...
};
```

```html
<!--
  Set "src" prop to an AMP document URL.
  If it's on a different domain, it must be CORS enabled.
-->
<vue-amp-shadow src="https://ampbyexample.com"></vue-amp-shadow>
```
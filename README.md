# UserAgentChecker
Detect the Browser and Device from the UserAgent String

## Description

The simple Browser Detection library that parses User Agents and detects browser names, browser versions, and devices (desktop, tablet, mobile, touch, ios, etc.).
It also automatically adds the result of the detection as class names of `<html>` tag of the browser view.

----

ブラウザのUserAgentを調べて、ユーザーのブラウザ名・バージョン・デバイスの種類を判定し、`<html>` タグにクラス名として判定結果を付加するJavaScriptライブラリです。


## Usage

Import `userAgentChecker.js` or `userAgentChecker.min.js` in your HTML.

    <script type="text/javascript" src="/path/to/userAgentChecker.min.js"></script>

Result Example (The result of the detection will be automatically added to the class property of `<html>`):

    <html class="safari iphone mobile touch modern ">


To use the detection result in your own js code, you can access via the global variable `_uac`.

    <script>
      console.log(_uac.browser);       // returns browser name - ie. chrome, safari, ie10, edge, iemobile, etc.
      console.log(_uac.device);       // returns device name  - ie. iphone, ipad, android, windows_phone
      console.log(_uac.isiOS);        // returns if it's ios (boolean)
      console.log(_uac.isMobile);     // returns if it's a mobile device (boolean)
      console.log(_uac.isTablet);     // returns if it's a tablet device (boolean)
      console.log(_uac.isTouch);      // returns if it's a touch device (boolean)
      console.log(_uac.isModern);     // returns if it's a modern browser (boolean)
    </script>


## Changelog

### 0.1.0 (2017-02-26)
* Initial Release


## Copyright Information
Copyright 2017 Mitsuki Fukunaga.

License is a MIT Style License included in this repo.

// -------------------------------------------------------------------------------
// User Agent Checker
// -------------------------------------------------------------------------------

+(function() {

  const ua = window.navigator.userAgent.toLowerCase()
  const ver = window.navigator.appVersion.toLowerCase()

  window._uac = {
    getBrowser () {
      let browser = ''

      if (ua.indexOf('edge') !== -1) browser = 'edge'
      else if (ua.indexOf("iemobile") !== -1)      browser = 'iemobile'
      else if (ua.indexOf('trident/7') !== -1)     browser = 'ie11'
      else if (ua.indexOf("msie") !== -1 && ua.indexOf('opera') === -1) {
        if      (ver.indexOf("msie 6.")  !== -1) browser = 'ie6'
        else if (ver.indexOf("msie 7.")  !== -1) browser = 'ie7'
        else if (ver.indexOf("msie 8.")  !== -1) browser = 'ie8'
        else if (ver.indexOf("msie 9.")  !== -1) browser = 'ie9'
        else if (ver.indexOf("msie 10.") !== -1) browser = 'ie10'
      }
      else if (ua.indexOf('chrome')  !== -1 && ua.indexOf('edge') === -1)   browser = 'chrome'
      else if (ua.indexOf('safari')  !== -1 && ua.indexOf('chrome') === -1) browser = 'safari'
      else if (ua.indexOf('opera')   !== -1) browser = 'opera'
      else if (ua.indexOf('firefox') !== -1) browser = 'firefox'
      else browser = 'unknown_browser'

      return browser
    },
    getDevice () {
      let device = ''

      if (ua.indexOf('iphone') !== -1 || ua.indexOf('ipod') !== -1 ) device = 'iphone'
      else if (ua.indexOf('ipad')    !== -1) device = 'ipad'
      else if (ua.indexOf('android') !== -1) device = 'android'
      else if (ua.indexOf('windows') !== -1 && ua.indexOf('phone') !== -1) device = 'windows_phone'
      else device = ''

      return device
    },
    getIosVer () {
      if ( /iP(hone|od|ad)/.test( navigator.platform ) ) {
        const v = (navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/)
        const versions = [parseInt(v[1], 10), parseInt(v[2], 10), parseInt(v[3] || 0, 10)]
        return versions[0]
      }
      else return 0
    }

  }

  _uac.browser = _uac.getBrowser()
  _uac.device = _uac.getDevice()
  _uac.iosVer = _uac.getIosVer()
  _uac.isIE = (_uac.browser.substr(0, 2) === 'ie' && _uac.browser !== 'iemobile')
  _uac.isiOS = (_uac.device === 'iphone' || _uac.device === 'ipad')
  _uac.isAndroid = _uac.device === 'android'
  _uac.isMobile = (ua.indexOf('mobi') !== -1 || _uac.device === 'iphone' || (_uac.device === 'windows_phone' && ua.indexOf('wpdesktop') === -1) || _uac.device === 'iemobile')
  _uac.isTablet = (_uac.device === 'ipad' || (_uac.device === 'android' && !_uac.isMobile))
  _uac.isTouch = ('ontouchstart' in window)
  _uac.isModern = !(_uac.browser === 'ie6' || _uac.browser === 'ie7' || _uac.browser === 'ie8' || _uac.browser === 'ie9' || (0 < _uac.iosVer && _uac.iosVer < 8))

  // Set the results as class names of the html
  const homeClass = () => {
    let classStr = ' ';
    classStr += (_uac.browser !== '') ? _uac.browser + " " : 'browser-unknown ',
      classStr += (_uac.device  !== '') ? _uac.device + " "  : 'device-unknown ',
      classStr += (_uac.isMobile) ? 'mobile ' : 'desktop ',
      classStr += (_uac.isTouch) ? 'touch '  : 'mouse ',
      classStr += (_uac.isiOS) ? 'ios ' : '',
      classStr += (_uac.isAndroid) ? 'android ' : '',
      classStr += (_uac.isIE) ? 'ie ' : '',
      classStr += (_uac.isModern) ? 'modern ' : 'old ';
    return classStr;
  };

  document.addEventListener('DOMContentLoaded', function() {
    document.documentElement.className += homeClass()
  });

})();

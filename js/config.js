// App specific configuration
var testnet = localStorage.getItem('testnet') == 'true' ? true : false, //change to false to use main net
    bitcoinValidationRegexMainnet = "^[13][a-km-zA-HJ-NP-Z1-9]{25,34}$",
    bitcoinValidationRegexTestnet = "^[2mn][a-km-zA-HJ-NP-Z1-9]{25,34}$",
    bitcoinValidationRegex = testnet ? bitcoinValidationRegexTestnet : bitcoinValidationRegexMainnet;

module.exports = {
  
  testnet: testnet,

  bitcoinValidationRegex: bitcoinValidationRegex,
  
  keyShortcutPrefix: window.navigator.platform === 'MacIntel' ? '&#8984;' : 'Ctrl+',
  
  keyShortcuts: {
    undo:            'z',
    discover:        'd',
    myPage:          'h',
    customizePage:   'e',
    create:          'n',
    purchases:       't',
    sales:           'y',
    cases:           'j',
    settings:        'g',
    addressBar:      'l',
    save:            's',
    restart:         'r'
  },
  
  setTestnet: function(testNetBoolean){
    localStorage.setItem('testnet', testNetBoolean);
  }
};
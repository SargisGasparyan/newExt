Ext.define('ext__lessons.Application', {
  extend: 'Ext.app.Application',
  name: 'ext__lessons',
  requires: ['ext__lessons.*'],
  defaultToken: 'homeview',

  removeSplash: function () {
    Ext.getBody().removeCls('launching')
    var elem = document.getElementById('splash')
    elem.parentNode.removeChild(elem)
  },

  launch: function () {
    this.removeSplash()
    var whichView = 'Extra'
    Ext.Viewport.add([{ xtype: whichView }])
  },

  onAppUpdate: function () {
    Ext.Msg.confirm(
      'Application Update',
      'This application has an update, reload?',
      function (choice) {
        if (choice === 'yes') {
          window.location.reload()
        }
      },
    )
  },
})

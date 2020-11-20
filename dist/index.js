/*!
 * name: @jswork/next-gm-storage
 * description: Storage implement for GM tampermonkey.
 * homepage: https://github.com/afeiship/next-gm-storage
 * version: 1.0.0
 * date: 2020-11-20 16:47:35
 * license: MIT
 */

(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@jswork/next');
  var NxAbstractStorage = nx.AbstractStorage || require('@jswork/next-abstract-storage');
  var NxGmStoreEngine = nx.GmStoreEngine || require('@jswork/next-gm-store-engine');

  var NxGmStorage = nx.declare('nx.GmStorage', {
    extends: NxAbstractStorage,
    methods: {
      init: function (inPrefix) {
        this.base({
          engine: NxGmStoreEngine,
          prefix: inPrefix || ''
        });
      },
      serialize: function (inTarget) {
        return inTarget;
      },
      keys: function () {
        return GM_listValues();
      }
    }
  });

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxGmStorage;
  }
})();
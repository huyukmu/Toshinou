/*
Created by Freshek on 07.10.2017
*/

class AssetRemovedHandler {
  constructor(a) {
    this._handler = function(e) {
      var parsedCmd = JSON.parse(e.detail);

      if (parsedCmd.hash == a.targetBoxHash) {
        a.targetBoxHash = null;
      }

      if (parsedCmd.hash in window.boxes) {
        delete window.boxes[parsedCmd.hash];
      }
    }
  }

  get handler() {
    return this._handler;
  }
}

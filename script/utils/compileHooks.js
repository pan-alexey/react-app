'use strict';

const outputMessage = require('./compileConsole');

class compileHooks {
  ready = false;
  compillers = {};
  serverPort = null;

  console() {
    outputMessage({
      compillers: this.compillers,
      ready: this.ready,
      serverPort: this.serverPort,
    });
  }

  compileBegin(name) {
    this.compillers[name] = false;
    this.console();
  }

  checkCompillersStats() {
    for (const key in this.compillers) {
      const compiller = this.compillers[key];

      if (!compiller || compiller.hasErrors()) {
        return false;
      }
    }
    return true;
  }

  compileEnd(name, stats) {
    this.compillers[name] = stats;

    if (!this.ready && this.checkCompillersStats() && this.serverPort) {
      this.ready = true;
      // TODO OPEN BROWSER
    }

    this.console();
  }

  regiserPort(port) {
    this.serverPort = parseInt(port, 10);
  }

  regiserCompiller(name, compiler) {
    this.compileBegin(name);

    compiler.hooks.invalid.tap('invalid', () => {
      this.compileBegin(name);
    });

    compiler.hooks.done.tap('done', (stats) => {
      this.compileEnd(name, stats);
    });
  }
}

module.exports = new compileHooks();

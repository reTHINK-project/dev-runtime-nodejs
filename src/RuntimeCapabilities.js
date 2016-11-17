// TODO: import and extend the class of the service-framework
// service-framework/dist/RuntimeCapabilities;

class RuntimeCapabilities {

  constructor(storageManager) {
    if (!storageManager) throw new Error('The Runtime Capabilities need the storageManager');

    this.storageManager = storageManager;
  }

  /**
   * Returns as a promise RuntimeCapabilities json object with all available capabilities of the runtime.
   * If it was not yet persisted in the Storage Manager it collects all required info from the platform and saves in the storage manager.
   * @returns {Promise<object>}
   */
  getRuntimeCapabilities() {

    return new Promise((resolve, reject) => {

      Promise.all([this._getEnvironment()]).then((result) => {
        let capabilities = {};
        result.forEach((capability) => {
          Object.assign(capabilities, capability);
        });

        this.storageManager.set('capabilities', '1', capabilities);

        resolve(capabilities);
      }).catch((error) => {
        reject(error);
      });

    });

  }

  /**
   * returns as a promise a boolean according to available capabilities.
   * @returns {Promise<boolean>}
   */
  isAvailable(capability) {
    return new Promise((resolve) => {

      this.storageManager.get('capabilities').then((capabilities) => {

        console.log('Capability ' + capability + ' is available? ', capabilities.hasOwnProperty(capability) && capabilities[capability]);
        if (capabilities.hasOwnProperty(capability) && capabilities[capability]) {
          resolve(true);
        } else {
          resolve(false);
        }
      });

    });
  }

  /**
   * it refreshes previously collected capabilities and updates the storage manager
   */
  update() {
    return new Promise((resolve, reject) => {
      this.getRuntimeCapabilities().then(resolve).catch(reject);
    });
  }

  // TODO: organize the code in separated files
  _getEnvironment() {

    // TODO: this should be more effective and check the environment
    try {
      return {
        browser: !!(window && navigator),
        node: !!!(window && navigator)
      };
    } catch(error) {
      return {
        browser: false,
        node: true
      };
    }
  }

}

export default RuntimeCapabilities;

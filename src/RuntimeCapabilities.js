/**
* Copyright 2016 PT Inovação e Sistemas SA
* Copyright 2016 INESC-ID
* Copyright 2016 QUOBIS NETWORKS SL
* Copyright 2016 FRAUNHOFER-GESELLSCHAFT ZUR FOERDERUNG DER ANGEWANDTEN FORSCHUNG E.V
* Copyright 2016 ORANGE SA
* Copyright 2016 Deutsche Telekom AG
* Copyright 2016 Apizee
* Copyright 2016 TECHNISCHE UNIVERSITAT BERLIN
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
**/

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
        console.log('this._getEnvironment()s: ', this._getEnvironment());

        result.forEach((capability) => {
          Object.assign(capabilities, capability);
        });

        console.log('capabilities: ', capabilities);
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
      }).catch((error) => {
        console.error('Error has occured while checking capability, reason:', error);
        reject(error);
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
        node: !!!(window && navigator)
      };
    } catch(error) {
      return {
        node: true
      };
    }
  }
}

export default RuntimeCapabilities;
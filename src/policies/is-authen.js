'use strict';

/**
 * `is-authen` policy
 */

module.exports = (policyContext, config, { strapi }) => {
    // Add your own logic here.
    strapi.log.info('In is-authen policy.');

    const canDoSomething = true;

    if (canDoSomething) {
      return true;
    }

    return false;
};

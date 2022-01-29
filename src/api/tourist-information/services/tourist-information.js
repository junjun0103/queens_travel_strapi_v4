'use strict';

/**
 * tourist-information service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::tourist-information.tourist-information');

"use strict";

const Customer = use("Customer");

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

class FindCustomer {
  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {Function} next
   */
  async handle({ request, response, params }, next) {
    const { id } = params;
    const customer = await Customer.find(id);

    if (!customer) {
      return response.status(404).json({
        message: "Not Found",
        id,
      });
    }

    if (request.method() === "GET" || request.method() === "DELETE") params.customer = customer;
    else request.body.customer = customer;

    await next();
  }
}

module.exports = FindCustomer;

/* tslint:disable */
/* eslint-disable */
/**
 * FastAPI
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from "../runtime.js";
import type { ApplicationSummary } from "./ApplicationSummary.js";
import {
  ApplicationSummaryFromJSON,
  ApplicationSummaryFromJSONTyped,
  ApplicationSummaryToJSON,
} from "./ApplicationSummary.js";

/**
 *
 * @export
 * @interface ApplicationResponse
 */
export interface ApplicationResponse {
  /**
   *
   * @type {ApplicationSummary}
   * @memberof ApplicationResponse
   */
  applicationSummary: ApplicationSummary;
}

/**
 * Check if a given object implements the ApplicationResponse interface.
 */
export function instanceOfApplicationResponse(value: object): boolean {
  let isInstance = true;
  isInstance = isInstance && "applicationSummary" in value;

  return isInstance;
}

export function ApplicationResponseFromJSON(json: any): ApplicationResponse {
  return ApplicationResponseFromJSONTyped(json, false);
}

export function ApplicationResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): ApplicationResponse {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    applicationSummary: ApplicationSummaryFromJSON(json["applicationSummary"]),
  };
}

export function ApplicationResponseToJSON(
  value?: ApplicationResponse | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    applicationSummary: ApplicationSummaryToJSON(value.applicationSummary),
  };
}
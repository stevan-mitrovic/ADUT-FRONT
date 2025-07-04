import { TMunicipality } from "@/types/municipality";

/**
 * Maps raw API user response data to a structured frontend-friendly format.
 *
 * @function MunicipalityResponseMapper
 * @param {any} data - The raw municipality data received from the API.
 * @returns {Object} A mapped municipality object with default values for missing fields.
 */
export function MunicipalityResponseMapper(data: any): TMunicipality {
  return {
    id: data?.id || null,
    name: data?.name || "",
  };
}

/**
 * Recursively maps an array of raw municipality data into structured `TMunicipality` objects.
 *
 * @function mapCategories
 * @param {any} municipalities - The raw municipality list from the backend.
 * @returns {TMunicipality[]} The structured municipality list.
 */
export function mapMunicipalities(municipalities: any[]): TMunicipality[] {
  return municipalities.map((municipality) =>
    MunicipalityResponseMapper(municipality)
  );
}
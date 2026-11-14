# Extraction Report

## Scope reviewed

17/17 provided screen nodes were rendered and included. Frame reference: 402 × 874 px.

## Extracted

- 22 MCP raster images.
- 63 MCP SVG icons/vectors.
- 47 original image fills from the Figma REST endpoint.
- 2 resolved variable font payloads.
- 17 Figma-rendered PNG screenshots.
- 134 inventory records total.

## Validation

- Every inventory path was checked against a real file.
- Every SVG was XML-parsed.
- Every PNG/JPG was decoded with Pillow.
- Fonts were checked as non-empty font payloads.
- Screen/resource relationships are direct from MCP contexts or marked `not_recovered`; no relation was invented.

## Not recovered

1. **Complete editable page/layer tree:** Figma REST returned HTTP 400 `File type not supported by this endpoint` for both file and nodes endpoints. Manual method: open the source file in Figma Desktop and use **File → Save local copy (.fig)**.
2. **Local variables and variable modes:** API returned HTTP 403 because the provided token lacks `file_variables:read`. Manual method: create a new token with that scope or inspect **Local variables** in Figma and export collections.
3. **Full-screen SVG renders:** the image endpoint returned HTTP 200 but null URLs for all 17 full-screen SVG requests. Individual vector assets supplied by MCP are included and validated.
4. **Nested properties for 8 screens:** their MCP design contexts were delivered inline rather than as downloadable source resources. Their assets, screenshots, node IDs, fonts and available mappings are included; missing nested properties are marked rather than inferred.
5. **Unmapped original image fills:** 6 fills could not be reliably associated by perceptual identity to an MCP image and remain in `01_IMAGES/other` with `mappingStatus: not_recovered`.
6. **Prototype interactions:** Figma MCP returned zero defined interactions for each of the 17 screen nodes.
7. **Published components/styles:** official endpoints returned zero published components, zero component sets and zero published styles. Repeated visual layer names are listed separately as detected patterns, not presented as published components.

No application code, dependencies or installation files are included. No missing resource was replaced or invented.

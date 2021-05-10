import * as functions from "firebase-functions";

export const helloWorldCF = functions.https.onRequest(async (request, response): Promise<void> => {
    functions.logger.info("Starting helloWorldCF", { structureData: true });
    // get data from request.query, request.body

    response.set("Access-Control-Allow-Origin", "*");
    response.set("Content-Type", "application/json");

    response.json({
        ok: true,
        data: 5,
    });
});

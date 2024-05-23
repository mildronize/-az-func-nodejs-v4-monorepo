import { app, input } from "@azure/functions";

const blobInput = input.storageBlob({
  connection: "AzureWebJobsStorage",
  path: "demo-input/xxx.txt",
});

const blobOutput = input.storageBlob({
  connection: "AzureWebJobsStorage",
  path: "demo-output/xxx-{rand-guid}.txt",
});

export const copyBlob = app.http("copyBlob", {
  methods: ["GET"],
  authLevel: "function",
  extraInputs: [blobInput],
  extraOutputs: [blobOutput],
  handler: async (request, context) => {
    context.log(`Http function processed request for url "${request.url}"`);
    const blobData = context.extraInputs.get(blobInput);
    context.log(`Blob data: ${blobData}`);
    context.extraOutputs.set(blobOutput, blobData);
    return { body: "Copy Blob Completed" };
  },
});

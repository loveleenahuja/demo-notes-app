import { Api } from "@serverless-stack/resources";

export function MyStack({ stack }) {
  //create a http api
  const api = new Api(stack, "api", {
    routes: {
      "GET /": "functions/lambda.handler",
    },
  });
  //show endpoint as output
  stack.addOutputs({
    ApiEndpoint: api.url,
  });
}

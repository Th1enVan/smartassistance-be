import { APIGatewayProxyEventV2 } from "aws-lambda";

export const hello = (event: APIGatewayProxyEventV2) => {
  console.log(event);

  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify({
      message: "Response from Workspace service",
      data: {},
    }),
  };
};

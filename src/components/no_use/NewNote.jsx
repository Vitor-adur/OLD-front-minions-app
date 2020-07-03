import { API } from "aws-amplify";

export default function createNote(note) {
    return API.post("notes", "/notes", {
        body: note
    });
}

//dados do que tinha feito, dados da ARN precisam ser re-checados se isso for ser usado novamente.
/*{
  "Version": "2012-10-17",
  "Id": "default",
  "Statement": [
    {
      "Sid": "minions-app-api-prod-CreateLambdaPermissionApiGateway-J4PHKL141P6E",
      "Effect": "Allow",
      "Principal": {
        "Service": "apigateway.amazonaws.com"
      },
      "Action": "lambda:InvokeFunction",
      "Resource": "arn:aws:lambda:us-east-1:691449041176:function:minions-app-api-prod-create",
      "Condition": {
        "ArnLike": {
          "AWS:SourceArn": "arn:aws:execute-api:us-east-1:691449041176:jrlaysz2mb/*/

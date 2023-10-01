#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "aws-cdk-lib";
import { WebsiteStack } from "../lib/website-stack";

const getEnvOrThrow = (envName: string): string => {
  const envValue = process.env[envName];
  if (!envValue) {
    throw new Error(`environment variable ${envName} has not been set`);
  }

  return envValue;
};

const app = new cdk.App();
new WebsiteStack(app, "website-stack", {
  env: {
    account: getEnvOrThrow("AWS_ACCOUNT_ID"),
    region: "us-east-1",
  },
});

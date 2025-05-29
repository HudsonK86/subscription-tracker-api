import { Client as WorkflowClient } from "@upstash/workflow";
import { Redis } from "@upstash/redis";
import { QSTASH_TOKEN, QSTASH_URL, UPSTASH_REDIS_REST_URL, UPSTASH_REDIS_REST_TOKEN } from "./env.js";

export const redis = new Redis({
    url: UPSTASH_REDIS_REST_URL,
    token: UPSTASH_REDIS_REST_TOKEN,
});

export const workflowClient = new WorkflowClient({
    baseUrl: QSTASH_URL,
    token: QSTASH_TOKEN,
    redis,
});
import arcjet, { shield, detectBot, tokenBucket } from "@arcjet/node";
import { ARCJET_KEY, ARCJET_ENV } from "./env.js";

// Check if we're in development mode
const isDevelopment = ARCJET_ENV === 'development';

const aj = arcjet({
    key: ARCJET_KEY,
    characteristics: ["ip.src"],
    rules: [
        shield({ 
            mode: isDevelopment ? "DRY_RUN" : "LIVE" 
        }),
        detectBot({
            mode: isDevelopment ? "DRY_RUN" : "LIVE", // This will only log in development mode
            allow: [
                "CATEGORY:SEARCH_ENGINE",
                "CATEGORY:MONITOR",    
                "CATEGORY:TOOL",       // Allow Postman and similar tools
                "CATEGORY:PREVIEW"     
            ],
        }),
        tokenBucket({
            mode: isDevelopment ? "DRY_RUN" : "LIVE",
            refillRate: 5,
            interval: 10,
            capacity: 10,
        }),
    ],
});

// Add this log to verify the mode
console.log(`Arcjet Environment: ${ARCJET_ENV}`);
console.log(`Arcjet Mode: ${isDevelopment ? "DRY_RUN" : "LIVE"}`);

export default aj;
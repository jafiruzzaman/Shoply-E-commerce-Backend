/**
 * @copyright 2026 Mohammad-Jafiruzzaman
 * @version 1.0.0
 * @file index.ts
 */

/*================================================ Node Modules ================================================*/
import type { Server } from "node:http";
import process from "node:process";

/*================================================ Custom Modules ================================================*/
import { connectDB, disConnectDB } from "@database/database";
import { app } from "app";
import { env } from "@config/env.config";

/*================================================ Variables ================================================*/
let server: Server;

/*================================================ Bootstrap Function ================================================*/
const bootStrap = async () => {
  try {
    // 1️⃣ Connect Database
    await connectDB();
    console.log("✅ Database Connected");

    // 2️⃣ Start Server
    server = app.listen(env.port, () => {
      console.log(`🚀 Shoply is running at http://localhost:${env.port}`);
    });
  } catch (error) {
    if (error instanceof Error) {
      console.error(`❌ Error while starting server: ${error.message}`);
      process.exit(1); // Exit with error
    }
  }
};

/*================================================ Graceful Shutdown ================================================*/
const shutDown = async () => {
  try {
    console.log("\n🛑 Shutdown signal received, closing server...");

    // 1️⃣ Stop accepting new connections
    if (server) {
      server.close(() => {
        console.log("✅ HTTP server closed");
      });
    }

    // 2️⃣ Disconnect Database
    await disConnectDB();
    console.log("✅ Database disconnected");

    process.exit(0); // Success exit
  } catch (error) {
    if (error instanceof Error) {
      console.error(`❌ Error during shutdown: ${error.message}`);
      process.exit(1);
    }
  }
};

/*================================================ Handle Shutdown Signals ================================================*/
// Handle Ctrl+C
process.on("SIGINT", shutDown);

// Handle `kill` command
process.on("SIGTERM", shutDown);

/*================================================ Start Server ================================================*/
bootStrap();

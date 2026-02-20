/**
 * @copyright 2026 Mohammad-Jafiruzzaman
 * @version 1.0.0
 * @file database.ts
 */

/*================================================ Node Modules ================================================*/
import mongoose from "mongoose";

/*================================================ Custom Modules ================================================*/
import { env } from "@config/env.config";

type db_state = "disconnected" | "connecting" | "connected";
/*================================================ Export ConnectDB ================================================*/
let state: db_state = "disconnected";
export const connectDB = async (): Promise<void> => {
  if (state === "connecting" || state === "connected") {
    return;
  }
  state = "connecting";
  try {
    mongoose.set("strictQuery", true);
    const conn = await mongoose.connect(env.mongodb_uri, {
      dbName: env.db_name,
      autoIndex: env.node_env === "development",
      maxPoolSize: 10,
      serverSelectionTimeoutMS: 5000,
    });
    state = "connected";
    console.log(`✅ MongoDB Connected.${conn.connection.host}`);
  } catch (error) {
    state = "disconnected";
    if (error instanceof Error) {
      console.error("❌ MongoDB Connection Failed ", error.message);
      process.exit(1);
    }
  }
};

/*================================================ Export DisConnectDB ================================================*/
export const disConnectDB = async () => {
  if (state === "disconnected") {
    return;
  }
  try {
    await mongoose.connection.close();
    state = "disconnected";
    console.log(`🔴 Mongodb Disconnected`);
  } catch (error) {
    if (error instanceof Error) {
      console.error("❌ Found Error while Disconnect", error.message);
    }
  }
};

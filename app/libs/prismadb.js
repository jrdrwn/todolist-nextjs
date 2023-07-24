import { PrismaClient } from "@prisma/client";

require("dotenv").config();

const client = globalThis.prisma || new PrismaClient();
if (process.env.NODE_ENV === "development") globalThis.prisma = client;

export default client;

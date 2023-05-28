#!/usr/bin/env node

/* eslint-disable no-console */

import { existsSync } from "fs";
import minimist from "minimist";
import path from "path";
import { version } from "../package.json";

process.on("unhandledRejection", (err) => {
  throw err;
});

const args = minimist(process.argv.slice(2), {
  boolean: ["version", "help"],
  alias: { v: "version", h: "help" },
});

if (args.version) {
  console.log(version);
  process.exit(0);
}

const failedToFindCmd =
  args._.length === 0 ||
  !args._.find((arg) => ["build", "start"].includes(arg));
if (args.help || failedToFindCmd) {
  console.log(`
Usage: donkeyclip-server <command> [options]

Commands:
  build      Build the bundle.
  start      Start the bundle.

Options:
  --version, -v  Print the version number.
  --help, -h     Print this help.
  --path, -p     Path to the entry point.
`);
  process.exit(failedToFindCmd ? 1 : 0);
}

if (args._.includes("start")) {
  const file = args._.find((arg) => existsSync(arg)) || "index";

  const module = await import("./commands/start");

  module.default(path.join(process.cwd(), file));
}

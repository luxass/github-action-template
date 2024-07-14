import * as core from "@actions/core";

async function run(): Promise<void> {

}

run().catch((err) => {
  console.error(err);
  core.setFailed(err);
});

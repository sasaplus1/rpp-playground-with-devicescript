import { delay } from "@devicescript/core";
import { schedule, setStatusLight } from "@devicescript/runtime";

export async function execute() {
  await setStatusLight(0x000000);

  schedule(async () => {
    // green
    await setStatusLight(0x00ff00);
    await delay(500);
    // off
    await setStatusLight(0x000000);
    await delay(500);
  }, {
    timeout: 0,
    interval: 500
  });
}

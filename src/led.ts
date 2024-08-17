import { pins } from '@dsboard/pico';
import { startLightBulb } from "@devicescript/servers";
import { delay } from "@devicescript/core";
import { schedule } from "@devicescript/runtime";

export async function execute() {
  const led = startLightBulb({
    pin: pins.GP16
  });

  await led.intensity.write(0);

  schedule(async () => {
    await led.intensity.write(
      await led.intensity.read() > 0 ? 0 : 1
    );
    await delay(500);
  }, {
    timeout: 0,
    interval: 500
  });
}

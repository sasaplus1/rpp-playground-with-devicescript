import { pins } from '@dsboard/pico';
import { configureHardware } from "@devicescript/servers";
import { schedule } from '@devicescript/runtime';
import { i2c } from '@devicescript/i2c';

export function execute() {
  configureHardware({
    i2c: {
      pinSDA: pins.GP0,
      pinSCL: pins.GP1,
      inst: 0,
      kHz: 1000 // 1MHz / 後述のSSD1306に合わせただけでもっと低くていい気はする
    }
  });

  let prev: number | undefined = undefined;

  schedule(async () => {
    const buf = await i2c.readRegBuf(0x36, 0x0C, 2);
    const angle = (buf[0] << 8) | buf[1];
    const degree = ((angle / 4096) * 360) | 0;

    if (prev !== undefined && prev !== degree) {
      console.log('degree', degree);
    }

    prev = degree;
  }, {
      timeout: 0,
      interval: 16
  });
}

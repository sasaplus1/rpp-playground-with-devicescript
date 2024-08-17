import { pins } from '@dsboard/pico';
import { SSD1306Driver, startCharacterScreenDisplay } from "@devicescript/drivers"
import { configureHardware } from "@devicescript/servers";
import { schedule } from '@devicescript/runtime';
import { i2c } from '@devicescript/i2c';

export async function execute() {
  configureHardware({
    i2c: {
      pinSDA: pins.GP0,
      pinSCL: pins.GP1,
      inst: 0, // なくても動作したので不要？I2C0を指定しているつもりだがこのフィールド自体optionalだし違うのかも
      kHz: 1000 // 1MHz
    }
  });

  const ssd1306 = new SSD1306Driver({
    devAddr: 0x3C,
    externalVCC: false, // 3.3V
    width: 128,
    height: 64,
  });
  const screen = await startCharacterScreenDisplay(
    ssd1306,
    {
      rows: 64,
      columns: 128
    }
  );

  let i = 0;

  schedule(async ({counter, elapsed, delta}) => {
    await screen.message.write(
      `i: ${i++}\n` +
      `counter: ${counter}\n` +
      `elapsed: ${elapsed}\n` +
      `delta: ${delta}`
    );
  }, {
    timeout: 0,
    interval: 500
  });
}

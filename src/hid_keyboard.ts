import { pins } from '@dsboard/pico';
import {
  delay,
  HidKeyboardAction,
  HidKeyboardModifiers,
  HidKeyboardSelector,
} from "@devicescript/core"
import { schedule } from '@devicescript/runtime';
import { startButton, startHidKeyboard } from "@devicescript/servers";

export function execute() {
  const keyboard = startHidKeyboard({});

  const button1 = startButton({ pin: pins.GP2 });
  const button2 = startButton({ pin: pins.GP3 });
  const button3 = startButton({ pin: pins.GP4 });
  const button4 = startButton({ pin: pins.GP5 });
  const button5 = startButton({ pin: pins.GP6 });
  const button6 = startButton({ pin: pins.GP7 });
  const button7 = startButton({ pin: pins.GP8 });

  button1.down.subscribe(async () => { await keyboard.key(HidKeyboardSelector.A, HidKeyboardModifiers.None, HidKeyboardAction.Down); });
  button1.up.subscribe(async () => { await keyboard.key(HidKeyboardSelector.A, HidKeyboardModifiers.None, HidKeyboardAction.Up); });
  button2.down.subscribe(async () => { await keyboard.key(HidKeyboardSelector.B, HidKeyboardModifiers.None, HidKeyboardAction.Down); });
  button2.up.subscribe(async () => { await keyboard.key(HidKeyboardSelector.B, HidKeyboardModifiers.None, HidKeyboardAction.Up); });
  button3.down.subscribe(async () => { await keyboard.key(HidKeyboardSelector.C, HidKeyboardModifiers.None, HidKeyboardAction.Down); });
  button3.up.subscribe(async () => { await keyboard.key(HidKeyboardSelector.C, HidKeyboardModifiers.None, HidKeyboardAction.Up); });
  button4.down.subscribe(async () => { await keyboard.key(HidKeyboardSelector.D, HidKeyboardModifiers.None, HidKeyboardAction.Down); });
  button4.up.subscribe(async () => { await keyboard.key(HidKeyboardSelector.D, HidKeyboardModifiers.None, HidKeyboardAction.Up); });
  button5.down.subscribe(async () => { await keyboard.key(HidKeyboardSelector.E, HidKeyboardModifiers.None, HidKeyboardAction.Down); });
  button5.up.subscribe(async () => { await keyboard.key(HidKeyboardSelector.E, HidKeyboardModifiers.None, HidKeyboardAction.Up); });
  button6.down.subscribe(async () => { await keyboard.key(HidKeyboardSelector.F, HidKeyboardModifiers.None, HidKeyboardAction.Down); });
  button6.up.subscribe(async () => { await keyboard.key(HidKeyboardSelector.F, HidKeyboardModifiers.None, HidKeyboardAction.Up); });
  button7.down.subscribe(async () => { await keyboard.key(HidKeyboardSelector.G, HidKeyboardModifiers.None, HidKeyboardAction.Down); });
  button7.up.subscribe(async () => { await keyboard.key(HidKeyboardSelector.G, HidKeyboardModifiers.None, HidKeyboardAction.Up); });
}

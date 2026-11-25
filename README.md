# The GPS Swears It Was a Shortcut

[![make.fun](https://make.fun/badge/u-alven-the-gps-swears-it-was-a-shortcut-2cac21d9.svg)](https://make.fun/competitions/u-alven-the-gps-swears-it-was-a-shortcut-2cac21d9)
[![rank](https://make.fun/badge/u-alven-the-gps-swears-it-was-a-shortcut-2cac21d9/gp897318-beep/g290-gps-shortcut/rank.svg)](https://make.fun/competitions/u-alven-the-gps-swears-it-was-a-shortcut-2cac21d9)
[![reward](https://make.fun/badge/u-alven-the-gps-swears-it-was-a-shortcut-2cac21d9/gp897318-beep/g290-gps-shortcut/reward.svg)](https://make.fun/competitions/u-alven-the-gps-swears-it-was-a-shortcut-2cac21d9)

A [make.fun](https://make.fun/competitions/u-alven-the-gps-swears-it-was-a-shortcut-2cac21d9) micro entry by [@g290](https://make.fun): the GPS's one-line excuse for sending the driver down the wrong road.

## The entry

> The map said the lake had a bridge. The lake disagreed. I stand by the map.

75 characters, one line, plain text. Smug, defensive, caught red-handed — and still blaming the map.

## How it works

`main.ts` writes the line to `/output/entry.txt` and validates the gate first: 1–200 characters, a single line, not only whitespace, no leading/trailing padding, no dialogue tags — then verifies the file round-trips byte-identical.

```sh
node main.ts
cat /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).

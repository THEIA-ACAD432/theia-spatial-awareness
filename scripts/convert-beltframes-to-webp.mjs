import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const ROOT = process.cwd();
const INPUT_DIR = path.join(ROOT, "src", "assets", "BeltFrames");
const OUTPUT_DIR = path.join(ROOT, "src", "assets", "BeltFramesWebp");

function frameNumber(fileName) {
  const m = fileName.match(/\.([0-9]+)\.png$/i);
  return m ? parseInt(m[1], 10) : Number.POSITIVE_INFINITY;
}

async function main() {
  await fs.mkdir(OUTPUT_DIR, { recursive: true });

  const entries = (await fs.readdir(INPUT_DIR)).filter((f) => f.toLowerCase().endsWith(".png"));
  entries.sort((a, b) => frameNumber(a) - frameNumber(b));

  if (entries.length === 0) {
    throw new Error(`No PNGs found in ${INPUT_DIR}`);
  }

  let converted = 0;
  for (const file of entries) {
    const inPath = path.join(INPUT_DIR, file);
    const outFile = file.replace(/\.png$/i, ".webp");
    const outPath = path.join(OUTPUT_DIR, outFile);

    await sharp(inPath)
      // Lossless is largest; quality 70-80 is typically a big win.
      .webp({ quality: 76 })
      .toFile(outPath);

    converted++;
    if (converted % 25 === 0) {
      process.stdout.write(`Converted ${converted}/${entries.length}\n`);
    }
  }

  process.stdout.write(`Done. Converted ${converted} frames to ${OUTPUT_DIR}\n`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});


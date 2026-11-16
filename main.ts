import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outputDir, { recursive: true });
// Preserve the same image bytes on every run.
copyFileSync(new URL('./entry.png', import.meta.url), join(outputDir, 'entry.png'));

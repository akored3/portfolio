import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

// Favicon: the ready-to-work avatar round-cropped at render time, replacing
// the stock create-next-app icon. The source PNG is read-only and embedded
// untouched.
export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default async function Icon() {
  const avatar = await readFile(
    join(process.cwd(), "public", "newavatar_ready.png"),
  );

  return new ImageResponse(
    (
      // eslint-disable-next-line @next/next/no-img-element -- satori renders this JSX to a PNG; next/image cannot run inside ImageResponse
      <img
        alt=""
        src={`data:image/png;base64,${avatar.toString("base64")}`}
        width={64}
        height={64}
        style={{ borderRadius: 9999, objectFit: "cover" }}
      />
    ),
    size,
  );
}

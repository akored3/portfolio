import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { site } from "@/lib/site";

// The card WhatsApp/Twitter/LinkedIn render when the site's link is shared:
// dark site background, glow-green accent, the ready-to-work avatar (his
// read-only asset, embedded as-is) and the open-to-work message.
export const alt = `${site.name} | ${site.role}, open to work`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  // Static-instance WOFF, not the site's variable WOFF2: satori (behind
  // ImageResponse) cannot parse WOFF2 containers.
  const [avatar, syne] = await Promise.all([
    readFile(join(process.cwd(), "public", "newavatar_ready.png")),
    readFile(join(process.cwd(), "src", "fonts", "syne-latin-800-normal.woff")),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 72,
          backgroundColor: "#0d1311",
          backgroundImage:
            "radial-gradient(circle at 30% 10%, rgba(0,229,133,0.14), rgba(13,19,17,0) 55%)",
          fontFamily: "Syne",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element -- satori renders this JSX to a PNG; next/image cannot run here */}
        <img
          alt=""
          src={`data:image/png;base64,${avatar.toString("base64")}`}
          width={300}
          height={300}
          style={{
            borderRadius: 9999,
            border: "10px solid #1f2924",
            objectFit: "cover",
          }}
        />
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 680 }}>
          {/* Two explicit lines, mirroring the hero: satori otherwise breaks
              the hyphenated first name onto its own line. */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 64,
              fontWeight: 800,
              color: "#ffffff",
              letterSpacing: "-0.03em",
              lineHeight: 1.05,
            }}
          >
            <div style={{ whiteSpace: "nowrap" }}>{site.heroFirstLine}</div>
            <div style={{ whiteSpace: "nowrap" }}>{site.heroSecondLine}</div>
          </div>
          <div
            style={{
              marginTop: 26,
              fontSize: 34,
              fontWeight: 800,
              color: "#e6e0d4",
            }}
          >
            {site.role}
          </div>
          <div
            style={{
              marginTop: 22,
              display: "flex",
              alignItems: "center",
              gap: 14,
            }}
          >
            <div
              style={{
                width: 16,
                height: 16,
                borderRadius: 9999,
                backgroundColor: "#00e585",
              }}
            />
            <div style={{ fontSize: 28, fontWeight: 800, color: "#00e585" }}>
              Open to work
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [{ name: "Syne", data: syne, weight: 800, style: "normal" }],
    },
  );
}

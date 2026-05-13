import { ImageResponse } from "next/og";
import { DATA } from "@/data/resume";
import { readFileSync } from "fs";
import { join } from "path";

export const dynamic = "force-static";

export const alt = DATA.name;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  let fontData: ArrayBuffer | null = null;
  try {
    fontData = readFileSync(
      join(process.cwd(), "public/fonts/ClashDisplay-Semibold.ttf")
    ).buffer as ArrayBuffer;
  } catch {
    // font loading failure is non-fatal
  }

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-end",
          backgroundColor: "#ffffff",
          padding: "60px",
        }}
      >
        <div
          style={{
            fontSize: "56px",
            fontWeight: "600",
            color: "#000000",
            lineHeight: "1.1",
            marginBottom: "16px",
            letterSpacing: "-0.02em",
          }}
        >
          {DATA.name}
        </div>
        <div
          style={{
            fontSize: "24px",
            color: "#404040",
            lineHeight: "1.5",
          }}
        >
          {DATA.description}
        </div>
      </div>
    ),
    {
      ...size,
      fonts: fontData
        ? [{ name: "Clash Display", data: fontData, weight: 600, style: "normal" }]
        : undefined,
    }
  );
}

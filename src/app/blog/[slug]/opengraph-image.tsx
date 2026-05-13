import { ImageResponse } from "next/og";
import { allPosts } from "content-collections";
import { readFileSync } from "fs";
import { join } from "path";

export const dynamic = "force-static";

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post._meta.path.replace(/\.mdx$/, ""),
  }));
}

export const alt = "Blog Post";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  let fontData: ArrayBuffer | null = null;
  try {
    fontData = readFileSync(
      join(process.cwd(), "public/fonts/ClashDisplay-Semibold.ttf")
    ).buffer as ArrayBuffer;
  } catch {
    // non-fatal
  }

  const { slug } = await params;
  const post = allPosts.find(
    (p) => p._meta.path.replace(/\.mdx$/, "") === slug
  );
  const title = post?.title ?? "Blog Post";
  const description = post?.summary ?? "";

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
            fontSize: "52px",
            fontWeight: "600",
            color: "#000000",
            lineHeight: "1.1",
            marginBottom: "16px",
            letterSpacing: "-0.02em",
            maxWidth: "1000px",
          }}
        >
          {title}
        </div>
        {description && (
          <div style={{ fontSize: "22px", color: "#404040", maxWidth: "900px" }}>
            {description}
          </div>
        )}
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

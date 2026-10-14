import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const alt = `${site.name} — ${site.role}`;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          backgroundColor: "#ffffff",
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <div
            style={{
              width: "14px",
              height: "14px",
              borderRadius: "50%",
              backgroundColor: "#58cc02",
            }}
          />
          <span
            style={{
              fontSize: "22px",
              fontWeight: 700,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#2c7700",
            }}
          >
            Grab Safety
          </span>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <h1
            style={{
              fontSize: "80px",
              fontWeight: 700,
              color: "#2a2a2a",
              lineHeight: 1.05,
              margin: 0,
            }}
          >
            {site.name}
          </h1>
          <p
            style={{
              fontSize: "32px",
              color: "#666666",
              lineHeight: 1.35,
              margin: 0,
              maxWidth: "960px",
            }}
          >
            {site.role}. {site.headline}
          </p>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "2px solid #e5e5e5",
            paddingTop: "28px",
            fontSize: "22px",
            color: "#666666",
          }}
        >
          <span>{site.location}</span>
          <span style={{ color: "#2c7700" }}>{site.url.replace(/^https?:\/\//, "")}</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}

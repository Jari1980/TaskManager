import { Outlet } from "react-router-dom";

interface AuthLayoutProps {
  bottomLink?: { text: string; to: string };
}

export default function AuthLayout({ bottomLink }: AuthLayoutProps) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        background: "var(--bg)", // use CSS variable
      }}
    >
      <div
        style={{
          width: 320,
          padding: 32,
          borderRadius: 8,
          display: "flex",
          flexDirection: "column",
          gap: 16,
        }}
      >
        <Outlet />
        {bottomLink && (
          <div style={{ textAlign: "center" }}>
            <a href={bottomLink.to}>{bottomLink.text}</a>
          </div>
        )}
      </div>
    </div>
  );
}
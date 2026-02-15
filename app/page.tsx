import Link from "next/link";

export default function Home() {
  return (
    <div style={{ maxWidth: "900px", margin: "0 auto", padding: "60px 20px", fontFamily: "system-ui, -apple-system, sans-serif", textAlign: "center" }}>
      <h1>TROYBLAZ Legal Documents</h1>
      <p style={{ fontSize: "18px", color: "#666", marginBottom: "40px" }}>
        Welcome to TROYBLAZ – Your trading platform and content distribution service.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "30px", maxWidth: "600px", margin: "0 auto" }}>
        <Link href="/terms" style={{
          padding: "40px 20px",
          border: "2px solid #007acc",
          borderRadius: "8px",
          textDecoration: "none",
          color: "#007acc",
          transition: "all 0.3s ease",
          backgroundColor: "#f0f7ff"
        }}>
          <h2 style={{ marginTop: 0 }}>Terms of Service</h2>
          <p style={{ color: "#666" }}>Review our terms and conditions</p>
        </Link>

        <Link href="/privacy" style={{
          padding: "40px 20px",
          border: "2px solid #28a745",
          borderRadius: "8px",
          textDecoration: "none",
          color: "#28a745",
          transition: "all 0.3s ease",
          backgroundColor: "#f0fff4"
        }}>
          <h2 style={{ marginTop: 0 }}>Privacy Policy</h2>
          <p style={{ color: "#666" }}>Learn how we protect your data</p>
        </Link>
      </div>

      <div style={{ marginTop: "60px", padding: "20px", backgroundColor: "#f5f5f5", borderRadius: "8px" }}>
        <h3>Questions?</h3>
        <p>Contact us at:</p>
        <p><strong>legal@troyblaz.com</strong> | <strong>privacy@troyblaz.com</strong></p>
      </div>
    </div>
  );
}

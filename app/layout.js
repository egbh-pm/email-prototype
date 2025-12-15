export const metadata = {
  title: "Email Prototype",
  description: "A simple prototype to collect an email.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  );
}

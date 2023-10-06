import "./globals.css";

export const metadata = {
  title: "Survey Creator",
  description: "A survey creator, manager, and data organizer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-quicksand">{children}</body>
    </html>
  );
}

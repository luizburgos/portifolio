import { Inter, Space_Grotesk } from "next/font/google";
import Navbar from "../components/Navbar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const grotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-grotesk" });

export const metadata = {
  title: "Luiz Burgos | Portfólio",
  description: "Currículo e portfólio de Luiz Henrique Burgos de Souza",
};

const themeScript = `
  try {
    var t = localStorage.getItem("theme") ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    document.documentElement.setAttribute("data-theme", t);
  } catch (e) {}
`;

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning className={`${inter.variable} ${grotesk.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <Navbar />
        <main className="container">{children}</main>
        <footer className="footer">
          <div className="container">
            © {new Date().getFullYear()} Luiz Henrique Burgos de Souza · Feito com Next.js
          </div>
        </footer>
      </body>
    </html>
  );
}
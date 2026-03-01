import type { Metadata } from "next";
import { Bricolage_Grotesque, Geist } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const philosopher = Bricolage_Grotesque({
    subsets: ["latin"],
    weight: ["400"],
    variable: "--font-philosopher",
    display: "swap",
});

const geist = Geist({
    subsets: ["latin"],
    variable: "--font-geist",
    display: "swap",
});

export const metadata: Metadata = {
    metadataBase: new URL("https://dikewisdom.com"),
    title: {
        default: "Dike Wisdom — Full-Stack Developer & Infrastructure Engineer",
        template: "%s | Dike Wisdom",
    },
    description:
        "Full-stack web developer, infrastructure engineer, and technical lead specializing in React, Next.js, Node.js, Go, and cloud infrastructure. Based in Lagos, Nigeria.",
    keywords: [
        "Dike Wisdom",
        "Full-Stack Developer",
        "Infrastructure Engineer",
        "React",
        "Next.js",
        "Node.js",
        "Go",
        "AWS",
        "Lagos Nigeria",
    ],
    authors: [{ name: "Dike Wisdom" }],
    creator: "Dike Wisdom",
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://dikewisdom.com",
        siteName: "Dike Wisdom",
        title: "Dike Wisdom — Full-Stack Developer & Infrastructure Engineer",
        description:
            "Full-stack web developer, infrastructure engineer, and technical lead. Building scalable applications with modern technologies.",
        images: [{ url: "/logo.png", width: 1200, height: 630 }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Dike Wisdom — Full-Stack Developer",
        description:
            "Full-stack web developer & infrastructure engineer based in Lagos, Nigeria.",
        creator: "@veedsify",
        images: ["/images/og-image.png"],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: { index: true, follow: true },
    },
    icons: {
        icon: "/logo.svg",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en"
            className={`scroll-smooth ${philosopher.variable} ${geist.variable}`}
            suppressHydrationWarning
        >
            <head>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark');
                  }
                } catch(e) {}
              })();
            `,
                    }}
                />
            </head>
            <body className="prose prose-gray max-w-none font-sans bg-white dark:bg-gray-950 transition-colors duration-300">
                <ThemeProvider>{children}</ThemeProvider>
            </body>
        </html>
    );
}

import type { Metadata } from "next";
import Main from './Header'
export const metadata: Metadata = {
    title: "ProtfolioGen",
    description: "A no-code portfolio generator that lets users input details and instantly preview and deploy a personal site.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="absolute inset-0">
            {children}
        </div>
    );
}

import { Lexend, Inter } from "next/font/google";

const lexend = Lexend({
  subsets: ["latin-ext"],
});

const inter = Inter({
  subsets: ["latin-ext"],
});

export const fonts = {
    lexend: lexend.className,
    inter: inter.className
}
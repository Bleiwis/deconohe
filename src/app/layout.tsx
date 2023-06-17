"use client";
import "./globals.css";
import { darkTheme } from "./theme/";
import { ThemeProvider, CssBaseline, Container } from "@mui/material";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <title>Deconohe</title>
        <meta name="description" content="Generated by create next app" />
      </head>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Container component="body" maxWidth="lg">
          {children}
        </Container>
      </ThemeProvider>
    </html>
  );
}

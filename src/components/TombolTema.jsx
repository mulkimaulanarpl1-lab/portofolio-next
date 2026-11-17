
"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function TombolTema() {
  useEffect(() => {
    if (localStorage.getItem("tema") === "gelap") {
      document.documentElement.classList.add("dark");
    }
  }, []);

  function gantiTema() {
    const gelap = document.documentElement.classList.toggle("dark");

    localStorage.setItem("tema", gelap ? "gelap" : "terang");
  }

  return (
    <Button
      variant="outline"
      onClick={gantiTema}
      className="border-white bg-transparent text-white hover:bg-aksen hover:text-white"
    >
      <span className="dark:hidden">Mode Gelap</span>
      <span className="hidden dark:inline">Mode Terang</span>
    </Button>
  );
}

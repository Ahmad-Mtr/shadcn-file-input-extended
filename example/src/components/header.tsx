"use client";

import React from "react";
import { ModeToggle } from "./mode-toggle";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Github } from "lucide-react";

function Header() {
  return (
    <header className="w-full border-b bg-background shadow-sm">
      <div className="container mx-auto flex items-center justify-between py-2 px-6">
        <Link href="/" className="text-xl font-bold tracking-tight">
          ShadCN File Input
        </Link>

        <div className="flex items-center gap-4">
          <Link
            href="https://github.com/vikramsamak/shadcn-file-input"
            target="_blank"
          >
            <Button variant="ghost" size="icon" className="rounded-full">
              <Github />
            </Button>
          </Link>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}

export default Header;

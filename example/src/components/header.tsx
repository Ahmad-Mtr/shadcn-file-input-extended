"use client";

import React from "react";
import { ModeToggle } from "./mode-toggle";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function Header() {
  return (
    <header className="w-full border-b bg-background shadow-sm">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold tracking-tight">
          ShadCN File Input
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link
            href="#features"
            className="text-sm font-medium hover:underline"
          >
            Features
          </Link>
          <Link href="#docs" className="text-sm font-medium hover:underline">
            Docs
          </Link>
          <Link
            href="https://github.com/vikramsamak/shadcn-file-input"
            target="_blank"
          >
            <Button variant="outline">GitHub</Button>
          </Link>
        </nav>

        {/* Theme Toggle */}
        <ModeToggle />
      </div>
    </header>
  );
}

export default Header;

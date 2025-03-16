"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Link2, UserCircle } from "lucide-react";
import { ModeToggle } from "@/components/mode-toggle";
import { useWallet } from "@/components/providers/wallet-provider";
import { truncateAddress } from "@/lib/utils";

export function Navigation() {
  const pathname = usePathname();
  const { address, connect } = useWallet();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Link2 className="h-6 w-6" />
            <span className="font-bold">LedgerLink</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link
              href="/apply"
              className={cn(
                "transition-colors hover:text-foreground/80",
                pathname.startsWith("/apply")
                  ? "text-foreground"
                  : "text-foreground/60"
              )}
            >
              Apply
            </Link>
            <Link
              href="/claim"
              className={cn(
                "transition-colors hover:text-foreground/80",
                pathname === "/claim" ? "text-foreground" : "text-foreground/60"
              )}
            >
              Claim/Pay
            </Link>
            <Link
              href="/about"
              className={cn(
                "transition-colors hover:text-foreground/80",
                pathname === "/about" ? "text-foreground" : "text-foreground/60"
              )}
            >
              About
            </Link>
            <Link
              href="/profile"
              className={cn(
                "transition-colors hover:text-foreground/80",
                pathname === "/profile"
                  ? "text-foreground"
                  : "text-foreground/60"
              )}
            >
              Profile
            </Link>
          </nav>
        </div>
        <div className="ml-auto flex items-center space-x-4">
          <ModeToggle />
          {address ? (
            <Link href="/profile">
              <Button variant="outline">
                <UserCircle className="mr-2 h-4 w-4" />
                {truncateAddress(address)}
              </Button>
            </Link>
          ) : (
            <Button onClick={connect}>Connect Wallet</Button>
          )}
        </div>
      </div>
    </header>
  );
}
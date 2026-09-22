"use client";

import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Image as ImageIcon,
  FileText,
  Beer,
  Utensils,
  Calendar,
  Settings,
  LogOut,
  Menu,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

const NAV_GROUPS = [
  {
    label: "CAFE",
    items: [
      {
        name: "Cafe Content",
        href: "/admin/content?experience=CAFE",
        icon: FileText,
      },
      {
        name: "Cafe Photos",
        href: "/admin/media?experience=CAFE",
        icon: ImageIcon,
      },
      {
        name: "Cafe Menu",
        href: "/admin/menu?experience=CAFE",
        icon: Utensils,
      },
    ],
  },
  {
    label: "THE BREW HOUSE",
    items: [
      {
        name: "Brew House Content",
        href: "/admin/content?experience=BREW_HOUSE",
        icon: FileText,
      },
      {
        name: "Beer Photos",
        href: "/admin/media?experience=BREW_HOUSE",
        icon: ImageIcon,
      },
      { name: "Brews", href: "/admin/brews", icon: Beer },
      {
        name: "Brew House Menu",
        href: "/admin/menu?experience=BREW_HOUSE",
        icon: Utensils,
      },
    ],
  },
  {
    label: "SHARED",
    items: [
      { name: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
      { name: "Reservations", href: "/admin/reservations", icon: Calendar },
      { name: "Settings", href: "/admin/settings", icon: Settings },
      { name: "Media Library", href: "/admin/media", icon: ImageIcon },
    ],
  },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen bg-zinc-100 flex">
      {/* Sidebar */}
      <aside
        className={cn(
          "bg-zinc-900 text-zinc-400 w-64 flex-shrink-0 transition-all duration-300 border-r border-zinc-800 flex flex-col",
          !isSidebarOpen && "-ml-64",
        )}
      >
        <div className="p-6 flex items-center justify-between border-b border-zinc-800">
          <Image
            src="/media/logo.webp"
            alt="Sol The Brew House admin"
            width={64}
            height={64}
          />
          <button onClick={() => setIsSidebarOpen(false)} className="md:hidden">
            <X size={20} />
          </button>
        </div>

        <nav className="flex-1 p-4 space-y-8 overflow-y-auto">
          {NAV_GROUPS.map((group) => (
            <div key={group.label} className="space-y-2">
              <p className="px-3 text-[10px] uppercase tracking-[0.2em] font-bold text-zinc-500 mb-2">
                {group.label}
              </p>
              <div className="space-y-1">
                {group.items.map((item) => {
                  const isActive = pathname.startsWith(item.href.split("?")[0]);
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={cn(
                        "flex items-center gap-3 px-3 py-2 rounded-md transition-colors text-sm font-medium",
                        isActive
                          ? "bg-primary text-primary-foreground"
                          : "hover:bg-zinc-800 hover:text-zinc-200",
                      )}
                    >
                      <item.icon size={18} />
                      {item.name}
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </nav>

        <div className="p-4 border-t border-zinc-800">
          <Link
            href="/admin/login"
            className="flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium text-zinc-400 hover:bg-zinc-800 hover:text-zinc-200 transition-colors"
          >
            <LogOut size={18} />
            Logout
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        <header className="h-16 bg-white border-b border-zinc-200 flex items-center justify-between px-6">
          <button
            onClick={() => setIsSidebarOpen(true)}
            className={cn(
              "p-2 text-zinc-600 hover:bg-zinc-100 rounded-md transition-colors",
              isSidebarOpen && "hidden",
            )}
          >
            <Menu size={20} />
          </button>
          <div className="flex items-center gap-4">
            <span className="text-sm text-zinc-500 font-medium">
              Admin Mode
            </span>
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-xs font-bold">
              AD
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-6">{children}</main>
      </div>
    </div>
  );
}

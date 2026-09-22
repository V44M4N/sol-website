"use client";

import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Auth logic will be implemented here
    window.location.href = "/admin/dashboard";
  };

  return (
    <div className="min-h-screen bg-zinc-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white border border-zinc-200 shadow-sm p-8">
        <div className="text-center mb-8">
          <Image
            src="/media/logo.webp"
            alt="Sol The Brew House admin"
            width={96}
            height={96}
            className="mx-auto mb-4"
          />
          <p className="text-zinc-500 text-sm">
            Enter your credentials to access the dashboard
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-widest text-zinc-500 font-medium">
              Email Address
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-zinc-50 border border-zinc-200 p-3 text-sm outline-none focus:border-primary transition-colors"
              placeholder="admin@solbrewhouse.com"
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-widest text-zinc-500 font-medium">
              Password
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-zinc-50 border border-zinc-200 p-3 text-sm outline-none focus:border-primary transition-colors"
              placeholder="••••••••"
            />
          </div>
          <Button variant="primary" className="w-full rounded-none py-4">
            Sign In
          </Button>
        </form>

        <div className="mt-8 text-center">
          <Link
            href="/"
            className="text-xs text-zinc-400 hover:text-zinc-600 transition-colors uppercase tracking-widest"
          >
            Return to Public Site
          </Link>
        </div>
      </div>
    </div>
  );
}

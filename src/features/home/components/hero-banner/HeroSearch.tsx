"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function HeroSearch() {
  const [query, setQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <form
      onSubmit={handleSearch}
      className="relative flex items-center w-full max-w-lg bg-white rounded-xl shadow-lg shadow-slate-200/50 border border-slate-100 p-1.5 transition-all focus-within:ring-2 focus-within:ring-emerald-500/20 focus-within:border-emerald-500"
    >
      <Input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for services, categories..."
        className="h-11 sm:h-12 border-0 bg-transparent text-sm sm:text-base text-slate-800 placeholder:text-slate-400 focus-visible:ring-0 shadow-none px-4"
      />
      <Button
        type="submit"
        size="icon"
        variant="ghost"
        aria-label="Search services"
        className="size-10 sm:size-11 rounded-lg text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50 shrink-0 cursor-pointer transition-colors"
      >
        <Search className="size-5 stroke-[2.5]" />
      </Button>
    </form>
  );
}

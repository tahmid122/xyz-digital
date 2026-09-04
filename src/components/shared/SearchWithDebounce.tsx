"use client";

import { Input } from "@/components/ui/input";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Search, X } from "lucide-react";

const SearchWithDebounce = ({ name = "search" }: { name?: string }) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const paramValue = searchParams.get(name) || "";
  const [searchQuery, setSearchQuery] = useState(paramValue);

  // Sync internal state when URL parameter changes (e.g. on Reset Filters)
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setSearchQuery(paramValue);
  }, [paramValue]);

  useEffect(() => {
    const timer = setTimeout(() => {
      const currentParam = searchParams.get(name) || "";
      const trimmedValue = searchQuery.trim();

      if (trimmedValue === currentParam) return;

      const params = new URLSearchParams(searchParams.toString());
      if (trimmedValue) {
        params.set(name, trimmedValue);
      } else {
        params.delete(name);
      }

      // Reset page to 1 on new search
      params.delete("page");

      const queryString = params.toString();
      const url = queryString ? `${pathname}?${queryString}` : pathname;

      router.replace(url);
    }, 500);

    return () => clearTimeout(timer);
  }, [searchQuery, name, pathname, router, searchParams]);

  const handleClear = () => {
    setSearchQuery("");
    const params = new URLSearchParams(searchParams.toString());
    params.delete(name);
    params.delete("page");
    const queryString = params.toString();
    const url = queryString ? `${pathname}?${queryString}` : pathname;
    router.replace(url);
  };

  return (
    <div className="relative flex items-center w-full">
      <Search
        className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
        size={16}
      />
      <Input
        placeholder="Search..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full bg-gray-50/50 border border-gray-200 h-10 pl-9 pr-8 text-xs font-medium rounded-xl focus-visible:ring-primary/20 focus-visible:border-primary"
      />
      {searchQuery && (
        <button
          type="button"
          onClick={handleClear}
          className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 p-0.5 rounded-full hover:bg-gray-200/60 transition-colors"
        >
          <X size={14} />
        </button>
      )}
    </div>
  );
};

export default SearchWithDebounce;

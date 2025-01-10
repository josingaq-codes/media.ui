"use client";

import { Input } from "@nextui-org/react";

import { Icon } from "@iconify/react";
import { useState } from "react";

export const Search = () => {
  const [search, setSearch] = useState("");

  return (
    <div
      className={`transition-width ${
        search ? "w-full sm:w-1/2" : "w-3/5 sm:w-1/3"
      }`}
    >
      <Input
        placeholder="Search anything"
        color="primary"
        variant="flat"
        endContent={<Icon icon="solar:magnifer-broken" className="text-2xl" />}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

"use client";

import searchQueries from "@/lib/constant.js";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import Results from "./Results";

export default function SearchBox() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState(null);
  const [currentPage, setCurrentPage] = useState(1); // Add state for current page
  const [itemsPerPage] = useState(10); // Set items per page

  const router = useRouter();

  const fetchResults = async (searchQuery, page = 1) => {
    try {
      const response = await fetch(
        `https://hackathon-z4ug.onrender.com/api/search?item=${encodeURIComponent(
          searchQuery
        )}&page=${page}&items_per_page=${itemsPerPage}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const data = await response.json();
      setResults(data);
      setCurrentPage(page); // Update the current page
    } catch (error) {
      console.error("Error fetching results:", error);
    }
  };

  const handleItemClick = (selectedQuery) => {
    setQuery(selectedQuery);
    fetchResults(selectedQuery, 1); // Reset to first page on new search
  };

  const handlePageChange = (page) => {
    fetchResults(query, page);
  };

  return (
    <div className="flex flex-col">
      <Command className="rounded-lg border shadow-md mt-0 sm:w-full h-60 sm:mt-0 sm:mx-1 sm:max-w-[95vw] md:w-[80vw] md:max-w-[80vw] md:mx-auto xl:w-[40vw] xl:max-w-[60vw] xl:mx-auto">
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            {searchQueries.map((queryItem, index) => (
              <button
                key={index}
                className="contents"
                onClick={() => handleItemClick(queryItem)}
                onKeyDown={(e) =>
                  e.key === "Enter" && handleItemClick(queryItem)
                }
              >
                <CommandItem>
                  <span>{queryItem}</span>
                </CommandItem>
              </button>
            ))}
          </CommandGroup>
        </CommandList>
      </Command>

      {/* Render Results if they exist */}
      {results && (
        <Results
          results={results}
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
}

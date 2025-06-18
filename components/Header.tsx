"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { List, X } from "lucide-react";
import { useRouter } from "next/navigation";

import { Muscle } from "./Muscle";
export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { push } = useRouter();

  return (
    <div className="">
      <div className="flex items-center justify-between p-4 bg-gray-800 text-white">
        <div className="flex items-center gap-4">
          <Button
            className="md:hidden bg-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <X className="text-black" />
            ) : (
              <List className="text-black" />
            )}
          </Button>
          <h1 className="text-[20px] font-bold">Calorie App</h1>
        </div>
        <div className="flex gap-2 items-center">
          <div className="hidden md:flex gap-10">
            <div className="gap-2 flex items-center">
              <Button>Calorie AI</Button>
              <Button>Calorie Tracker</Button>
              <div>
                <Muscle />
              </div>
              <Button>Shop</Button>
              <Button>Contact Us</Button>
            </div>
          </div>
        </div>
        <div className="">
          <Button>Sign in</Button>
        </div>
      </div>

      {menuOpen && (
        <div className="absolute z-50 top-[60px] left-4 w-48 bg-white text-black rounded shadow-md p-4 md:hidden">
          <div className="flex flex-col gap-2">
            <Button variant="ghost" onClick={() => setMenuOpen(false)}>
              Calorie AI
            </Button>
            <Button variant="ghost" onClick={() => setMenuOpen(false)}>
              Calorie Tracker
            </Button>
            <Button variant="ghost" onClick={() => setMenuOpen(false)}>
              Workout Helper
            </Button>
            <Button variant="ghost" onClick={() => setMenuOpen(false)}>
              Shop
            </Button>
            <Button variant="ghost" onClick={() => setMenuOpen(false)}>
              Contact Us
            </Button>
            <Button>Sign in</Button>
          </div>
        </div>
      )}
    </div>
  );
};

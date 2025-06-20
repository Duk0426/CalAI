"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

const muscleGroups = [
  "Chest",
  "Back",
  "Shoulders",
  "Biceps",
  "Triceps",
  "Legs",
  "Abs",
  "Forearms",
  "Calves",
];

export const Muscle = () => {
  const { push } = useRouter();

  const handleSelect = (muscle: string) => {
    push(`workouthelper?muscle=${muscle}`);
  };
  console.log(handleSelect);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild onClick={() => push("/workouthelper")}>
        <Button className=" text-white">Workout Helper</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-gray-800 text-white w-48">
        <div className="font-semibold px-2 py-1 mb-2">Muscle Groups</div>
        {/* {muscleGroups.map((muscle) => (
          <DropdownMenuItem asChild key={muscle}>
            <Button
              variant="ghost"
              className="w-full justify-start"
              onClick={() => handleSelect(muscle)}
            >
              {muscle}
            </Button>
          </DropdownMenuItem>
        ))} */}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

"use client";
import React from "react";
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

const WorkoutHelper = () => {
  const router = useRouter();

  const handleSelect = (muscle: string) => {
    router.push(`workouthelper?muscle=${muscle}`);
  };
  return (
    <div className="flex">
      <div className="flex flex-col">
        <h1>Workout Helper</h1>
        <div>
          {muscleGroups.map((muscle) => (
            <div
              key={muscle}
              onClick={() => handleSelect(muscle)}
              className="flex flex-col p-2 bg-yellow-400 border cursor-pointer hover:bg-yellow-300 transition-colors rounded mb-2 text-center text-black font-semibold"
            >
              {muscle}
            </div>
          ))}
        </div>
      </div>
      <div className="">h</div>
    </div>
  );
};

export default WorkoutHelper;

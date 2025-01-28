"use client";

import React, { useState, useEffect } from "react";

interface ISuperhero {
  name: string;
  superpower: string;
  humbleScore: number;
}

export default function Superhero() {
  const [superheroes, setSuperheroes] = useState<ISuperhero[]>([]);
  const [newHero, setNewHero] = useState<ISuperhero>({
    name: "",
    superpower: "",
    humbleScore: 0,
  });
  // Get superheroes
  useEffect(() => {
    const fetchSuperheroes = async () => {
      try {
        const response = await fetch("http://localhost:3000/superheroes");
        const data = await response.json();
        setSuperheroes(data.superheroes);
        console.log(response);
      } catch (error) {
        console.error("Failed to fetch superheroes:", error);
      }
    };

    fetchSuperheroes();
  }, []);

  // add a superhero
  const handleAddSuperhero = async () => {
    if (!newHero.name || !newHero.superpower || newHero.humbleScore <= 0) {
      alert("Please fill out all fields correctly!");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/superheroes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newHero),
      });

      if (response.ok) {
        const addedHero = await response.json();
        setSuperheroes([...superheroes, addedHero]);
        setNewHero({ name: "", superpower: "", humbleScore: 0 });
      } else {
        console.error("Failed to add superhero");
      }
    } catch (error) {
      console.error("Error while adding superhero:", error);
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Superheroes</h1>

      <table className="table-auto border-collapse border border-gray-300 w-full text-left">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2">Name</th>
            <th className="border border-gray-300 px-4 py-2">Superpower</th>
            <th className="border border-gray-300 px-4 py-2">Humble Score</th>
          </tr>
        </thead>
        <tbody>
          {superheroes.map((hero, index) => (
            <tr key={index}>
              <td className="border border-gray-300 px-4 py-2">{hero.name}</td>
              <td className="border border-gray-300 px-4 py-2">
                {hero.superpower}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {hero.humbleScore}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-8">
        <h2 className="text-xl font-bold mb-4">Add a Superhero</h2>
        <div className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Name"
            className="border px-4 py-2 rounded"
            value={newHero.name}
            onChange={(e) => setNewHero({ ...newHero, name: e.target.value })}
          />
          <input
            type="text"
            placeholder="Superpower"
            className="border px-4 py-2 rounded"
            value={newHero.superpower}
            onChange={(e) =>
              setNewHero({ ...newHero, superpower: e.target.value })
            }
          />
          <input
            type="number"
            placeholder="Humble Score (1-10)"
            className="border px-4 py-2 rounded"
            value={newHero.humbleScore}
            onChange={(e) =>
              setNewHero({ ...newHero, humbleScore: Number(e.target.value) })
            }
          />
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            onClick={handleAddSuperhero}
          >
            Add Superhero
          </button>
        </div>
      </div>
    </div>
  );
}

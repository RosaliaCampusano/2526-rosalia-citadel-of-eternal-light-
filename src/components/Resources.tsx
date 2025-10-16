import React from "react";

export default function Resources({ resource }: any) {
  return (
    <div className="h-[100%] w-[90%] items-center justify-center rounded-xl bg-gray-900">
      <h1 className="pt-5 text-center text-3xl text-amber-600">Resources</h1>
      <h2 className="pt-5 text-center text-3xl text-emerald-700">Storage</h2>
      {
        // --- STORAGE DATA ---
      }
      <div className="ml-150 h-[20%] w-[40%] items-center justify-center rounded-xl bg-cyan-950 outline-2">
        <h1 className="pt-5 text-center text-3xl text-amber-600">Food</h1>
        <p className="pt-5 text-left text-3xl text-emerald-700">
          Type: {resource.storage.food.type}
        </p>
        <p className="pt-5 text-left text-3xl text-emerald-700">
          Quantity: {resource.storage.food.quantity}{" "}
          {resource.storage.food.unit}
        </p>
      </div>
      <div className="mt-2 ml-10 h-[20%] w-[40%] items-center justify-center rounded-xl bg-cyan-950 outline-2">
        <h1 className="pt-5 text-center text-3xl text-amber-600">Water</h1>
        <p className="pt-5 text-left text-3xl text-emerald-700">
          Source: {resource.storage.water.source}
        </p>
        <p className="pt-5 text-left text-3xl text-emerald-700">
          Capacity: {resource.storage.water.capacity}{" "}
          {resource.storage.water.unit}
        </p>
      </div>

      {
        // --- ARMONY DATA ---
      }

      <h3 className="pt-5 text-center text-3xl text-fuchsia-800">Armony</h3>

      <div className="ml-150 h-[20%] w-[40%] items-center justify-center rounded-xl bg-cyan-950 outline-2">
        <h1 className="pt-5 text-center text-3xl text-amber-600">Weapons</h1>
        {resource.armory.weapons.map((item) => {
          return (
            <p className="pt-2 text-center text-2xl text-emerald-700">
              {item.type} - {item.quantity}
            </p>
          );
        })}
      </div>
      <div className="mt-15 ml-10 h-[14%] w-[40%] items-center justify-center rounded-xl bg-cyan-950 outline-2">
        <h1 className="pt-5 text-center text-3xl text-cyan-500">shields</h1>
        {resource.armory.shields.map((item) => {
          return (
            <p className="text-2xll pt-2 text-center text-amber-600">
              {item.type} - {item.quantity}
            </p>
          );
        })}
      </div>
    </div>
  );
}

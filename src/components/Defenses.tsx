import { Card } from "../helpers/Card";

export default function Defenses({ defense }) {
  return (
    <div className="h-full w-full items-center justify-center rounded-xl bg-gray-900">
      <h1 className="text-2 pt-5 text-center text-amber-600">
        Citadel Defenses
      </h1>
      <p className="text-1xl pt-5 text-center text-amber-50">Walls</p>
      <p className="text-1xl pt-5 text-center text-amber-50">
        Materials: {defense.walls.material}
      </p>
      <p className="text-1xl pt-5 text-center text-amber-50">
        Height: {defense.walls.height}
      </p>
      <h1 className="pt-5 text-center text-2xl text-amber-500">Enchantments</h1>
      {defense.walls.enchantments.map((elem) => {
        let level: number = Math.floor((elem.level * 50) / 50);
        return (
          <>
            <p className="text-1xl ml-20 pt-5 text-left text-amber-50">
              {elem.name} ({elem.level})
            </p>
            <div className="ml-10 h-[2%] w-[50%] items-center justify-center bg-gray-500">
              <div
                className={`h-[100%] w-[${level}%] items-center justify-center bg-blue-400`}
              ></div>
            </div>
            ;
          </>
        );
      })}
      <div className="ml-10 h-[1%] w-[90%] items-center justify-center bg-gray-500"></div>
      <h1 className="pt-5 text-center text-2xl text-amber-500">Towers</h1>
      {defense.towers.map((elem) => {
        return <Card tower={elem} />;
      })}
    </div>
  );
}

export const Card = ({ tower }: any) => {
  let progressBarColor: string = "";
  const porcentBar = Math.floor((tower.armament.ammunitionCount * 1000) / 100);

  if (porcentBar <= 250) {
    progressBarColor = "bg-red-500";
  } else if (porcentBar <= 500 && porcentBar > 250) {
    progressBarColor = "bg-amber-500";
  } else if (porcentBar <= 1000 && porcentBar > 500) {
    progressBarColor = "bg-emerald-500";
  }

  return (
    <div className="mt-10 h-[50%] w-[50%] items-center justify-center rounded-xl bg-blue-500">
      <p className="ml-20 pt-5 text-center text-3xl text-amber-50">
        {tower.name}
      </p>
      <p className="ml-20 text-center text-3xl text-amber-50">
        Height: {tower.height}
      </p>
      <p className="ml-20 text-center text-3xl text-amber-500">Armament</p>
      <p className="ml-20 text-center text-3xl text-red-500">
        {tower.armament.weaponType} - {tower.armament.ammunitionType} -{" "}
        {tower.armament.ammunitionCount}
      </p>
      <div className="ml-10 h-[2%] w-[100%] items-center justify-center bg-gray-500">
        <div
          className={`h-[100%] w-[${porcentBar - 100}%] items-center justify-center ${progressBarColor}`}
        ></div>
      </div>
      <h1 className="pt-5 text-center text-4xl text-amber-600">Guards</h1>
      {tower.guards.map((elem: any) => {
        return (
          <p className="pt-5 text-center text-3xl text-amber-50">
            {elem.name} - {elem.rank}
          </p>
        );
      })}
    </div>
  );
};

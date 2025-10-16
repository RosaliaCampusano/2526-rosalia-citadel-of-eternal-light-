export default function Location({ title, location }: any) {
  const nearbyLandmarks = location.nearbyLandmarks.sort(
    (a, b) => a.distance - b.distance,
  );
  return (
    <div className="h-[80%] w-[80%] items-center justify-center rounded-xl bg-gray-900">
      <h1 className="pt-5 text-center text-4xl text-amber-700">{title}</h1>
      <p className="pt-5 text-center text-3xl text-amber-50">Coordinates: </p>
      <p className="pt-5 text-center text-gray-400">
        {location.coordinates.latitude}°,
        {location.coordinates.longitude}°
      </p>
      <p className="pt-5 text-center text-3xl text-amber-50">
        Nearby Landmarks
      </p>
      <>
        {nearbyLandmarks.map((item: any) => {
          let color: string = "";
          if (item.type === "Cave") {
            color = "text-red-500";
          } else if (item.type === "Ruins") {
            color = "text-amber-300";
          } else {
            color = "text-blue-700";
          }
          return (
            <div className="mt-6 mb-8 ml-12 flex h-[10%] w-[80%] items-center justify-center rounded-xl bg-gray-600 pt-5">
              <p className={`${color} pr-70 text-left`}>{item.name}</p>
              <p className="pr-50 text-center">{item.type}</p>
              <p>{item.distance}km</p>
            </div>
          );
        })}
      </>
    </div>
  );
}

export default function Inhabitants({ data }: any) {
  let height: number = 80;
  return (
    <div
      className={`h-[${height}%] w-[90%] items-center justify-center rounded-xl bg-gray-900`}
    >
      <h1 className="pt-5 text-center text-3xl text-amber-600">Inhabitants</h1>

      {data.roles.map((elem) => {
        return (
          <div className="mt-6 mb-8 ml-12 flex h-[10%] w-[80%] items-center justify-center rounded-xl bg-gray-600 pt-5">
            <button className="text-center text-3xl text-amber-300">
              {elem.role}
            </button>
          </div>
        );
      })}
    </div>
  );
}

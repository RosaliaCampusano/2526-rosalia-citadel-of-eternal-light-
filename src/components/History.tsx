export default function History({ history }: any) {
  let height: number = 30;
  return (
    <div
      className={`h-[${height}%] w-[90%] items-center justify-center rounded-xl bg-gray-900`}
    >
      <h1 className="pt-5 text-center text-3xl text-amber-600">History</h1>
      <h2 className="pt-5 text-center text-3xl text-emerald-700">
        Founded in {history.founded.year} by {history.founded.by}
      </h2>

      <form>
        <select
          className="items-center justify-center text-center text-3xl text-amber-600"
          value={history.majorEvents}
          multiple={false}
        >
          <option value={""}>Select a Year</option>
          {history.majorEvents.map((item: any) => {
            return <option value={item.year}>{item.year}</option>;
          })}
        </select>
      </form>
    </div>
  );
}

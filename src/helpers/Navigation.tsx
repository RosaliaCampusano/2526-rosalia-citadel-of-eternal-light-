import { NavigationScreen, NavigationName } from "../constants";

const Navigation = ({ setScreen }: any) => {
  return (
    <nav className="gap-4justify-between grid h-[7%] grid-cols-5 bg-cyan-950">
      {NavigationName.map((item) => {
        return (
          <button
            className="text-3xl"
            onClick={() => {
              const newScreen = changeScreen(item);
              setScreen(newScreen);
            }}
          >
            {item}
          </button>
        );
      })}
    </nav>
  );
};

const changeScreen = (name: string) => {
  switch (name) {
    case "Location":
      return NavigationScreen.Location;
    case "Defenses":
      return NavigationScreen.Defense;
    case "History":
      return NavigationScreen.History;
    case "Inhabitants":
      return NavigationScreen.Inhabitants;
    case "Resources":
      return NavigationScreen.Resources;
  }
};

export default Navigation;

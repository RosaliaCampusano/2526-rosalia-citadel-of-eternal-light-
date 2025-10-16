export default interface CitadelItem {
  name: string;
  location: Location;
  defenses: Defense;
  inhabitants: Inhabitants;
  resources: Resources;
  history: History;
}

// --- LOCATION --- //
interface Location {
  continent: string;
  coordinates: {
    latitude: number;
    longitude: number;
  };
  nearbyLandmarks: NearbyLandmarks[];
}

interface NearbyLandmarks {
  name: string;
  type: string;
  distance: number;
}

// --- DEFENSE ---//

interface Defense {
  walls: Walls;
  towers: Towers[];
}

interface Walls {
  material: string;
  height: number;
  enchantments: {
    name: string;
    level: number;
  }[];
}

interface Towers {
  name: string;
  height: number;
  armament: Armament;
  guards: Guards;
}

interface Armament {
  weaponType: string;
  ammunitionType: string;
  ammunitionCount: number;
}

interface Guards {
  name: string;
  rank: string;
}

// --- INHABITANTS ---

interface Inhabitants {
  roles: Roles;
}

interface Roles {
  role: string;
  count: number;
  equipment: Equiment;
  professions: Profession[];
}

interface Equiment {
  weapon: string;
  armor: string;
  shield: string;
  staff: string;
  robe: string;
  amulet: string;
}

interface Profession {
  type: string;
  count: number;
}

// --- RESOURCES --- //

interface Resources {
  storage: Storage;
  armory: {
    weapons: Items[];
  };
  shields: Items[];
}

interface Storage {
  food: Food;
  water: Water;
}

interface Food {
  type: string;
  quantity: number;
  unit: string;
}

interface Water {
  source: string;
  capacity: number;
  unit: string;
}

interface Items {
  type: string;
  quantity: number;
}

// --- HISTORY ---- //

interface History {
  founded: {
    year: number;
    by: string;
  };
  majorEvents: MajorEvents[];
}

interface MajorEvents {
  year: number;
  event: string;
  outcome: string;
  description: string;
}

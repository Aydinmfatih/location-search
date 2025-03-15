import type { Place } from "../api/Place";
import { useState } from "react";
function LocationSearch() {
  const [places, setPlaces] = useState<Place[]>([]);
  return <div>LocationSearch</div>;
}

export default LocationSearch;

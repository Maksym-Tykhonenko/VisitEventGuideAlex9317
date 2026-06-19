import type {GuideCategory, GuideLocation} from '../types/guide';

const VENUE_LATITUDE = 52.5609;
const VENUE_LONGITUDE = 4.7338;

export const GUIDE_LOCATIONS: GuideLocation[] = [
  {
    id: 'alkmaardermeer-lake',
    title: 'Alkmaardermeer Lake',
    tag: 'Water Landmark',
    latitude: 52.573,
    longitude: 4.752,
    imageKey: 'AlkmaardermeerLake',
    categories: ['waterfront', 'nature'],
    about:
      'A wide lakeside zone near Akersloot, known for open water views, sailing paths, small harbours, reed edges, and a calm Dutch countryside atmosphere. It is a good place for guests who want to step outside the venue environment and enjoy fresh air, water scenery, and a slower local rhythm.',
    visitorTips:
      'Visit during the late afternoon or early evening when the water reflects the sky and the lakeside feels quieter. Bring a light jacket because the lakeside can feel windy, even on mild days.',
    goodFor: 'Water views · Photography · Relaxed walks · Couples · Quiet breaks',
    listDescription:
      'Open water views, sailing paths, and calm Dutch countryside atmosphere.',
  },
  {
    id: 'akersloot-harbour',
    title: 'Akersloot Harbour',
    tag: 'Marina View',
    latitude: 52.566,
    longitude: 4.7413,
    imageKey: 'AkerslootHarbour',
    categories: ['waterfront'],
    about:
      'A small harbour front connected to the Alkmaardermeer, offering classic local waterside views with boats, calm water, and a peaceful village setting. It is a simple but atmospheric stop for visitors who want to enjoy the local character of Akersloot without going far.',
    visitorTips:
      'Best visited in the morning for calm reflections or close to sunset for softer light. It is also a good short stop before or after dining nearby.',
    goodFor: 'Harbour views · Short walks · Photography · Water lovers · Calm moments',
    listDescription:
      'Classic waterside views with boats and a peaceful village harbour setting.',
  },
  {
    id: 'de-hoorne-recreation-grounds',
    title: 'De Hoorne Recreation Grounds',
    tag: 'Lakeside Relaxation',
    latitude: 52.5761,
    longitude: 4.7492,
    imageKey: 'DeHoorneRecreationGrounds',
    categories: ['waterfront', 'nature'],
    about:
      'A recreational waterside zone near the Alkmaardermeer with open space, lake access, and a more casual outdoor atmosphere. It is suitable for visitors who want a simple nature break, a relaxed walk, or a place to enjoy the water without a formal trail.',
    visitorTips:
      'Wear comfortable shoes and check the weather before visiting because the open lakeside can become windy. During warm days, it can be a pleasant stop for a longer outdoor pause.',
    goodFor: 'Nature breaks · Fresh air · Family walks · Lake views · Relaxation',
    listDescription:
      'Open lakeside space with casual outdoor atmosphere and relaxed walks.',
  },
  {
    id: 'gemaal-1879',
    title: 'Gemaal 1879',
    tag: 'Historic Museum',
    latitude: 52.565,
    longitude: 4.732,
    imageKey: 'Gemaal1879',
    categories: ['landmarks'],
    about:
      'A historic pumping station from 1879 connected to the water management history of the region. It later became a museum with exhibitions and gives visitors a clearer view of how the Dutch landscape around Akersloot, Castricum, Heiloo, and Egmond was shaped and protected by water control.',
    visitorTips:
      'Check opening days before visiting, because museum-style heritage locations may not be open every day. This place works best for guests who enjoy quiet cultural stops rather than crowded attractions.',
    goodFor: 'Local history · Architecture · Cultural visits · Slow travel · Educational stops',
    listDescription:
      'Historic pumping station museum on regional water management heritage.',
  },
  {
    id: 'molen-de-oude-knegt',
    title: 'Molen De Oude Knegt',
    tag: 'Dutch Heritage',
    latitude: 52.5697,
    longitude: 4.743,
    imageKey: 'MolenDeOudeKnegt',
    categories: ['landmarks'],
    about:
      'A traditional windmill in Akersloot and one of the most recognizable local heritage sights in the region. It gives the guide section a strong Dutch character and works well as a visual landmark for visitors who want to see something authentic close to the village.',
    visitorTips:
      'Visit during daylight for the best exterior view and photos. If you want to see more than the outside, check availability in advance because windmills often have limited public access times.',
    goodFor: 'Heritage · Photography · Dutch landmarks · Short visits · Culture lovers',
    listDescription:
      'Traditional Akersloot windmill and one of the region’s most recognizable sights.',
  },
  {
    id: 'hempolder-bird-hide',
    title: 'Hempolder Bird Hide',
    tag: 'Birdwatching Spot',
    latitude: 52.5486,
    longitude: 4.7407,
    imageKey: 'HempolderBirdHide',
    categories: ['nature'],
    about:
      'A quiet birdwatching spot near Akersloot and the Alkmaardermeer, known for meadow birds, open polder views, reed beds, and a peaceful nature setting. It is a strong choice for guests who want a calm outdoor trail instead of a busy tourist attraction.',
    visitorTips:
      'Bring binoculars if possible and stay on the allowed path, especially during sensitive nature seasons. Spring and summer are especially interesting for birdwatching, but the open landscape can still feel beautiful in colder months.',
    goodFor: 'Birdwatching · Nature walks · Quiet guests · Photography · Countryside views',
    listDescription:
      'Quiet birdwatching with meadow birds and open polder scenery.',
  },
  {
    id: 'cafe-t-voorom',
    title: "Café 't Voorom",
    tag: 'Local Village Stop',
    latitude: 52.5645,
    longitude: 4.736,
    imageKey: 'CafetVoorom',
    categories: ['landmarks'],
    about:
      'A cosy local café in Akersloot with a village-style atmosphere and a more personal feeling than a large restaurant. It is a good place to include in the guide for visitors who want to experience something local, warm, and easygoing during their stay.',
    visitorTips:
      'Visit in the evening if you want a more social local atmosphere. Check current opening hours before planning, because smaller village places may have specific weekly schedules.',
    goodFor: 'Local atmosphere · Casual drinks · Small groups · Evening stops · Village experience',
    listDescription:
      'Cosy village café with a warm and easygoing local atmosphere.',
  },
  {
    id: 'restaurant-de-roef',
    title: 'Restaurant De Roef Waterfront Terrace',
    tag: 'Water Dining',
    latitude: 52.5655,
    longitude: 4.737,
    imageKey: 'RestaurantDeRoefWaterfrontTerrace',
    categories: ['waterfront'],
    about:
      'A waterside dining location near the marina of Akersloot, offering a calm setting with views toward the harbour and water. It is useful for guests who want to combine a local walk with food, drinks, or a relaxed terrace moment.',
    visitorTips:
      'Choose this place when the weather is comfortable enough to enjoy the terrace. It works especially well after a lakeside walk or before returning to the main venue.',
    goodFor: 'Dining · Terrace views · Couples · Small groups · Relaxed meals',
    listDescription:
      'Waterside terrace dining with harbour views near Akersloot marina.',
  },
  {
    id: 'de-woude-island-village',
    title: 'De Woude Island Village',
    tag: 'Polder Village',
    latitude: 52.553,
    longitude: 4.7795,
    imageKey: 'DeWoudeIslandVillage',
    categories: ['nature', 'landmarks'],
    about:
      'A small and peaceful village on an island near Akersloot, surrounded by water, meadows, farms, and wide polder landscapes. It feels very different from a standard city stop and gives visitors a calm, almost hidden countryside experience.',
    visitorTips:
      'Plan extra time because reaching the island may involve a small ferry connection. Visit during clear weather to fully enjoy the open fields, water views, and quiet village atmosphere.',
    goodFor: 'Countryside walks · Photography · Peaceful trails · Couples · Slow exploration',
    listDescription:
      'Peaceful island village surrounded by meadows, farms, and polder landscapes.',
  },
  {
    id: 'kerkje-de-kemphaan',
    title: 'Kerkje De Kemphaan',
    tag: 'Small Heritage Place',
    latitude: 52.553,
    longitude: 4.7795,
    imageKey: 'KerkjeDeKemphaan',
    categories: ['landmarks'],
    about:
      'A charming wooden church-style building in De Woude, rebuilt as a faithful replica of the original 1838 structure. It now serves as a local cultural and village space, making it a small but memorable stop for visitors exploring the region around Akersloot.',
    visitorTips:
      'Combine this stop with a walk through De Woude instead of visiting it separately. It is best for guests who enjoy quiet architecture, village heritage, and small details rather than large attractions.',
    goodFor: 'Local heritage · Architecture · Village walks · Photography · Cultural details',
    listDescription:
      'Charming wooden heritage building in the peaceful village of De Woude.',
  },
  {
    id: 'akersloot-village-centre',
    title: 'Akersloot Village Centre',
    tag: 'Village Walk',
    latitude: 52.5609,
    longitude: 4.7338,
    imageKey: 'AkerslootVillageCentre',
    categories: ['landmarks'],
    about:
      'The central village centre of Akersloot gives visitors a simple local walk with small streets, everyday village life, nearby cafés, and a calm North Holland atmosphere. It is not a loud tourist zone, which makes it useful for guests who want a short and easy break.',
    visitorTips:
      'Use this as a light walking stop rather than a full-day attraction. It is good before dinner, after breakfast, or when guests want to stretch their legs without travelling far.',
    goodFor: 'Short walks · Local atmosphere · Easy trails · First-time visitors · Calm breaks',
    listDescription:
      'Easy village walk with small streets, cafés, and local North Holland charm.',
  },
  {
    id: 'ferry-trail-alkmaardermeer',
    title: 'Ferry Trail Around Alkmaardermeer',
    tag: 'Cycling Trail',
    latitude: 52.5609,
    longitude: 4.7338,
    imageKey: 'FerryTrailAroundAlkmaardermeer',
    categories: ['waterfront', 'nature'],
    about:
      'A scenic cycling trail connected with the Alkmaardermeer and Uitgeestermeer region, passing through villages, water landscapes, ferry points, dykes, windmills, and quiet countryside. It is a strong guide option for visitors who want a more active daytime plan before returning to the venue in the evening.',
    visitorTips:
      'Best for guests who have more free time and access to a bike. Some ferry connections can be seasonal, so it is better to check the trail before starting.',
    goodFor: 'Cycling · Active guests · Water scenery · Daytime plans · Local exploration',
    listDescription:
      'Scenic cycling trail through villages, lakes, ferries, and quiet countryside.',
  },
  {
    id: 'sint-jacobus-major-church',
    title: 'Sint Jacobus Major Church',
    tag: 'Local Heritage',
    latitude: 52.5607,
    longitude: 4.7318,
    imageKey: 'SintJacobusMajorChurch',
    categories: ['landmarks'],
    about:
      'A local Roman Catholic church in Akersloot connected with the village’s community life and everyday heritage. It is not a large tourist attraction, but it gives visitors a calm and authentic view of the village beyond the main trails, lake views, and dining sections.',
    visitorTips:
      'Visit during daytime if you want to see the exterior clearly and combine it with a short walk through the village centre. Be respectful of service times, private events, and quiet community use of the church.',
    goodFor: 'Local heritage · Quiet walks · Architecture · Village atmosphere · Cultural details',
    listDescription:
      'Local church with calm village heritage and authentic community character.',
  },
  {
    id: 'uitgeestermeer-lake',
    title: 'Uitgeestermeer Lake',
    tag: 'Open Water Zone',
    latitude: 52.5327,
    longitude: 4.7335,
    imageKey: 'UitgeestermeerLake',
    categories: ['waterfront', 'nature'],
    about:
      'A broad lakeside zone south of Akersloot, connected with the surrounding water landscape, marinas, and recreation trails. It is a good choice for visitors who enjoy open views, boats, cycling trails, and a calm waterside atmosphere away from busy city streets.',
    visitorTips:
      'Visit on a clear day for the best water views. If you plan to walk or cycle nearby, check the wind because open lakeside zones can feel much colder than the village streets.',
    goodFor: 'Water views · Cycling · Photography · Fresh air · Relaxed day plans',
    listDescription:
      'Broad lakeside zone with open views, boats, and calm waterside trails.',
  },
  {
    id: 'fort-kijk',
    title: "Fort K'ijk",
    tag: 'Historic Fort',
    latitude: 52.5174,
    longitude: 4.7434,
    imageKey: 'FortKijk',
    categories: ['landmarks'],
    about:
      'A historic fort near Uitgeest, also known as Fort bij Krommeniedijk, connected with the Defence Line of Amsterdam. The location combines military heritage, open polder scenery, and a quiet landscape setting, making it a strong stop for visitors who want something more distinctive than a standard town walk.',
    visitorTips:
      'Check opening times before visiting, because heritage forts may have limited access days. This location is best for guests who enjoy history, architecture, and slower cultural exploration.',
    goodFor: 'History · Fort architecture · Countryside views · Cultural visits · Photography',
    listDescription:
      'Historic fort with military heritage and open polder scenery near Uitgeest.',
  },
  {
    id: 'hortus-bulborum',
    title: 'Hortus Bulborum',
    tag: 'Historic Flower Garden',
    latitude: 52.5645,
    longitude: 4.6933,
    imageKey: 'HortusBulborum',
    categories: ['nature'],
    about:
      'A historic flower bulb garden in Limmen, known for preserving old and rare tulips, daffodils, hyacinths, and other bulb varieties. It is a colourful seasonal place that adds a softer, more nature-focused trail for visitors who want something peaceful and very Dutch near Akersloot.',
    visitorTips:
      'Best visited during the flower season, especially in spring when the garden is most expressive. Check current opening dates before planning, because this location is strongly seasonal.',
    goodFor: 'Flowers · Spring visits · Photography · Garden walks · Couples',
    listDescription:
      'Historic bulb garden preserving rare tulips, daffodils, and hyacinths.',
  },
  {
    id: 'huis-van-hilde',
    title: 'Huis van Hilde',
    tag: 'Archaeology Museum',
    latitude: 52.5446,
    longitude: 4.6581,
    imageKey: 'HuisvanHilde',
    categories: ['landmarks'],
    about:
      'An archaeology museum in Castricum focused on the history of North Holland, with exhibitions, regional finds, and reconstructed historical figures. It is a useful guide location for guests who want an indoor cultural stop that feels calm, educational, and close enough for a short trip.',
    visitorTips:
      'Choose this location if the weather is rainy or windy, because it works well as an indoor visit. It can also be combined with Castricum village centre or a later walk toward the dunes.',
    goodFor: 'Museums · History · Rainy days · Families · Educational visits',
    listDescription:
      'Archaeology museum with North Holland history and regional exhibitions.',
  },
  {
    id: 'noordhollands-duinreservaat',
    title: 'Noordhollands Duinreservaat',
    tag: 'Dune Nature Reserve',
    latitude: 52.5458,
    longitude: 4.6584,
    imageKey: 'NoordhollandsDuinreservaat',
    categories: ['nature'],
    about:
      'A large dune reserve near Castricum with dunes, forest edges, walking paths, cycling trails, and access toward the coastal landscape. It gives visitors a completely different atmosphere from Akersloot’s lake scenery, with sandy paths, pine groves, birds, and wide natural views.',
    visitorTips:
      'Wear comfortable walking shoes and check whether a dune access ticket or permit is required for your trail. Go during daylight and allow enough time, because the reserve is much larger than a simple village park.',
    goodFor: 'Nature walks · Cycling · Dunes · Fresh air · Active guests',
    listDescription:
      'Large dune reserve with walking paths, forest edges, and coastal access.',
  },
  {
    id: 'castricum-aan-zee-beach',
    title: 'Castricum aan Zee Beach',
    tag: 'Coastal Escape',
    latitude: 52.5608,
    longitude: 4.604,
    imageKey: 'CastricumaanZeeBeach',
    categories: ['nature', 'waterfront'],
    about:
      'A wide North Sea beach near Castricum, suitable for visitors who want a stronger outdoor escape from the village and lakeside. The beach has open sea views, dune access, beach pavilions during the season, and a refreshing coastal atmosphere that works well before or after a relaxed visit plan.',
    visitorTips:
      'Bring a jacket even in warmer months because the sea wind can be strong. Sunset is a beautiful time for photography, but daytime is better for longer walks and beach cafés.',
    goodFor: 'Beach walks · Sunset views · Photography · Couples · Fresh air',
    listDescription:
      'Wide North Sea beach with dunes, open views, and coastal atmosphere.',
  },
  {
    id: 'sint-adelbertabdij-egmond',
    title: 'Sint-Adelbertabdij Egmond',
    tag: 'Abbey & Calm Place',
    latitude: 52.5955,
    longitude: 4.6606,
    imageKey: 'SintAdelbertabdijEgmond',
    categories: ['landmarks'],
    about:
      'A Benedictine abbey in Egmond-Binnen with a serene religious and cultural atmosphere. It is a thoughtful stop for guests who want quiet surroundings, historic character, and a slower place to walk, reflect, or visit the abbey shop and surrounding grounds.',
    visitorTips:
      'Check visitor information before going, especially if you want to enter specific sections or visit the shop. Keep the visit calm and respectful, as this is an active religious location rather than only a tourist landmark.',
    goodFor: 'Quiet visits · Heritage · Reflection · Architecture · Slow travel',
    listDescription:
      'Serene Benedictine abbey with historic character and calm surroundings.',
  },
  {
    id: 'alkmaar-historic-centre',
    title: 'Alkmaar Historic Centre',
    tag: 'City Heritage',
    latitude: 52.631,
    longitude: 4.7488,
    imageKey: 'AlkmaarHistoricCentre',
    categories: ['landmarks'],
    about:
      'The historic centre of Alkmaar is a lively city option near Akersloot, known for canals, old streets, cafés, shops, and the famous cheese market quarter around Waagplein. It is a strong guide location for visitors who want a fuller city experience after enjoying the calmer village and lake surroundings.',
    visitorTips:
      'Visit earlier in the day if you want shops, cafés, and market energy. For a more relaxed mood, go in the evening for canal walks, warm street lighting, and a slower historic-centre atmosphere.',
    goodFor: 'City walks · Cafés · Shopping · History · Photography',
    listDescription:
      'Historic city centre with canals, cafés, shops, and cheese market charm.',
  },
];

export const GUIDE_MAP_REGION = {
  latitude: 52.56,
  longitude: 4.73,
  latitudeDelta: 0.18,
  longitudeDelta: 0.22,
};

function toRadians(value: number): number {
  return (value * Math.PI) / 180;
}

function distanceKm(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number,
): number {
  const earthRadiusKm = 6371;
  const dLat = toRadians(lat2 - lat1);
  const dLon = toRadians(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRadians(lat1)) *
      Math.cos(toRadians(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return earthRadiusKm * c;
}

export function formatCoordinates(latitude: number, longitude: number): string {
  const latSuffix = latitude >= 0 ? 'N' : 'S';
  const lonSuffix = longitude >= 0 ? 'E' : 'W';
  return `${Math.abs(latitude).toFixed(4)}° ${latSuffix}, ${Math.abs(longitude).toFixed(4)}° ${lonSuffix}`;
}

export function estimateTravelTime(location: GuideLocation): string {
  const km = distanceKm(
    VENUE_LATITUDE,
    VENUE_LONGITUDE,
    location.latitude,
    location.longitude,
  );
  const minutes = Math.max(5, Math.round((km / 35) * 60));

  if (minutes < 60) {
    return `~${minutes} min`;
  }

  const hours = minutes / 60;
  if (hours < 2) {
    return `~${hours.toFixed(1)} hr`;
  }

  return `~${Math.round(hours)} hr`;
}

export function getGuideLocationById(
  locationId: string,
): GuideLocation | undefined {
  return GUIDE_LOCATIONS.find(location => location.id === locationId);
}

export function filterGuideLocations(options: {
  query: string;
  category: GuideCategory;
  savedIds: string[];
  tab: 'explore' | 'saved';
}): GuideLocation[] {
  const normalizedQuery = options.query.trim().toLowerCase();

  return GUIDE_LOCATIONS.filter(location => {
    if (options.tab === 'saved' && !options.savedIds.includes(location.id)) {
      return false;
    }

    if (
      options.category !== 'all' &&
      !location.categories.includes(options.category)
    ) {
      return false;
    }

    if (!normalizedQuery) {
      return true;
    }

    return (
      location.title.toLowerCase().includes(normalizedQuery) ||
      location.tag.toLowerCase().includes(normalizedQuery) ||
      location.listDescription.toLowerCase().includes(normalizedQuery)
    );
  });
}

export function getDirectionsUrl(location: GuideLocation): string {
  return `https://maps.google.com/?q=${location.latitude},${location.longitude}`;
}

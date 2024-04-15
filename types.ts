// TODO: capitalize T
/** Information about a show */
type tShow = {
  id: number;
  name: string;
  summary: string;
  image: string;
};

// Could also use omit
/** Information about a show retrieved from API */
type tShowData = tShow & {
  image: {
    medium: string;
    original: string;
  };
};

/** Information about an episode */
type tEpisode = {
  id: number;
  name: string;
  season: number;
  number: number;
};

const getGifs = async (category) => {
    const url =
      `https://api.giphy.com/v1/gifs/search?q=${category}&limit=10&api_key=3XZ5Ewyuql6W28gN1ze8cNstjcOYaykT`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map(({ id, title, images }) => {
      return {
        id: id,
        title: title,
        url: images?.downsized_medium.url,
      };
    });
    return gifs;
  };

  export default getGifs;
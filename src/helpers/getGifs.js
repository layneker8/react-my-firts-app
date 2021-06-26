export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=0oCXPxgkHfhHhqy9VBmZ2tuXMS9nWc3r`;

    const resp = await fetch(url);

    const {data} = await resp.json();
   
    const gifs = data.map((img) => {
        return {
            id: img.id,
            titulo: img.title,
            url: img.images?.fixed_width_small.url,
        };
    });
    return gifs;
};
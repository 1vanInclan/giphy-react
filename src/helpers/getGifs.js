export const getGifs = async(categoria) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=o3Q3HQaQjFPubVRcxc1VodtQ5ruYTEve&q=${categoria}&limit=15`;

    const resp = await fetch(url);
    const { data } = await resp.json();
    // console.log(data)
    // console.log(data.map( img => console.log(img)));

    const gif = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))

    console.log(gif);
    return gif;

}
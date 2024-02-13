

const getImagen = async () => {

    try {
        const apiKey = 'j3OCBLOcLuXSl7ITtvgKvE15iDahkGbs';
        const response = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const {data} = await response.json()
        const {url} = await data.images.original;
        const img = document.createElement('img');
        img.src = url
        document.body.append(img);
    } catch (error) {
        // manejo del error
    }



}

getImagen();
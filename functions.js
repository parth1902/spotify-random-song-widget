
const client_id = 'YOUR_CLIENT_ID';
const client_secret = 'YOUR_CLIENT_SECRET';

async function getToken() {
    const url = "https://accounts.spotify.com/api/token";
    const data = new URLSearchParams();
    data.append('grant_type', 'client_credentials');
    data.append('client_id', client_id);
    data.append('client_secret', client_secret);

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: data,
    });

    const tokenData = await response.json();
    return tokenData.access_token;
}

const songIds = ['1VI29k31nGdasgJ8BBpPu8', '7eqNATKM78MkWP6aHGXHEV', '6Et6uBEIIDEforjX21VLZi', '0ZOuues7b9AgBOJ0YRZMLR', '4gphxUgq0JSFv2BCLhNDiE', '3KzgdYUlqV6TOG7JCmx2Wg', '44AyOl4qVkzS48vBsbNXaC', '2F4FNcz68howQWD4zaGJSi', '2KQM3kDM0zMBC9iynePBbS', '0bfvHnWWOeU1U5XeKyVLbW', '2DpJ9T2RVRanZcYFHKOAfA', '48i055G1OT5KxGGftwFxWy', '0Wd52AHQrrwwDbqVQF2dt6', '6MTd61g9zq6CB1FnJydjEb', '1tfZtA15BfJHQTUy3dqTKC', '3GXo1eWlT2flv4x01l5OTu', '1YYhDizHx7PnDhAhko6cDS', '7GVUmCP00eSsqc4tzj1sDD', '5ChkMS8OtdzJeqyybCc9R5', '22sLuJYcvZOSoLLRYev1s5', '3MrRksHupTVEQ7YbA0FsZK', '4PTG3Z6ehGkBFwjybzWkR8', '7fRvtXvJMpGfTLdF0M09a1', '3X7uFMzJrEE0sxn62qd8Ch', '2aEuA8PSqLa17Y4hKPj5rr', '1OOtq8tRnDM8kG2gqUPjAj', '2tUBqZG2AbRi7Q0BIrVrEj', '47BBI51FKFwOMlIiX6m8ya', '15tHagkk8z306XkyOHqiip', '33LC84JgLvK2KuW43MfaNq', '3UpS7kBnkVQYG13pDDFTC4', '3MjUtNVVq3C8Fn0MP3zhXa', '7wMq5n8mYSKlQIGECKUgTX', '2lnzGkdtDj5mtlcOW2yRtG', '3AJwUDP919kvQ9QcozQPxg', '4E5P1XyAFtrjpiIxkydly4', '3U5JVgI2x4rDyHGObzJfNf', '228BxWXUYQPJrJYHDLOHkj', '3ZFTkvIE7kyPt6Nu3PEa7V', '5O2P9iiztwhomNh8xkR9lJ', '0qOnSQQF0yzuPWsXrQ9paz', '059ACLUOyEcdruA2m9f2jd', '2BgEsaKNfHUdlh97KmvFyo', '2Bs4jQEGMycglOfWPBqrVG', '6lanRgr6wXibZr8KgzXxBl', '2qxmye6gAegTMjLKEBoR3d', '0EcQcdcbQeVJn9fknj44Be', '1ei3hzQmrgealgRKFxIcWn', '5YqEzk3C5c3UZ1D5fJUlXA', '76OGwb5RA9h4FxQPT33ekc', '5HCyWlXZPP0y6Gqq8TgA20', '5QDLhrAOJJdNAmCTJ8xMyW', '3FeVmId7tL5YN8B7R3imoM', '7BoobGhD4x5K96Me0hqC8Q', '0QHEIqNKsMoOY5urbzN48u', '0tgVpDi06FyKpA1z0VMD4v', '4cluDES4hQEUhmXj6TXkSo', '06KyNuuMOX1ROXRhj787tj', '3cNjgVBKTJ1SvKhunrCdVy', '3NLnwwAQbbFKcEcV8hDItk', '3BsaRV5QIulYz2lV9WWa8T', '0HPD5WQqrq7wPWR7P7Dw1i', '3GpbwCm3YxiWDvy29Uo3vP', '4HlFJV71xXKIGcU3kRyttv', '3wuCCNCnBhJlwkIJTBZFiv', '5EQzuYfTZt7B2LqlvTF49l', '1di1BEgJYzPvXUuinsYJGP', '06hsdMbBxWGqBO0TV0Zrkf', '1DIXPcTDzTj8ZMHt3PDt8p', '0Ph6L4l8dYUuXFmb71Ajnd', '6kQz6t5z1FK4uohPh8Kd73', '0Uqs7ilt5kGX9NzFDWTBrP', '0ikz6tENMONtK6qGkOrU3c', '1PtQJZVZIdWIYdARpZRDFO', '5zA8vzDGqPl2AzZkEYQGKh', '6apPqjW8ezpKEicAkkBlvO', '66S14BkJDxgkYxLl5DCqOz', '4y1LsJpmMti1PfRQV9AWWe', '31H6au3jhblhr6MMJiXnCq', '77NNZQSqzLNqh2A9JhLRkg', '4J0DbyODwZJcmIAiTSJfMF', '4U45aEWtQhrm8A5mxPaFZ7', '702Xo5V8OhlY2cQEczCT2j', '1QbOvACeYanja5pbnJbAmk', '5TMTNjJYJSURXA0ktKevlI', '64Ny7djQ6rNJspquof2KoX', '40fD7ct05FvQHLdQTgJelG', '47gmoUrZV3w20JAnQOZMcO', '7jeOETwLUP84mPQzxlD5nh', '2G2YzndIA6jeWFPBXhUjh5'];

// Function to pick a random songId from the array
function getRandomSongId(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

function getMood(energy) {
    if (energy >= 0 && energy < 0.2) {
        return 'soothing';
    } else if (energy >= 0.2 && energy < 0.4) {
        return 'mellow';
    } else if (energy >= 0.4 && energy < 0.6) {
        return 'balanced';
    } else if (energy >= 0.6 && energy < 0.8) {
        return 'upbeat';
    } else {
        return 'energetic';
    }
}

// Example usage


document.addEventListener('DOMContentLoaded', async function () {
    // Call fetchData when the page loads to set a default song
    const token = await getToken();
    await fetchData(token);
});

async function fetchData(token) {


	// const audioElement = document.getElementById('audioSource');
	const audioElement = document.querySelector('audio');
	// const audioElement = document.getElementById('safari-player');
	// audioElement.pause();

    const songId = getRandomSongId(songIds);
    const trackUrl = `https://api.spotify.com/v1/tracks/${songId}`;
    const trackResponse = await fetch(trackUrl, {
        headers: {
            'Authorization': `Bearer ${token}`,
        },
    });

    const trackData = await trackResponse.json();
    const artistId = trackData.album.artists[0].id;

    const artistUrl = `https://api.spotify.com/v1/artists/${artistId}`;
    const artistResponse = await fetch(artistUrl, {
        headers: {
            'Authorization': `Bearer ${token}`,
        },
    });

    const artistData = await artistResponse.json();
    const genre = artistData.genres[0];

    const audioFeaturesUrl = `https://api.spotify.com/v1/audio-features/${songId}`;
    const audioFeaturesResponse = await fetch(audioFeaturesUrl, {
        headers: {
            'Authorization': `Bearer ${token}`,
        },
    });

    const audioFeaturesData = await audioFeaturesResponse.json();
    const energy = getMood(audioFeaturesData.energy);
    

    const imageUrl = trackData.album.images[0]['url']

    const imageElement = document.getElementById('imageElement');
    // Set the src attribute of the image element
    imageElement.src = imageUrl;

    
    if (trackData.preview_url) {
        audioElement.src = trackData.preview_url;
        audioElement.play();
        console.log(trackData.preview_url,songId);
	}
	else {
		audioElement.removeAttribute('src');
	    audioElement.load();
    
	}

	const songData = trackData.name + ' - ' + trackData.album.artists[0]['name']
	console.log(songData);
	document.getElementById('song-name').innerText = songData;

    updateValues(energy, trackData.album.release_date.substring(0, 3) + '0s', genre);
}

function updateValues(energy, year, genre) {
    document.getElementById('mellow').innerText = energy;
    document.getElementById('year').innerText = year;
    document.getElementById('genre').innerText = genre;
    // document.getElementById('image').src = imageUrl;
}

async function refreshData() {
    const token = await getToken();
    await fetchData(token);
}

// Call refreshData initially or attach it to any event you want.
refreshData();
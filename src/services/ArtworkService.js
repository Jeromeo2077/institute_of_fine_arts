import { Artwork } from "@/models/Artwork.js"
import { api } from "./AxiosService.js"
import { AppState } from "@/AppState.js"

class ArtworkService{

  async getArtwork() {
    const response = await api.get('api/artworks')

    console.log(response.data.artworks);
    
   
    const newArtwork = response.data.artworks.map(artPojo => new Artwork(artPojo))
    AppState.artwork = newArtwork   
  }
}

export const artworkService = new ArtworkService()
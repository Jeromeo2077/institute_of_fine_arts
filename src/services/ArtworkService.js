import { api } from "./AxiosService.js"

class ArtworkService{

  async getArtwork() {
    const response = await api.get('api/artworks')
    console.log(response.data);
    
  }

}

export const artworkService = new ArtworkService
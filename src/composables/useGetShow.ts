import type { Show } from '../types/types';

export async function useGetShow() {
  const baseUrl = 'https://api.tvmaze.com';

  const fetchData = async (url: string): Promise<any> => {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Error fetching data: ${response.statusText}`);
    }

    return response.json();
  };

  const getSearchedShows = async (query: string) => {
    try {
      const result = await fetchData(`${baseUrl}/search/shows?q=${encodeURIComponent(query)}`) as Show[];
      // Sort the results by rating in descending order
      return result;
    } catch (error) {
      console.error('Error searching shows:', error);
      throw error;
    }
  };

  const getShows= async (): Promise<any[]> => {
    try {
      const result = await fetchData(`${baseUrl}/shows`);
      
      return result;
    } catch (error) {
      console.error('Error fetching shows', error);
      throw error;
    }
  };

  const getShowDetails = async (showId: number): Promise<any > => {
    try {
      const result = await fetchData(`${baseUrl}/shows/${showId}`);
      return result;
    } catch (error) {
      console.error('Error fetching show details:', error);
      throw error;
    }
  };

  return {
    getSearchedShows,
    getShowDetails,
    getShows
  };
}

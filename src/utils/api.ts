// utils/api.ts

/**
 * Utility function to make a GET request to the API.
 * @param url - The API endpoint URL.
 * @returns A Promise resolving to the JSON response.
 */
export const getApiData = async (url: string): Promise<any> => {
    try {
      const response = await fetch(url);
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error.message);
      throw error;
    }
  };
  
  /**
   * Utility function to make a POST request to the API.
   * @param url - The API endpoint URL.
   * @param payload - The data to be sent in the request body.
   * @returns A Promise resolving to the JSON response.
   */
  export const postApiData = async (url: string, payload: any): Promise<any> => {
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error posting data:', error.message);
      throw error;
    }
  };
  
  
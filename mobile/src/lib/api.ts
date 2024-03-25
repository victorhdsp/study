import axios from "axios";

// const baseUrl = 'https://study-pfn2.onrender.com'
const baseUrl = 'http://localhost:3000'

const api = {
  async getMessage (): Promise<string[]> {
    try {
      const response = await axios.get(`${baseUrl}/message`);
      return response.data;
      
    } catch (error) {
      console.error('Error fetching data:', error);
    }

    return [];
  },
  async sendResponse (text: string): Promise<void> {
    try {
      await axios.post(`${baseUrl}/response`, { text });
    } catch (error) {
      console.error('Error sending response:', error);
    }
  }
}

export default api
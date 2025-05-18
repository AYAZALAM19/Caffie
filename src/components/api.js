const APIURL = import.meta.env.API_URL;
export const fetchProgram = async () => {
  try {
    const response = await fetch(APIURL);
    
    // Check if the response is okay
    if (!response.ok) {
    
      throw new Error(`HTTP error! status: ${response.status}`);

    }


    const data = await response.json();
    return data;

  } catch (err) {

    console.error("Error fetching program:", err);

    return [];
  }
};

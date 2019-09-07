import axios from 'axios';

const updateFlashcardStatus = async (status) => {
  try {
    let response = await axios.put('http://localhost:3000/api/flashcards/1' , {
        statusUpdated: true,
      });
    return response;
  } catch (error) {
    return error.response;
  }
};

export { updateFlashcardStatus }


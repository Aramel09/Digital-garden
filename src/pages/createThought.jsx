import createThought from '../services/api';

export const addThought = async ({ request }) => {
  const fd = await request.formData();

  const thoughtInformation = Object.fromEntries(fd)

  const thoughtCreated = createThought(thoughtInformation)

  
return thoughtCreated
}
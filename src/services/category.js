import axios from 'axios'

 
export const getCategory = async() => {
  const category = await axios.get('https://kriska-rest.herokuapp.com/category');
  
  return category;
}

 
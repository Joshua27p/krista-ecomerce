import axios from 'axios'

export const getProducts = async(offers, limit, categories) => {
  const catalogue = await axios.get(`https://kriska-rest.herokuapp.com/catalogue`, {
    params:{
      offers,
      limit,
      categories
    }
  } );
  return catalogue;
}

 


 
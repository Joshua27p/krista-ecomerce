import axios from 'axios'

export const getProducts = async(offers, limit) => {
  const catalogue = await axios.get(`https://kriska-rest.herokuapp.com/catalogue`, {
    params:{
      offers,
      limit
    }
  } );
  return catalogue;
}

 


 
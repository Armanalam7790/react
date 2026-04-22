import axios from "axios";

 export let fetchProduct = async ({pageParam = 1}) => {
    try {

        let limit =  10;
        let skip  = (pageParam - 1) * limit



        let res = await axios.get(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`)
        return res.data


         
     } catch (error) {
        console.log('error in product api', error);

    }
}
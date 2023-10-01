
// const url = 'https://weatherapi-com.p.rapidapi.com/current.json?q=53.1%2C-0.13';
const url = 'https://weatherapi-com.p.rapidapi.com/forecast.json?q=London&days=3';


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '4e4df424a9msh5a0298aa229242cp1852f2jsn56a68f1d74a2',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};
const weather = async function(){

    try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}


weather();


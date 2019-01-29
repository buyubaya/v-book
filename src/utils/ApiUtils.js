import { BASE_URL } from '@/constants/ApiUrls';


export function fetchItem(options){
	let q;
	if(options){
		q = [];
		for(let x in options){
			q.push(`${x}=${options[x]}`);
		}
		q = '?' + q.join('&');   
	}
	else {
		q = ''
	}

	return fetch(`${BASE_URL}/api/product${q}`)
	.then(res => res.json())
};
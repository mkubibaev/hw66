import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-project-90828.firebaseio.com/'
});

// instance.interceptors.response.use(res => {
// 	console.log('[In request interceptor]', res);
// 	return res;
// });

export default instance;
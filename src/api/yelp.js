import axios from 'axios';

export default axios.create({
 baseURL:'https://api.yelp.com/v3/businesses',
 headers:{
 	Authorization: 'Bearer qbVkpxQ2aA39-HSmLRmUHloRSXcpE53CxrxnWv-pVI9Wd5UUhrWMyN9uKfS8dyfWRrfoPbeh5TvLJ9RaF29iM8G_KaVw5sNHcojoiEyCSH6e2sei3VndjLmooJDgX3Yx'
 }
});
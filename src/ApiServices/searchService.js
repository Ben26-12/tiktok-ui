import request from '~/utils/request';

async function searchService() {
    const res = await request.get('https://jsonplaceholder.typicode.com/users');
    return res.data;
}
export default searchService;

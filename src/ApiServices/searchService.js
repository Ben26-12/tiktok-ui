import request from '~/utils/request';
//search: đây mới chỉ là search user, sau này có thể có nhiều search khác, sẽ viết vào đây, thay phần user bằng post chẳng hạn
async function search() {
    const res = await request.get('users');
    return res.data;
}
export { search };
//đứng từ component sẽ gọi thằng search này chứ không đụng vào utils

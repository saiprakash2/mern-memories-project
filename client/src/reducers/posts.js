export default (posts = [],action) => {

   console.log(action.type);

   switch (action.type) {
    case 'UPDATE':
        return posts.map((post)=> posts._id === action.payload._id ? action.payload : post)
    case 'FETCH_ALL':
        return action.payload
    case 'CREATE':
        return [...posts, action.payload]
    default:
        return posts
   }
}
import Post from './Post'

let posts = [
    {user: 'meowed', imgUser: './assets/img/meowed.svg', img: './assets/img/gato-telefone.svg', imgLike: './assets/img/respondeai.svg', like: 'respondeai', likes: 101.523},
    {user: 'barked', imgUser: './assets/img/barked.svg', img: './assets/img/dog.svg', imgLike: './assets/img/adorable_animals.svg', like: 'adorable_animals', likes: 99.159}
  ];

export default function Posts() {
    return (
        <div class="posts">
            {
                posts.map((post)=>{
                    return <Post user={post.user} imgUser={post.imgUser} img={post.img} imgLike={post.imgLike} like={post.like} likes={post.likes} />
                })
            }
        </div>
    )
}
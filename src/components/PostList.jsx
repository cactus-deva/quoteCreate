import { useContext } from 'react';
import { PostContext } from '../context/posts';
import PostShow from './PostShow';

export default function PostList(props) {
    const { posts } = useContext(PostContext);
    const { term } = props
    

    const filterPosts = posts.filter((post) => {        
        return post.quote.toLowerCase().includes(term.toLowerCase())
    }
    );
    
    const renderPosts = filterPosts.map((post) => {
        return <PostShow key={post.id} post={post} />
    }
    );

    return (
        <div className='grid grid-cols-2 gap-1'>
            {renderPosts}
        </div>

    )
}

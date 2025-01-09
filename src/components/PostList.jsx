import { useContext } from 'react';
import { PostContext } from '../context/posts';
import PostShow from './PostShow';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'

export default function PostList(props) {
    const { posts, isLoading } = useContext(PostContext);
    const { term } = props
    
    const filterPosts = posts.filter((post) => {        
        return post.quote.toLowerCase().includes(term.toLowerCase()) || post.author.toLowerCase().includes(term.toLowerCase())
    }
    );
    
    const renderPosts = filterPosts.map((post) => {
        return <PostShow key={post.id} post={post} />
    }
    );

    if (isLoading) {
        return (
            <div className="grid grid-cols-2 gap-1">
                {[...Array(6)].map((post, index) => (
                    <div key={index} className="flex items-center h-[160px] m-3 rounded-md">
                        <SkeletonTheme baseColor="lightblue" highlightColor="indigo">
                           <Skeleton count={4} height={30} containerClassName="flex-1" /> 
                        </SkeletonTheme>
                    </div>
                ))}
            </div>
        );
    }

    return (
        <div className='grid grid-cols-2 gap-1'>
            {renderPosts}
        </div>

    )
}

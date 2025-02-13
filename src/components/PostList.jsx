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
            <div className="grid grid-cols-1">
                {[...Array(6)].map((_, index) => {
                    return (
                    <div key={index} className="flex items-center h-[160px]rounded-md m-3">
                        <SkeletonTheme baseColor="lightblue" highlightColor="turquoise">
                           <Skeleton count={5} circle={10} height={30} containerClassName="flex-1" /> 
                        </SkeletonTheme>
                    </div>
                )})
                }
            </div>
        );
    }

    return (
        <div className='grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-4 m-3'>
            {renderPosts}
        </div>

    )
}

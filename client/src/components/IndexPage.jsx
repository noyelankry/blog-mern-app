import PostSummary from "./PostSummary";
import { useEffect, useState } from "react";

export const IndexPage = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:4000/post').then(res => {
            console.log(res)
            res.json().then(posts => {
                setPosts(posts);
            });
        });
    }, []);
    return (
        <>
            <div name='IndexPage' className="w-[70%] h-screen grid md:grid-cols-2 grid-cols-1 content-center ml-[15%]">
                {posts.length > 0 && posts.map(post => (
                    <PostSummary {...post} />
                ))}
            </div>
        </>
    );
}
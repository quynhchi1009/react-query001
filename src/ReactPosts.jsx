import React, { useEffect, useState } from "react";
import axios from "axios";

const ReactPosts = () => {
    const [posts, setPosts] = useState([]);

    const fetchApi = async () => {
        const response = await axios.get(
            "https://jsonplaceholder.typicode.com/posts"
        );
        setPosts(response.data);
    };

    useEffect(() => {
        fetchApi();
    }, []);

    if (!posts.length) {
        return <h1>...Loading</h1>;
    }

    return (
        <div>
            <h1>React API</h1>
            {posts.map((post) => {
                return <p key={post.id}>{post.title}</p>;
            })}
        </div>
    );
};

export default ReactPosts;

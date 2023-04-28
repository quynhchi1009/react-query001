import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";

const Posts = () => {
    const [posts, setPosts] = useState<any[]>([]);

    const fetchApi = async () => {
        const response = await axios.get(
            "https://jsonplaceholder.typicode.com/posts"
        );
        return response.data;
    };

    const {isError, isLoading, data} = useQuery(["posts"], fetchApi, {retry: 1, retryDelay: 1000});

    useEffect(() => {
        fetchApi();
    }, []);

    if (isLoading) {
        return <h1>...Loading</h1>
    }

    if (isError) {
        return <h1>Error!</h1>;
    }

    return (
        <div>
            {data.map((post: any) => {
                return <h1 key={post.id}>{post.title}</h1>;
            })}
        </div>
    );
};

export default Posts;

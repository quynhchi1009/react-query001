import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const Posts = () => {
    const fetchApi = async () => {
        const response = await axios.get(
            "https://jsonplaceholder.typicode.com/posts"
        );
        return response.data;
    };
    
    const { isError, isLoading, data, isFetching } = useQuery(["posts"], fetchApi, {
        retry: 5,
        retryDelay: 1000,
    });

    console.log("Check if", {isFetching, isLoading});
    

    if (isLoading) {
        return <h1>...Loading</h1>;
    }

    if (isError) {
        return <h1>Error!</h1>;
    }

    return (
        <div>
            <h1>React Query</h1>
            {data.map((post: any) => {
                return <p key={post.id}>{post.title}</p>;
            })}
        </div>
    );
};

export default Posts;

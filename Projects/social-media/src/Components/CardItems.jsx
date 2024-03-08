import { useContext, useEffect, useState } from "react";
import { PostList } from "../store/post-list-store";
import CardItem from "./CardItem";
import WelcomeMessage from "./WelcomeMessage";
import LoadingSpinner from "./LoadingSpinner";

const CardItems = () => {
  const { postList, addInitialPosts } = useContext(PostList);
  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    setFetching(true);
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        addInitialPosts(data.posts);
        setFetching(false);
      });
  }, []);

  return (
    <>
      {fetching && <LoadingSpinner />}
      {!fetching && postList.length === 0 && <WelcomeMessage />}
      {!fetching &&
        postList.map((post) => {
          return <CardItem key={post.id} post={post}></CardItem>;
        })}
    </>
  );
};

export default CardItems;

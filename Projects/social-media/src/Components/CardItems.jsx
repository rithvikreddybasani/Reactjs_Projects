import { useContext } from "react";
import { PostList } from "../store/post-list-store";
import CardItem from "./CardItem";
import WelcomeMessage from "./WelcomeMessage";

const CardItems = () => {
  const { postList, addInitialPosts } = useContext(PostList);

  const handleGetPostClick = () => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => addInitialPosts(data.posts));
  };

  return (
    <>
      {postList.length === 0 && (
        <WelcomeMessage onGetPostClick={handleGetPostClick} />
      )}
      {postList.map((post) => {
        return <CardItem key={post.id} post={post}></CardItem>;
      })}
    </>
  );
};

export default CardItems;

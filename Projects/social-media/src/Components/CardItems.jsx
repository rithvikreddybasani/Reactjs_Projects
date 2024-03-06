import { useContext } from "react";
import { PostList } from "../store/post-list-store";
import CardItem from "./CardItem";

const CardItems = () => {
  const { postList } = useContext(PostList);
  console.log(postList);
  return (
    <>
      {postList.map((post) => {
        return <CardItem key={post.id} post={post}></CardItem>;
      })}
    </>
  );
};

export default CardItems;

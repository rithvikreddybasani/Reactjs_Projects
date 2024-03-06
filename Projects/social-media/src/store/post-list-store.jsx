import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter((post) => {
      return post.id !== action.payload.postId;
    });
  } else if (action.type === "ADD_POST") {
    newPostList = [
      ...currPostList,
      {
        id: action.payload.userId,
        title: action.payload.titleName,
        body: action.payload.bodyContent,
        reactions: action.payload.noReaction,
        tags: action.payload.noHashTag,
      },
    ];
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const DEFAULT_POST_LIST = [
    {
      id: "1",
      title: "Going to Goa",
      body: "Hi Friends,I am going to Goa for my vacations. Hope to enjoy a lot. Peace out..",
      reactions: 2,
      userId: "user-9",
      tags: ["vacation", "Goa", "Enjoy"],
    },
    {
      id: "2",
      title: "Pass btech",
      body: "After enjoying 4 years i finally passed..",
      reactions: 4,
      userId: "user-10",
      tags: ["btech", "Graduating", "Unbelievable"],
    },
  ];

  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );

  const addPost = (userId, titleName, bodyContent, noReaction, noHashTag) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        userId,
        titleName,
        bodyContent,
        noReaction,
        noHashTag,
      },
    });
  };

  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };

  return (
    <PostList.Provider
      value={{
        postList,
        addPost,
        deletePost,
      }}
    >
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;

import React, { useContext, useRef } from "react";
import { PostList } from "../store/post-list-store";

const Forms = () => {
  const { addPost } = useContext(PostList);
  const userId = useRef();
  const titleName = useRef();
  const bodyContent = useRef();
  const noReaction = useRef();
  const noHashtag = useRef();

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the default form submission behavior

    // Call the addPost function or perform your desired actions
    addPost(
      userId.current.value,
      titleName.current.value,
      bodyContent.current.value,
      noReaction.current.value,
      noHashtag.current.value.split(" ")
    );
  };

  return (
    <>
      <form className="create-post" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="usertitle" className="form-label">
            Enter your User id
          </label>
          <input
            type="text"
            className="form-control"
            id="usertitle"
            ref={userId}
            aria-describedby="emailHelp"
            placeholder="Your User Id"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Post Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            ref={titleName}
            aria-describedby="emailHelp"
            placeholder="How are you today"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="body" className="form-label">
            Post Content
          </label>
          <textarea
            type="text"
            className="form-control"
            id="body"
            ref={bodyContent}
            aria-describedby="emailHelp"
            placeholder="How are you today"
            rows="4"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="reaction" className="form-label">
            Number of reactions
          </label>
          <input
            type="text"
            className="form-control"
            id="reaction"
            ref={noReaction}
            aria-describedby="emailHelp"
            placeholder="How many people reacted to post"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="tags" className="form-label">
            Enter your hashtags
          </label>
          <input
            type="text"
            className="form-control"
            id="tags"
            ref={noHashtag}
            aria-describedby="emailHelp"
            placeholder="Please enter tags using space"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Post
        </button>
      </form>
    </>
  );
};

export default Forms;

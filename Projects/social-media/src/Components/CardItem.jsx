import { useContext } from "react";
import { FaTrash } from "react-icons/fa";
import { PostList } from "../store/post-list-store";

const CardItem = ({ post }) => {
  const { deletePost } = useContext(PostList);

  return (
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">
          {post.title}
          <span
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            onClick={() => {
              deletePost(post.id);
            }}
          >
            <FaTrash />
            <span className="visually-hidden">unread messages</span>
          </span>
        </h5>

        <p className="card-text">{post.body}</p>

        {/* Check if post.tags is an array before mapping over it */}
        {Array.isArray(post.tags) &&
          post.tags.map((tag, index) => (
            <span
              key={index}
              className="badge rounded-pill text-bg-primary tagsName"
            >
              {tag}
            </span>
          ))}
      </div>
    </div>
  );
};

export default CardItem;

const WelcomeMessage = ({ onGetPostClick }) => {
  return (
    <>
      <h1 className="welcome-message">There are no posts</h1>
      <button type="button" class="btn btn-primary" onClick={onGetPostClick}>
        Get Post from server
      </button>
    </>
  );
};

export default WelcomeMessage;

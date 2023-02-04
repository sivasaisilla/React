const Image = (props) => {
  const { Images, Title, Author } = props.book;
  const clickEvent = () => {
    alert("hello");
  };
  return (
    <article className="books">
      <img src={Images} alt="" />
      <h2>{Title}</h2>
      <h4>{Author}</h4>
      <button type="button" onClick={clickEvent}>
        Example
      </button>
    </article>
  );
};

export default Image;

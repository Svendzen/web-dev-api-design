export function ArticlePreview({ title, image, id, onClick }) {
  return (
    <div className="article-preview" onClick={() => onClick(id)}>
      <img src={image} alt={title} />
      <h2>{title}</h2>
    </div>
  );
}

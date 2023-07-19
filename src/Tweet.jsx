export function Tweet({name,content,like,onDelete}) {
  const onLike = () => {
    console.log("LIKE", name);
  }
  return(
  <div className="Tweet">
<button onClick={() => onDelete()} className="delete"> ❌ </button>
    <h3>{name}</h3>
    <p>{content}</p>
    <button onClick={onLike()}> {like} ❤ </button>
  </div>
  );
}

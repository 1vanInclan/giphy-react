

export const GifItem = ({ title, url }) => {
  return (
    <div className="card">
        <div className="imagen">
            <img src={url} alt={title}/>
        </div>
        <div className="title">
            <p>{title}</p>
        </div>
    </div>
  )
}

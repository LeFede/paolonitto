import useChangeTitle from "../functions/useChangeTitle";


const Gallery = ({title}) => {

  useChangeTitle(title)

  return (
    <div className="page">
      <h1>Gallery</h1>
    </div>
  )
}

export default Gallery
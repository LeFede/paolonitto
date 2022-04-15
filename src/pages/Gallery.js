import useChangeTitle from "../functions/useChangeTitle";


const Gallery = ({title}) => {

  useChangeTitle(title)

  return (
    <div>Gallery</div>
  )
}

export default Gallery
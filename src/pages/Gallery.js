import useChangeTitle from "./useChangeTitle";


const Gallery = ({title}) => {

  useChangeTitle(title)

  return (
    <div>Gallery</div>
  )
}

export default Gallery
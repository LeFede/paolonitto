import useChangeTitle from '../functions/useChangeTitle';

const NotFound = ({title}) => {

  useChangeTitle(title)

  return (
    <div>NotFound</div>
  )
}

export default NotFound
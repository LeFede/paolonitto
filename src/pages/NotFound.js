import useChangeTitle from './useChangeTitle';

const NotFound = ({title}) => {

  useChangeTitle(title)

  return (
    <div>NotFound</div>
  )
}

export default NotFound
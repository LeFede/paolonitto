import useChangeTitle from "./useChangeTitle";


const Home = ({title}) => {

  useChangeTitle(title)

  return (
    <div>Home</div>
  )
}

export default Home
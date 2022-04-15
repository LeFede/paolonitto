import { useEffect, useState } from "react";
import useChangeTitle from "../functions/useChangeTitle";



const Home = ({title}) => {

  const [isLoading, setIsLoading] = useState(true)
  useChangeTitle(title)
  
  useEffect(() => {
    setIsLoading(false)
  }, [])

  return (
    <div className={`${isLoading ? 'loading' : ''} page ff-1 fw-10 `}>
      <div>
        <h1>Paolo Nitto
          <div className="bar" />
        </h1>
        <small className="ls-3">Fotografia</small>
      </div>
    </div>
  )
}

export default Home
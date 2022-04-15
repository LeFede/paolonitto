import useChangeTitle from "../functions/useChangeTitle";

const About = ({title}) => {

  useChangeTitle(title)

  return (
    <div className="page">
      <h1>About</h1>
    </div>
  )
}

export default About
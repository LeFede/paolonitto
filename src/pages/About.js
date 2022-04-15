import useChangeTitle from "../functions/useChangeTitle";

const About = ({title}) => {

  useChangeTitle(title)

  return (
    <div>About</div>
  )
}

export default About
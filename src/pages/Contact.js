import useChangeTitle from "../functions/useChangeTitle";



const Contact = ({title}) => {

  useChangeTitle(title)


  return (
    <div className="page">
      <h1>Contact</h1>
      <a className="contact" rel="noopener noreferrer" target="_blank"  href="https://wa.me/+393384296660">CLICK ACA!</a>
    </div>
  )
}

export default Contact


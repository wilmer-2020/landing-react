
const Button = ({type,text,className}) => {
  return (
    <>
        <input type={type} value={text} className={className}/>
    </>
  )
}

export default Button
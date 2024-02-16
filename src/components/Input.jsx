const Input = ({labelText,name,placeholder}) => {
  return (
    <div className="form-group">
        <label htmlFor="">{labelText}</label>
        <input type="text" name={name} placeholder={placeholder}/>
    </div>
  )
}

export default Input
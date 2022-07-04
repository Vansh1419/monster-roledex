import './search-box.component.css'

const SearchBox = (props) => {
    const {className,placeholder,onChangeHandler} = props

    return (
        <input
            type="search"
            className={` search-box ${className}`}
            placeholder={placeholder}
            onChange={onChangeHandler}
        />
    )
}
export default SearchBox
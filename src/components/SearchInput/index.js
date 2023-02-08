import styles from './SearchInput.module.css'
import PropTypes from 'prop-types'

const SearchInput = ({ onSubmit, onChange, value }) => {
    return (
        <form className={styles.form} onSubmit={onSubmit}>
          <input onChange={onChange} value={value} className={styles.input} type='text' placeholder='List'/>
          <button className={styles.addButton} type='submit'>add</button>
        </form>
    )
}

SearchInput.propTypes = {
    onSubmit : PropTypes.func,
    onChange : PropTypes.func,
    value    : PropTypes.string
}

export default SearchInput
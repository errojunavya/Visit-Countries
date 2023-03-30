import './index.css'

const VisitedCountries = props => {
  const {countryDetails, removeVisitedCountry} = props
  const {id, name, imageUrl} = countryDetails

  const onClickRemove = () => {
    removeVisitedCountry(id)
  }

  return (
    <li className="container">
      <img src={imageUrl} alt="thumbnail" className="flag-image" />
      <div className="country-name-remove-button-container">
        <p className="visited-country-name">{name}</p>
        <button type="button" className="button" onClick={onClickRemove}>
          Remove
        </button>
      </div>
    </li>
  )
}
export default VisitedCountries

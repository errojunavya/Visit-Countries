import './index.css'

const CountryItem = props => {
  const {countryDetails, markCountryAsVisited} = props
  const {id, name, isVisited} = countryDetails

  const onClickVisit = () => {
    markCountryAsVisited(id)
  }

  return (
    <li className="country-item-list-container">
      <p className="name">{name}</p>
      {isVisited ? (
        <p className="visited-text">Visited</p>
      ) : (
        <button className="button" type="button" onClick={onClickVisit}>
          Visit
        </button>
      )}
    </li>
  )
}
export default CountryItem

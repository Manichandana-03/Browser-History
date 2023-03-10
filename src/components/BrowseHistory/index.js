import './index.css'

const BrowserHistory = props => {
  const {browseHistory, deleteHistory} = props
  const {id, logoUrl, timeAccessed, title, domainUrl} = browseHistory
  const onDeleteClick = () => {
    deleteHistory(id)
  }

  return (
    <li className="list-container">
      <div className="left-container">
        <p className="time">{timeAccessed}</p>
        <img src={logoUrl} alt="domain logo" className="icon" />
        <p className="title">{title}</p>
        <p className="domain">{domainUrl}</p>
      </div>
      <button onClick={onDeleteClick} type="button" className="right-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default BrowserHistory

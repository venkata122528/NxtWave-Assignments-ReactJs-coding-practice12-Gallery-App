// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {eachThumbnail, isSelected, onClickThumbnail} = props
  const {id, thumbnailUrl, thumbnailAltText} = eachThumbnail
  const className = isSelected ? 'selectedThumbnailImage' : 'eachThumbnailImage'

  const onClickSelectThumbnail = () => {
    onClickThumbnail(id)
  }

  return (
    <li className="eachThumbnailList">
      <button type="button" onClick={onClickSelectThumbnail} className="button">
        <img src={thumbnailUrl} alt={thumbnailAltText} className={className} />
      </button>
    </li>
  )
}

export default ThumbnailItem

import { Link } from 'react-router-dom'
import video1 from './video.mp4'
import { useNavigate } from 'react-router-dom'

const Sales = () => {
  let navigate = useNavigate()
  const handleClick = () => {
    setTimeout(() => {
      navigate(`/sale`)
    }, 300)
  }
  return (
    <div className="-sales-collection" id="sales1">
      <div className="sales-content" id="sales1">
        <div className="video-main" id="sales1">
          <h1>SALE</h1>
          <p>
            BOTH ONLINE & IN STORE <br />
            SALE ENDS ON 8/20
          </p>
          <video
            onClick={handleClick}
            src={video1}
            style={{ width: 800, marginBottom: 100, marginTop: 100 }}
            type="video/mp4"
            autoPlay={true}
            muted={true}
            loop={true}
          />
        </div>
      </div>
    </div>
  )
}
export default Sales

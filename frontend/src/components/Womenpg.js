import { useNavigate } from 'react-router-dom'

const WomenPg = () => {
  let navigate = useNavigate()
  const handleClick = () => {
    setTimeout(() => {
      navigate(`/women`)
    }, 300)
  }
  return (
    <div className="collection" id="womnapg">
      <div className="content">
        <img
          onClick={handleClick}
          id="collection"
          style={{ width: 450, marginBottom: 100, display: 'block' }}
          src="https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F21%2F15%2F21159baf37cf9f2a5c066b5565f2f627039cf4eb.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bladies_dresses_mididresses%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]"
          alt=""
        ></img>
      </div>
    </div>
  )
}
export default WomenPg

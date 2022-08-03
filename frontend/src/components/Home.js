import { Link } from 'react-router-dom'

import Collection from './Collection'
import WomenPg from './Womenpg'
import Sales from './Sales'

const Home = () => {
  return (
    <div>
      <Collection />
      <WomenPg />
      <Sales />

      <footer className="footer-home">
        <ul>
          <li>
            <a href="#collection">Collection</a>
          </li>
          <li>
            <a href="#womnapg">Women</a>
          </li>
          <li>
            <a href="#sales1">Sale</a>
          </li>
        </ul>
      </footer>
    </div>
  )
}
export default Home

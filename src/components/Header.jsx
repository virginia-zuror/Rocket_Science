import './Header.css'

const Header = () => {
  return (
    <div id='header' className='header' >
          <div className='title'>
            <h1>It is R</h1>
            <img src='https://res.cloudinary.com/do7bnejaz/image/upload/v1682679882/assets_rocket/flat_750x_075_f-pad_750x1000_f8f8f8_zngnl1.jpg' alt='rocket drawing'/>
            <h1>cket Science!</h1>
          </div>
        <nav>
            <ul>
                <li><a href='#start'>Start</a></li>
                <li><a href='#rockets'>Rockets</a></li>
            </ul>
        </nav>
    </div>
  )
}

export default Header
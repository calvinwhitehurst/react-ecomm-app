import React from 'react'
import { Link } from 'gatsby'

const Header = () => (
  <header>
    <div className='pusher'>
      <div
        className='ui fixed menu asd borderless'
        style={{
          height: '80px!important',
          borderRadius: '0!important',
          border: '0',
          WebkitTransitionDuration: '0.1s',
          paddingLeft: '1.5%',
          paddingRight: '1.5%'
        }}
      >
        <Link className='item' to='/'>
          Log Out
        </Link>
        <div className='item'>
          {/* <img className="ui avatar image" src="#"></img> */}
          <div className='content'>
            <div className='header'>
              <b>Username</b>
            </div>
          </div>
        </div>
        <div className='item'>
          <div className='ui input search db'>
            <div className='ui massive icon input'>
              <input
                type='text'
                className='prompt'
                name='search'
                value=''
                placeholder='Search...'
              />
            </div>
            <div className='results'></div>
          </div>
          <input type='submit' value='Search' className='ui button' />
        </div>
        <div className='right menu'>
          <div className='ui simple fixed dropdown item'>
            <div className='text'>Sync A Store</div>
            <i className='dropdown icon'></i>
            <div className='menu'>
              <p>No stores are connected</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
)

export default Header

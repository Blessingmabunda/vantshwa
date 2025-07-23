import React, { useState } from 'react';
import { mdiMenu } from '@mdi/js';
import Icon from '@mdi/react';

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleSidebarToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <header style={{
      backgroundColor: '#00183d',
      backgroundColor: Colors.white,
      color: '#fff',
      padding: '1em',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <div style={{
        fontSize: '1.5em',
        fontWeight: 'bold'
      }}>
      <img src={require('./../../assets/logo.png')} style={{ width: '100px', height: 'auto' }} />

      </div>
      <nav>
        <ul style={{
          listStyle: 'none',
          margin: 0,
          padding: 0,
          display: 'flex'
        }}>
          <li>
            <button onClick={handleSidebarToggle} style={{
              backgroundColor: '#00183d',
              color: '#fff',
              border: 'none',
              padding: '10px 20px',
              fontSize: '16px',
              cursor: 'pointer'
            }}>
              <Icon path={mdiMenu} size={1} color="#fff" />
            </button>
          </li>
        </ul>
      </nav>
      {sidebarOpen && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '200px',
          height: '100vh',
          backgroundColor: '#00183d',
          padding: '20px',
          display: 'block'
        }}>
          <ul style={{
            listStyle: 'none',
            margin: 0,
            padding: 0
          }}>
            <li style={{
              marginBottom: '10px'
            }}>
              <a href="#" style={{
                color: '#fff',
                textDecoration: 'none'
              }}>
                Menu Item 1
              </a>
            </li>
            <li style={{
              marginBottom: '10px'
            }}>
              <a href="#" style={{
                color: '#fff',
                textDecoration: 'none'
              }}>
                Menu Item 2
              </a>
            </li>
            <li style={{
              marginBottom: '10px'
            }}>
              <a href="#" style={{
                color: '#fff',
                textDecoration: 'none'
              }}>
                Menu Item 3
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
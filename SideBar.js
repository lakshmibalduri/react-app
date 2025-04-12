function SideBar() {
    return (
      <div style={{
        height: '30vh',
        width: '100px',
        backgroundColor:'green',
        color: 'white',
        padding: '50px',
        position: 'fixed',
        top: 80,
        left: 10,
        borderRadius:'5px',
        marginTop:'90px',
      }}>
        
        <ul style={{ listStyle: 'none', padding: '0'}}>
          <li style={{ margin: '30px 5px 5px', color:'white', fontSize:'15px'}}><button>FILTER BY CATEGORY</button></li>
          <li style={{ margin: '100px 5px 5px', color:'white', fontSize:'15px'}}><button>FILTER BY RANGE</button>
          </li>
          </ul>
      </div>
    );
  }
  export default SideBar;
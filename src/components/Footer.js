import React, { Component } from 'react'

export class Footer extends Component {
  render() {
    return (
        <div >
  <footer className="text-center text-lg-start" style={{backgroundColor: "#db6930"}}>
    <div className="container d-flex justify-content-center py-5">
      <button type="button" className="btn btn-primary btn-floating mx-2 rounded-circle" style= {{backgroundColor: "dark",fontSize:"2rem"}}>
      <a className="text-white" target={"_blank"} href="https:www.facebook.com/adnan6456" style={{textDecoration:"None"}}><i className="bi bi-facebook"></i></a>
      </button>
      <button type="button" className="btn btn-primary btn-floating mx-2 rounded-circle" style={{backgroundColor: "dark",fontSize:"2rem"}}>
      <a className="text-white" target={"_blank"} href="https://www.linkedin.com/in/csadnanpathan" style={{textDecoration:"None"}}><i className="bi bi-linkedin"></i></a>
      </button>
      <button type="button" className="btn btn-primary btn-floating mx-2 rounded-circle" style={{backgroundColor: "dark",fontSize:"2rem"}}>
        <a className="text-white" target={"_blank"} href="https:www.github.com/adnan6456" style={{textDecoration:"None"}}><i className="bi bi-github"></i></a>
      </button>
      <button type="button" className="btn btn-primary btn-floating mx-2 rounded-circle" style={{backgroundColor: "dark",fontSize:"2rem"}}>
      <a className="text-white" target={"_blank"} href="https:www.twitter.com/I_am_KhanAdnan" style={{textDecoration:"None"}}><i class="bi bi-twitter"></i></a>
      </button>
    </div>
    <div className="text-center text-white p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"} }>
      © 2022 Copyright:
      <a className="text-white" target={"_blank"} href="https:www.github.com/adnan6456" style={{textDecoration:"None"}}>Deluxe News</a>
    </div>
    
  </footer>
  
    </div>
    
    )
  }
}

export default Footer


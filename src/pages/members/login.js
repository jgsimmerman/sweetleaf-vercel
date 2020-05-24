import React from 'react'
import useMagicLink from 'use-magic-link'
import MembersArea from '../../components/MembersArea'


export default function Login() {
  const auth = useMagicLink('pk_test_8659A943739758FA');

  function loginNow() {
    //const email = prompt('Enter your email');
    auth.login(email);
  }

  function getContent() {
    if (auth.loading || auth.loggingIn || auth.loggingOut) {
      return 'Loading...'
    }

    if (auth.loggedIn) {
      return (
        <div>
          <MembersArea />
          <br/>
          <button onClick={() => auth.logout()}>Logout</button>
        </div>
      )
    }

    return (
      // <div>
      //   <button onClick={loginNow}>Login Now</button>
      // </div>
      <>
      <h2>Please sign up or login</h2>
      <form onSubmit={loginNow}>
        <input type="email" name="email" required="required" placeholder="Enter your email" />
        <button type="submit">Submit</button>
      </form>
      </>
    )
  }

  return (
    <div className="container">
      <main>
        <h1>Sweet Leaf Members Area</h1>
        <div className="content">{getContent()}</div>
      </main>

    <style jsx>{`
      .container {
        margin: 200px 0;
        text-align: center;
        font-family: Arial;
      }
      .content {
        margin: 20px 0;
      }
    `}</style>
    </div>
  )
}
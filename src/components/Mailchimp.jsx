import addToMailchimp from "gatsby-plugin-mailchimp"
import React, { useState } from "react"
import Button from "../components/Button"

const Mailchimp = () => {
  const [email, setEmail] = useState()
  const [message, setMessage] = useState()
  const [disabled, setDisabled] = useState(false)

  const handleSubmit = async event => {
    event.preventDefault()
    setDisabled(true)
    setMessage("Sending...")
    const response = await addToMailchimp(email)
    if (response.result === "error") {
      if (response.msg.toLowerCase().includes("already subscribed")) {
        setMessage("You're already on to the list!")
      } else {
        setMessage("Some error occured while subscribing you to the list.")
      }
      setDisabled(false)
    } else {
      // Wheel selectItem call here
      setMessage(
        "Thanks! Please check your e-mail and click the confirmation link."
      )
    }
  }

  return (
    <div >
      
      <form onSubmit={handleSubmit}>
        <input
          aria-label="Email address"
          className="appearance-none w-full sm:max-w-xs px-5 py-3 border border-gray-400 leading-snug rounded-md text-gray-900 bg-white placeholder-gray-600 focus:outline-none focus:shadow-outline focus:border-blue-300 transition duration-150 ease-in-out"
          onChange={event => setEmail(event.target.value)}
          placeholder="Enter your email"
          required
          type="email"
        />
        <div >
          <Button disabled={disabled}>Sign up</Button>
        </div>
      </form>
      <div>
        {message}
      </div>
    </div>
  )
}

export default Mailchimp
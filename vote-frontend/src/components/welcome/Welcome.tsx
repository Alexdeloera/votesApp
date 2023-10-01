import './Welcome.css'
export const Welcome = () => {
  return (
    <section className="welcome-container">
      <h1 className="welcome-title">Welcome to Vote!</h1>
      <p className="welcome-p"> this application will allow you to express your ideas about how to improve your community. </p>
      <p className="welcome-p">so come and post your ideas and vote for those of others, together we can make our cities a better place to live in!</p>
      <p className="welcome-p mb-4">Sign up or log in to get started!</p>
    </section>
  )
}
function Navbar() {
  return (
    <nav className="navbar">
      <div
        className="navbar-logo"
        onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: 'smooth',
          })
        }}
        role="button"
        tabIndex={0}
      >
        PRAJWAL
      </div>

      <div className="navbar-links">
        <button onClick={() => {
          document.getElementById('about')?.scrollIntoView({
            behavior: 'smooth',
          })
        }}>
          About
        </button>

        <button onClick={() => {
          document.getElementById('skills')?.scrollIntoView({
            behavior: 'smooth',
          })
        }}>
          Skills
        </button>

        <button onClick={() => {
          document.getElementById('projects')?.scrollIntoView({
            behavior: 'smooth',
          })
        }}>
          Projects
        </button>

        <button onClick={() => {
          document.getElementById('experience')?.scrollIntoView({
            behavior: 'smooth',
          })
        }}>
          Experience
        </button>

        <button onClick={() => {
          document.getElementById('contact')?.scrollIntoView({
            behavior: 'smooth',
          })
        }}>
          Contact
        </button>

        <button onClick={() => {
          window.open('/Prajwal_Sortur_CV.pdf', '_blank')
        }}>
          CV
        </button>
      </div>
    </nav>
  )
}

export default Navbar


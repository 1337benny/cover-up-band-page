import './App.css'

function App() {
  return (
    <>
      <section className="hero">
        <img src="pictures/_Y0A7053.jpg" alt="Cover Up spelar live" className="hero__img" />
        <div className="hero__overlay" />
        <div className="hero__content">
          <h1>Cover Up</h1>
          <p>Ditt lokala rock band</p>
          <a href="#kontakt" className="hero__btn">Bokning</a>
        </div>
      </section>

      <section className="middle">
        <div className="about">
          <h2>Det är vi som är Cover Up</h2>
          <p>
            Vi är ett gäng musikälskare som samlats kring glädjen att spela
            tillsammans. Med erfarenhet från många år på scen och en bred
            repertoar bjuder vi på musik som passar både stora och små
            tillställningar.
          </p>
          <p>
            För oss handlar musik om gemenskap, spelglädje och att skapa minnesvärda stunder för vår publik. Oavsett om det gäller danskvällar, företagsevenemang, födelsedagsfester eller andra arrangemang ser vi fram emot att underhålla och sprida god stämning.
          </p>

        </div>

        <div className="contact" id="kontakt">
          <h2>Bokning &amp; Kontakt</h2>
          <p>Vill du boka Cover Up till ditt evenemang?</p>
          <p>
            Vi spelar vid olika typer av arrangemang och anpassar oss efter
            publik och tillfälle. Tveka inte att höra av dig om du vill veta
            mer om vårt utbud, tillgängliga datum eller få en offert.
          </p>
          <p>
            <strong>Kontaktperson:</strong> Anders Andersson<br />
            <strong>Telefon:</strong> 070-123 45 67<br />
            <strong>Epost:</strong>{' '}anders@coverup.se
          </p>
        </div>
      </section>
      <section className="bottom">
        <img src="pictures/_Y0A7236.jpg" alt="Cover Up live 1" className="bottom__img" />
        <img src="pictures/_Y0A7082.jpg" alt="Cover Up live 2" className="bottom__img" />
        <img src="pictures/_Y0A7153.jpg" alt="Cover Up live 3" className="bottom__img" />
      </section>
    </>
  )
}

export default App
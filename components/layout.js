import Head from 'next/head';
import Link from 'next/link';

const Layout = ({ children }) => (
  <>
    <Head>
      <title>Chuck Norris App</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>

    <nav class="navbar is-warning is-expanded" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="/">
          Chuck Norris
        </a>

        <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          <a href="/" class="navbar-item">
            Home
          </a>

          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">
              Categories
            </a>

            <div class="navbar-dropdown">
              <a href="/animal" class="navbar-item">
                Animal
              </a>

              <a href="/career" class="navbar-item">
                Career
              </a>

              <a href="/celebrity" class="navbar-item">
                Celebrity
              </a>

              <a href="/dev" class="navbar-item">
                Dev
              </a>
              
              <a href="/explicit" class="navbar-item">
                Explicit
              </a>
              
              <a href="/fashion" class="navbar-item">
                Fashion
              </a>

              <a href="/food" class="navbar-item">
                Food
              </a>

              <a href="/history" class="navbar-item">
                History
              </a>

              <a href="/money" class="navbar-item">
                Money
              </a>
              
              <a href="/movie"class="navbar-item">
                Movie
              </a>
              
              <a href="/music" class="navbar-item">
                Music
              </a>

              <a href="/politician" class="navbar-item">
                Politician
              </a>

              <a href="/religion" class="navbar-item">
                Religion
              </a>

              <a href="/science" class="navbar-item">
                Science
              </a>

              <a href="sport" class="navbar-item">
                Sport
              </a>

              <a href="travel" class="navbar-item">
                Travel
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <div className="container"> 
      {children}
    </div>
  </>
);

export default Layout;

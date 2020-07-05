import Head from 'next/head';

const Layout = ({ children }) => (
  <>
    <Head>
      <title>Chuck Norris App</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>

    <nav class="navbar is-warning" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="https://bulma.io">
          <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
        </a>

        <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          <a class="navbar-item">
            Home
          </a>

          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">
              Categories
            </a>

            <div class="navbar-dropdown">
              <a class="navbar-item">
                Animal
              </a>
              <a class="navbar-item">
                Career
              </a>
              <a class="navbar-item">
                Celebrity
              </a><a class="navbar-item">
                Dev
              </a><a class="navbar-item">
                Explicit
              </a><a class="navbar-item">
                Fashion
              </a><a class="navbar-item">
                Food
              </a><a class="navbar-item">
                History
              </a><a class="navbar-item">
                Money
              </a><a class="navbar-item">
                Movie
              </a><a class="navbar-item">
                Music
              </a><a class="navbar-item">
                Politician
              </a><a class="navbar-item">
                Religion
              </a><a class="navbar-item">
                Science
              </a>
              <a class="navbar-item">
                Sport
              </a>
              <a class="navbar-item">
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

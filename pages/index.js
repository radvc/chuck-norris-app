import Head from 'next/head'
import Layout from '../components/layout';
import axios from 'axios';
import moment from 'moment';

const Home = ({ item }) => {
  return (
    <Layout>
      <div className="columns my-6">
        <div className="column is-half is-offset-one-quarter">
          <div className="box">
            <article className="media">
              <div className="media-left">
                <figure className="image is-64x64">
                  <img src={item.icon_url} alt="Image" />
                </figure>
              </div>
              <div className="media-content">
                <div className="content">
                  <p>
                    <strong>Chuck Norris</strong> <small>@chucknorris</small> <small>{moment(item.created_at).fromNow()}</small>
                    <br />
                    {item.value} 
                  </p>
                </div>
                <nav className="level is-mobile">
                  <div className="level-left">
                    <a className="level-item" aria-label="reply">
                      <span className="icon is-small">
                        <i className="fas fa-reply" aria-hidden="true"></i>
                      </span>
                    </a>
                    <a className="level-item" aria-label="retweet">
                      <span className="icon is-small">
                        <i className="fas fa-retweet" aria-hidden="true"></i>
                      </span>
                    </a>
                    <a className="level-item" aria-label="like">
                      <span className="icon is-small">
                        <i className="fas fa-heart" aria-hidden="true"></i>
                      </span>
                    </a>
                  </div>
                </nav>
              </div>
            </article>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export async function getServerSideProps() {
  const request = await axios('https://api.chucknorris.io/jokes/random');
  return { props: { item: request.data } };
}

export default Home;

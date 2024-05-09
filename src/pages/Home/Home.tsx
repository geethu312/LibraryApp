import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import CarouselPage from "../../components/CarousalPage/CarousalPage";
import Blog_Img1 from "../../Images/Blog_Img 1.jpg";
import Blog_Img2 from "../../Images/Blog_Img 2.jpg";
import Blog_Img3 from "../../Images/Blog_Img 3.jpg";
import googleplaybadge from "../../Images/google-play-badge.png";

import "./Home.scss";

function Home() {
  const navigate = useNavigate();

  const navigateToBooks = () => {
    navigate("/books");
  };

  return (
    <>
      <CarouselPage />
      <div className="content">
        <div className="search-area">
          <button className="list-btn" onClick={navigateToBooks}>
            Click Here to Find Books
          </button>
        </div>
        <div className="text">
          <h4 className="introducing">Introducing your ereader mobile app!</h4>
          <h1 className="title">THE BOOK STORE</h1>
          <h4 className="best-experience">Get The Best Reading Experience</h4>
          <h5 className="free-download">
            FREE DOWNLOAD • GENRES • BESTSELLERS • BOOK CATALOG
          </h5>
          <p className="now-available">NOW AVAILABLE</p>
        </div>
      </div>
      <div className="blog">
        <h2>Blog</h2>
        <div className="blog-content">
          <div className="blog-post">
            <img src={Blog_Img1} alt="Blog Post 1" className="blog-image" />
            <div className="blog-text">
              <h3>Understanding React useEffect</h3>
              <p>
                The React useEffect hook is a powerful tool in the React
                developer's arsenal. It allows you to perform side effects in
                your functional components, such as data fetching,
                subscriptions, or manually changing the DOM. This article aims
                to provide a comprehensive understanding of the useEffect hook,
                its usage, and best practices.
              </p>
            </div>
          </div>
          <div className="blog-post">
            <img src={Blog_Img2} alt="Blog Post 2" className="blog-image" />
            <div className="blog-text">
              <h3>
                The Best React Chart Libraries for Data Visualization in 2024
              </h3>
              <p>
                Data visualization has become an essential aspect of modern
                applications, with businesses and individuals relying on
                visually appealing and informative charts to make data-driven
                decisions. The rise of React, a popular JavaScript library for
                building user interfaces, has led to an increased demand for a
                React chart library that's both powerful and easy to integrate
                into applications. In this article, we'll explore the most
                popular React charting libraries for data visualization in 2024,
                providing insights into their key features, usage examples, and
                tips for choosing the right library for your React project.
              </p>
            </div>
          </div>
          <div className="blog-post">
            <img src={Blog_Img3} alt="Blog Post 3" className="blog-image" />
            <div className="blog-text">
              <h3>Mastering the JavaScript switch Statement</h3>
              <p>
                The JavaScript switch statement is a way to make decisions in
                your code based on different conditions. It is a more organized
                and concise alternative to using multiple if-else statements.
                The switch statement evaluates a given expression, which can be
                a variable or a value, and compares it to several possible
                cases. If the value of the expression matches one of the cases,
                the associated code block (a set of instructions) is executed.
                If no match is found, an optional default case can be executed
                as a fallback, meaning it runs when none of the other cases
                apply.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-banner">
        <div className="container download-app">
          <a
            href="https://play.google.com/store/games"
            target="_blank"
            rel="noreferrer nofollow"
            className="google-app-link"
          >
            <img
              className="google-play"
              src={googleplaybadge}
              alt="google-play"
            />
          </a>
          <a
            href="https://www.apple.com/store"
            target="_blank"
            rel="noreferrer nofollow"
            className="apple-app-link"
          >
            <img
              src="https://manybooks.net/themes/custom/mnybks/images/mobile-app-banner/app-store.png"
              alt="app-store"
            />
          </a>
        </div>
      </div>
      <Footer />
      <div className="copyright">
        <p>&copy; 2024 The Book Shop. All rights reserved.</p>
      </div>
    </>
  );
}

export default Home;

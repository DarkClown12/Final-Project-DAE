import "./Read.css";
import Helmet from "react-helmet";
import Card from "./Card";
import { HashLink as Link } from "react-router-hash-link";

function Read() {
  return (
    <section className="nav" id="read">
      <h1 className="top">CYBERSECURER</h1>
      <Helmet>
        <style>{"body {background-color: #E1A3FF ;}"}</style>
      </Helmet>
      {/* NAVBARSTARTS */}
      <nav className="navbarall">
        <Link to="/" className="button">
          <h2 className="navbarall">HOME</h2>
        </Link>

        <Link to="/Watch" className="button">
          <h2 className="navbarall">WATCH</h2>
        </Link>

        <Link to="/Feedback" className="button">
          <h2 className="navbarall">FEEDBACK</h2>
        </Link>
      </nav>

      <div className="shopping-cards">
        <br />
        <br />
        <br />
        <section class="cards">
          <article class="card card--12">
            <div class="card__info-hover"></div>
            <div class="card__img"></div>
            <Link to="/Check" class="card_link">
              <div class="card__img--hover"></div>
            </Link>
            <div class="card__info">
              <span class="card__category"> READ ABOUT FANCY BEAR </span>
              <h3 class="card__title">
                <a
                  href="https://en.wikipedia.org/wiki/Fancy_Bear"
                  class="card__title"
                >
                  {" "}
                  FANCY BEAR
                </a>
              </h3>
              {/* <span class="">
                {" "}
                Price:
                <a href="#" class="card__author" title="author">
                  {" "}
                  $30
                </a>
              </span> */}
            </div>
          </article>

          <article class="card card--22">
            <div class="card__info-hover"></div>
            <div class="card__img"></div>
            <Link to="/Check" class="card_link">
              <div class="card__img--hover"></div>
            </Link>
            <div class="card__info">
              <span class="card__category"> READ </span>
              <h3 class="card__title">
                <a
                  href="https://fox5sandiego.com/news/local-news/hackers-target-san-diego-unified-school-district/"
                  class="card__title"
                >
                  HACKER TARGET SAN DEIGO SCHOOL DISTRICT....
                </a>
              </h3>
              {/* <span class="">
                {" "}
                Price:
                <a href="#" class="card__author" title="author">
                  $30
                </a>
              </span> */}
            </div>
          </article>

          <article class="card card--32">
            <div class="card__info-hover"></div>
            <div class="card__img"></div>
            <Link to="/Check" class="card_link">
              <div class="card__img--hover"></div>
            </Link>
            <div class="card__info">
              <span class="card__category">READ</span>
              <h3 class="card__title">
                <a
                  href="https://www.wsj.com/articles/parents-who-share-info-about-their-kids-online-are-a-cybersecurity-risk-heres-why-11670021383"
                  class="card__title"
                >
                  DON'T SHARE EVERYTHING YOUR KID DOES ON SOCIAL MEDIA...
                </a>
              </h3>
              {/* <span class="">
                {" "}
                Price:
                <a href="#" class="card__author" title="author">
                  {" "}
                  $12
                </a>
              </span> */}
            </div>
          </article>
        </section>
        <br />
        <br />

        <section class="cards">
          <br />
          <br />

          <article class="card card--42">
            <div class="card__info-hover"></div>
            <div class="card__img"></div>
            <Link to="/Check" class="card_link">
              <div class="card__img--hover"></div>
            </Link>
            <div class="card__info">
              <span class="card__category">
                DON'T READ ALL EMAIL THAT ARE UNKNOWN....{" "}
              </span>
              <h3 class="card__title">
                {" "}
                <a
                  href="https://www.straitstimes.com/singapore/man-who-lost-149k-after-clicking-on-phishing-e-mail-among-at-least-10-victims-in-case-cyber-attack"
                  class="card__title"
                >
                  {" "}
                  READ HOW A MAN LOST $149K BY CLICKING ON A PHISHING E-MAIL...
                </a>
              </h3>
              {/* <span class="">
                {" "}
                Price:
                <a href="#" class="card__author" title="author">
                  {" "}
                  $40
                </a>
              </span> */}
            </div>
          </article>

          <article class="card card--52">
            <div class="card__info-hover"></div>
            <div class="card__img"></div>
            <Link to="/Check" class="card_link">
              <div class="card__img--hover"></div>
            </Link>
            <div class="card__info">
              <span class="card__category">
                CYBERSECURITY EDUCATION IS IMPORTANT.....
              </span>
              <h3 class="card__title">
                <a
                  href="https://www.cnbc.com/video/2022/11/17/cyber-security-education-needs-to-be-increased-to-ward-off-threats-principal-deputy-national-cyber-director-says.html"
                  class="card__title"
                >
                  Principal Deputy National Cyber Director says"Cyber security
                  education needs to be increased to ward off threats,"....
                </a>
              </h3>
              {/* <span class="">
                {" "}
                Price:
                <a href="#" class="card__author" title="author">
                  {" "}
                  $40
                </a>
              </span> */}
            </div>
          </article>

          <article class="card card--62">
            <div class="card__info-hover"></div>
            <div class="card__img"></div>
            <Link to="/Check" class="card_link">
              <div class="card__img--hover"></div>
            </Link>
            <div class="card__info">
              <span class="card__category">TIK TOK IS BAD </span>
              <h3 class="card__title">
                <a
                  href="https://www.cnbc.com/2022/11/18/white-house-cyber-director-on-tiktok-chinas-influence-campaign.html"
                  class="card__title"
                >
                  HOW US GOVERMENT IS THINKING ABOUT TIK TOK....
                </a>
              </h3>
              {/* <span class="">
                {" "}
                Price:
                <a href="#" class="card__author" title="author">
                  {" "}
                  $50
                </a>
              </span> */}
            </div>
          </article>
          {/* <Card /> */}
        </section>
      </div>
    </section>
  );
}
export default Read;

// https://media.wired.com/photos/603d163e816a0ad2a36d5b4e/master/pass/Hero_Gif-01.gif

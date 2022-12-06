import "./Card.css";
import Helmet from "react-helmet";
import { Link } from "react-router-dom";
export default function Cards() {
  return (
    {
      /* <p> {props.title} </p>
      <img src={props.image} />
      <p> {props.price} </p>
      <p>{props.description} </p> */
    },
    (
      <div className="shopping-cards">
        <br />
        <br />
        <br />
        <section class="cards">
          <article class="card card--1">
            <div class="card__info-hover"></div>
            <div class="card__img"></div>
            <Link to="/Check" class="card_link">
              <div class="card__img--hover"></div>
            </Link>
            <div class="card__info">
              <span class="card__category">DOCUMENTARY ON EVIL CROP </span>
              <h3 class="card__title">
                <a
                  href="https://www.youtube.com/watch?v=j-TDQcB0js0/"
                  class="card__title"
                >
                  CLICK HERE TO WATCH AND LEARN MORE ABOUT WHAT EVIL CROP IS...{" "}
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

          <article class="card card--2">
            <div class="card__info-hover"></div>
            <div class="card__img"></div>
            <Link to="/Check" class="card_link">
              <div class="card__img--hover"></div>
            </Link>
            <div class="card__info">
              <span class="card__category"> WATCH</span>
              <h3 class="card__title">
                <a
                  href="https://www.youtube.com/watch?v=inWWhr5tnEA/"
                  class="card__title"
                >
                  UNDERSTAND BASIC CYBERSECURITY IN 7mins...
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

          <article class="card card--3">
            <div class="card__info-hover"></div>
            <div class="card__img"></div>
            <Link to="/Check" class="card_link">
              <div class="card__img--hover"></div>
            </Link>
            <div class="card__info">
              <span class="card__category">WATCH</span>
              <h3 class="card__title">
                <a
                  href="https://www.youtube.com/watch?v=GSNopHdNnKE/"
                  class="card__title"
                >
                  HOW HACKERS STOLE $1BILLION FROM BANKS...
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

          <article class="card card--4">
            <div class="card__info-hover"></div>
            <div class="card__img"></div>
            <Link to="/Check" class="card_link">
              <div class="card__img--hover"></div>
            </Link>
            <div class="card__info">
              <span class="card__category">LEARN</span>
              <h3 class="card__title">
                <a
                  href="https://www.youtube.com/watch?v=vApjw9nwPGE/"
                  class="card__title"
                >
                  HERE SOME WISE WORDS ABOUT LEARNING CYBERSECURITY FROM "BOYD
                  CLEWIS" ....
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

          <article class="card card--5">
            <div class="card__info-hover"></div>
            <div class="card__img"></div>
            <Link to="/Check" class="card_link">
              <div class="card__img--hover"></div>
            </Link>
            <div class="card__info">
              <span class="card__category">
                DON'T PLUG ANY USB TO YOUR DEVICE....{" "}
              </span>
              <h3 class="card__title">
                <a
                  href="https://www.youtube.com/shorts/rD5H6uVl8Hk"
                  class="card__title"
                >
                  {" "}
                  THIS IS HOW SOMEONES USB COULD DESTORY YOUR COMPUTER...
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

          <article class="card card--6">
            <div class="card__info-hover"></div>
            <div class="card__img"></div>
            <Link to="/Check" class="card_link">
              <div class="card__img--hover"></div>
            </Link>
            <div class="card__info">
              <span class="card__category">SKILLS</span>
              <h3 class="card__title">
                <a
                  href="https://www.youtube.com/watch?v=Kx4y9c7w2JQ"
                  class="card__title"
                >
                  5 SKILLS YOU NEED TO LEARN BEFORE GETTING INTO
                  CYBERSECURITY...
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

          {/* 
          <article class="card card--7">
            <div class="card__info-hover"></div>
            <div class="card__img"></div>
            <Link to="/Check" class="card_link">
              <div class="card__img--hover"></div>
            </Link>
            <div class="card__info">
              <span class="card__category">Games </span>
              <h3 class="card__title">Mario Kart 8 Deluxe</h3>
              <span class="">
                {" "}
                Price:
                <a href="#" class="card__author" title="author">
                  {" "}
                  $40
                </a>
              </span>
            </div>
          </article>

          <article class="card card--8">
            <div class="card__info-hover"></div>
            <div class="card__img"></div>
            <Link to="/Check" class="card_link">
              <div class="card__img--hover"></div>
            </Link>
            <div class="card__info">
              <span class="card__category">Games </span>
              <h3 class="card__title">Mortal Kombat 11 Ultimate</h3>
              <span class="">
                {" "}
                Price:
                <a href="#" class="card__author" title="author">
                  {" "}
                  $15
                </a>
              </span>
            </div>
          </article>
        </section>

        <br />
        <br />
        <section class="cards">
          <article class="card card--9">
            <div class="card__info-hover"></div>
            <div class="card__img"></div>
            <Link to="/Check" class="card_link">
              <div class="card__img--hover"></div>
            </Link>
            <div class="card__info">
              <span class="card__category">Games </span>
              <h3 class="card__title">Grand Theft Auto V</h3>
              <span class="">
                {" "}
                Price:
                <a href="#" class="card__author" title="author">
                  {" "}
                  $10
                </a>
              </span>
            </div>
          </article>

          <article class="card card--10">
            <div class="card__info-hover"></div>
            <div class="card__img"></div>
            <Link to="/Check" class="card_link">
              <div class="card__img--hover"></div>
            </Link>
            <div class="card__info">
              <span class="card__category">Games </span>
              <h3 class="card__title">Subnautica</h3>
              <span class="">
                {" "}
                Price:
                <a href="#" class="card__author" title="author">
                  {" "}
                  $15
                </a>
              </span>
            </div>
          </article>

          <article class="card card--11">
            <div class="card__info-hover"></div>
            <div class="card__img"></div>
            <Link to="/Check" class="card_link">
              <div class="card__img--hover"></div>
            </Link>
            <div class="card__info">
              <span class="card__category">Games </span>
              <h3 class="card__title">Call of Duty: Modern Warfare II </h3>
              <span class="">
                {" "}
                Price:
                <a href="#" class="card__author" title="author">
                  {" "}
                  $50
                </a>
              </span>
            </div>
          </article>

          <article class="card card--12">
            <div class="card__info-hover"></div>
            <div class="card__img"></div>
            <Link to="/Check" class="card_link">
              <div class="card__img--hover"></div>
            </Link>
            <div class="card__info">
              <span class="card__category">Games </span>
              <h3 class="card__title">Call of Duty Black Ops III</h3>
              <span class="">
                {" "}
                Price:
                <a href="#" class="card__author" title="author">
                  {" "}
                  $15
                </a>
              </span>
            </div>
          </article> */}
        </section>
      </div>
    )
  );
}

import React, { Component } from "react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

import "./style.css";
export default class Portfolio extends Component {
  render() {
    let portfolioDB = this.props.portfolioDB;
    return (
      <>
        <Header />

        <h1 id="title">Portfolio</h1>
        <div>
          {portfolioDB.portfolio &&
            portfolioDB.portfolio.map((item) => {
              return (
                <div id="portfolio-item">
                  <div className="item-wrap">
                    <a classname="link-icon" href={`${item.website}`}>
                      <img src={`${item.img}`} id="item-img" />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>{item.title}</h5>
                          <p>{item.description}</p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              );
            })}
        </div>

        <Footer />
      </>
    );
  }
}
import './App.css';
import React, { useEffect, useState, useRef } from 'react';
import SettingsModal from "./components/SettingsModal";
import ContentComponent from "./components/ContentComponent";

const App = () => {
  const [settingsModal, setSettingsModal] = useState(false);
  const firstLoad = useRef(false); // prevent settingsModal state from rendering twice

  useEffect(() => {
    var hdr = document.getElementsByClassName("tracker-header");
    var i;

    for (i = 0; i < hdr.length; i++) {
      hdr[i].nextElementSibling.style.maxHeight = hdr[i].nextElementSibling.scrollHeight + "px";
      hdr[i].addEventListener("click", function () {
        var elm = this.nextElementSibling;
        if (elm.style.maxHeight !== "0px") {
          elm.style.maxHeight = "0";
          elm.parentElement.classList.add("collapsed");
        } else {
          elm.style.maxHeight = elm.scrollHeight + "px";
          elm.parentElement.classList.remove("collapsed");
        }
      });
    }
  }, []);

  useEffect(() => {
    var item = document.getElementsByClassName("nav-item");
    var i;

    for (i = 0; i < item.length; i++) {
      item[i].addEventListener("click", function () {
        var item = document.getElementsByClassName("nav-item");
        var i;

        for (i = 0; i < item.length; i++) {
          item[i].classList.remove("active");
          var wrapper = document.getElementsByClassName(item[i].getAttribute('data-name'));
          if (wrapper[0]) {
            wrapper[0].classList.add("hidden-item");
          }
        }
        this.classList.add("active");
        var wrapper = document.getElementsByClassName(this.getAttribute('data-name'));
        if (wrapper[0]) {
          wrapper[0].classList.remove("hidden-item");
        }
      });
    }
  }, []);

  useEffect(() => {
    if (firstLoad.current) {
      document.getElementById("SettingsModal").classList.toggle("hidden");
      document.getElementById("SettingsModal").classList.toggle("visible");
      document.getElementsByTagName("body")[0].classList.toggle("noscroll");
      document.getElementById("SettingsModal").classList.toggle("noscroll");
      document.getElementById("main").classList.toggle("no-click");
      document.getElementById("main").classList.toggle("close-the-blinds");
      document.getElementById("main").classList.toggle("let-there-be-light");
    } else firstLoad.current = true;
  }, [settingsModal]);

  const toggleSettingsModal = () => {
    setSettingsModal(!settingsModal);
  }

  return (
    <div className="container">
      <div className="nav">
        <div className="nav-wrapper">
          <h1>Progression Tracker</h1>
          <span onClick={toggleSettingsModal} id="settings"><i className="fas fa-cog"></i></span>
        </div>
        <div className="nav-wrapper-2">
          <h4 className="nav-item active" data-name="maple">MapleStory</h4>
          <h4 className="nav-item" data-name="soon">Coming soon</h4>
        </div>
      </div>
      <SettingsModal settingsOpened={setSettingsModal} />
      <ContentComponent game="maple" />
      <ContentComponent game="soon" />
      <div id="footer"><p>Made with <i className="fas fa-heart"></i> by zeka-mashi <i className="fas fa-copyright"></i> 2022</p></div>
    </div>
  );
};

export default App;


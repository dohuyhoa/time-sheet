import React from "react";
import AceLogo from "../static/photos/home/brands/ace-logo.png";
import CardUserIcon from "../static/icons/card-user-icon.png";
import CardIcon from "../static/icons/card-logo.png";
import DoubArrowDownIcon from "../static/icons/doub-arrow-down.png";
import PaperIcon from "../static/icons/paper-icon.png";
class ContractItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleMouseDown = this.handleMouseDown.bind(this);
  }
  handleMouseDown(event, key) {
    let id = "#" + key;
    let overlay = document.querySelector(".overlay");
    let card = document.querySelector(id);
    card.style.border = "1px solid #164997";
    card.style.zIndex = 10;
    overlay.classList.add("hidden");
  }
  handleOverlayClick(event) {
    let overlay = document.querySelector(".overlay");
    let cards = document.querySelectorAll(".card");
    cards.forEach((item) => {
      item.style.zIndex = 0;
      item.style.border = "none";
    });
    overlay.classList.remove("hidden");
  }
  render() {
    return (
      <div className="contract-item col p-3 ps-4 pe-4" key={this.props.key}>
        <div className="overlay" onClick={this.handleOverlayClick}></div>
        <div
          className="card"
          id={this.props.id}
          onMouseDown={(event, key) =>
            this.handleMouseDown(event, this.props.id)
          }
        >
          <div className="row p-3 d-flex align-items-center ">
            <div className="col-4">
              <div className="img-frame">
                <img
                  src={this.props.thumbnail}
                  alt=""
                  className="contract-item-thumbnail"
                />
              </div>
            </div>
            <div className="col-8 contract-item-details d-flex flex-column justify-content-between">
              <div className="contract-brand-name color-primary">
                {this.props.brand}
              </div>
              <div className="contract-owner fw-600">{this.props.owner}</div>
              <div className="contract-date d-flex align-items-center">
                <img src={CardUserIcon} alt="" />
                <span className="ms-2">{this.props.date}</span>
              </div>
            </div>
          </div>
          <div className="row p-3 ">
            <div className="contract-btn-details color-primary d-flex align-items-center">
              <div className="d-flex align-items-center justify-content-between">
                <img src={CardIcon} alt="" />
                <span className="text-uppercase fw-600 ms-3">
                  Chi Tiết Thông Tin Bảo Hiểm
                </span>
              </div>
              <img
                src={DoubArrowDownIcon}
                alt=""
                className="ms-auto arrow-icon"
              />
            </div>
          </div>
          <div className="seperator border-bottom border-2 border-gray"></div>

          <div className="row p-3">
            <div className="contract-btn-details color-primary d-flex align-items-center">
              <div className="d-flex align-items-center justify-content-between">
                <img src={CardIcon} alt="" />
                <span className="text-uppercase fw-600 ms-3">Quyền lợi</span>
              </div>
              <img src={PaperIcon} alt="" className="ms-auto arrow-icon" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContractItem;
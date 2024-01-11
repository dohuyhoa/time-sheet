import React from "react";
import AceLogo from "../static/photos/home/brands/ace-logo.png";
import CardUserIcon from "../static/icons/card-user-icon.png";
import CardIcon from "../static/icons/card-logo.png";
import DoubArrowDownIcon from "../static/icons/doub-arrow-down.png";
import PaperIcon from "../static/icons/paper-icon.png";
class ContractItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="contract-item col p-3" key={this.props.key}>
        <div className="card ">
          <div className="row p-3">
            <div className="col-4">
              <img
                src={this.props.thumbnail}
                alt=""
                className="contract-item-thumbnail"
              />
            </div>
            <div className="col-8 contract-item-details d-flex flex-column justify-content-between">
              <div className="contract-brand-name color-primary">
                {this.props.brand}
              </div>
              <div className="contract-owner fw-600">Nguyyễn Hoàng Hà Anh</div>
              <div className="contract-date d-flex align-items-center">
                <img src={CardUserIcon} alt="" />
                <span className="ms-2">04/10/1995</span>
              </div>
            </div>
          </div>
          <div className="row p-3 border-bottom border-1 border-gray">
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

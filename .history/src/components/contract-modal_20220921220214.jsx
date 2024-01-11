import React from "react";
import CardUserIcon from "../static/icons/card-user-icon.png";
class ContractModal extends React.Component {
  constructor(props) {
    super(props);
  }
  handleCancelDelete(callback) {
    console.log(callback);
    callback();
  }
  render() {
    return (
      <div className="modal-container">
        <div className="modal-container-item border w-75 my-0 mx-auto rounded-3 bg-white">
          <div className="modal-top d-flex align-items-center flex-column pt-4">
            <h6 className="fw-600 mb-2">Xoá hợp đồng</h6>
            <span className="modal-owner mb-2">"{this.props.owner}"</span>
            <span className="modal-brand color-primary mb-2">
              {this.props.brand}
            </span>
            <div className="modal-date mt- d-flex align-items-center mb-2">
              <img src={CardUserIcon} alt="" />
              <span className="ms-2">{this.props.cccd}</span>
            </div>
          </div>
          <div className="modal-bottom d-flex align-items-center flex-column">
            <button
              type="button"
              className="btn border-bottom border-top border-1 border-gray w-100 p-2 color-red"
            >
              Xoá hợp đồng
            </button>
            <button
              type="button"
              className="btn w-100 p-2 color-primary"
              onClick={() => this.handleCancelDelete(this.props.cancelDelete)}
            >
              Huỷ
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ContractModal;

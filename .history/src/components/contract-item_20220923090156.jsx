import React from "react";
import AceLogo from "../static/photos/home/brands/ace-logo.png";
import CardUserIcon from "../static/icons/card-user-icon.png";
import CardIcon from "../static/icons/card-logo.png";
import DoubArrowDownIcon from "../static/icons/doub-arrow-down.png";
import PaperIcon from "../static/icons/paper-icon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import ContractModal from "./contract-modal";
import FormDetails from "./form-details";
import FormBenefit from "./form-benefit";
class ContractItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleShowModal = this.handleShowModal.bind(this);
    this.handleToggleFormDetails = this.handleToggleFormDetails.bind(this);
    this.handleShowFormBenefit = this.handleShowFormBenefit.bind(this);
    this.cancelDelete = this.cancelDelete.bind(this);
    this.confirmDelete = this.confirmDelete.bind(this);
    this.state = {
      showModal: false,
      checkHover: false,
      toggleFormDetails: false,
      toggleFormBenefit: false,
    };
  }

  //MouseDown
  handleMouseDown(event) {
    this.setState({ checkHover: !this.state.checkHover });
  }

  //Open Modal
  handleShowModal() {
    this.setState({ showModal: !this.showModal });
  }

  handleOverlayClick() {
    this.setState({ checkHover: !this.state.checkHover });
  }

  cancelDelete(value) {
    this.setState({ showModal: value });
  }

  confirmDelete(value) {
    this.setState({ showModal: value, checkHover: value });
  }

  //toggle
  handleToggleFormDetails(event) {
    this.setState({
      toggleFormDetails: !this.state.toggleFormDetails,
      toggleFormBenefit: false,
    });
  }
  handleShowFormBenefit(event) {
    this.setState({
      toggleFormDetails: false,
      toggleFormBenefit: !this.state.toggleFormBenefit,
    });
  }

  render() {
    let { contract } = this.props;
    return (
      <div
        className={`contract-item mb-3 ${
          this.state.checkHover ? "active" : ""
        } drop-shadow`}
        key={contract.id}
      >
        <div
          className={`overlay`}
          onClick={() => this.handleOverlayClick()}
        ></div>
        <div className="card" id={contract.id}>
          <div
            className={`delete-icon ${this.state.showModal ? "active" : ""}`}
            onClick={() => this.handleShowModal()}
          >
            <FontAwesomeIcon
              icon={faCircleXmark}
              type="button"
            ></FontAwesomeIcon>
          </div>

          <ContractModal
            contract={contract}
            cancelDelete={this.cancelDelete}
            confirmDelete={this.confirmDelete}
            showModal={this.state.showModal}
            deleteContract={this.props.deleteContract}
          />
          <div
            className="p-3 d-flex align-items-center"
            onMouseDown={(event) => this.handleMouseDown(event)}
          >
            <div className="col-4">
              <div className="img-frame">
                <img
                  src={contract.thumbnail}
                  alt=""
                  className="contract-item-thumbnail"
                />
              </div>
            </div>
            <div className="col-8 contract-item-details d-flex flex-column align-items-start ms-2">
              <div className="contract-brand-name color-primary mb-3">
                {contract.brand}
              </div>
              <div className="contract-owner fw-600 mb-3">{contract.owner}</div>
              <div className="contract-date d-flex align-items-center ">
                <img src={CardUserIcon} alt="" />
                <span className="ms-2">{contract.date}</span>
              </div>
            </div>
          </div>
          <div
            className={`my-3 btn-toggle ${
              this.state.toggleFormDetails ? "is-active" : ""
            }`}
          >
            <FormDetails
              form={contract}
              toggle={this.state.toggleFormDetails}
            />

            <div
              className="contract-btn-details color-primary d-flex align-items-center px-3"
              type="button"
              onClick={(event) => this.handleToggleFormDetails(event, contract)}
            >
              <div className="d-flex align-items-center justify-content-between">
                <img src={CardIcon} alt="" />
                <span className="text-uppercase fw-600 ms-2">
                  Chi Tiết Thông Tin Bảo Hiểm
                </span>
              </div>
              <img
                src={DoubArrowDownIcon}
                alt=""
                className="ms-auto arrow-icon arrow-icon-rotate"
              />
            </div>
          </div>
          <div className="seperator border-bottom border-2 border-gray mx-3"></div>

          <div
            className={`btn-toggle my-3 ${
              this.state.toggleFormBenefit ? "is-active" : ""
            }`}
          >
            <FormBenefit />

            <div
              className="contract-btn-details color-primary d-flex align-items-center px-3"
              type="button"
              onClick={(event) => this.handleShowFormBenefit(event)}
            >
              <div className="d-flex align-items-center justify-content-between">
                <img src={PaperIcon} alt="" />
                <span className="text-uppercase fw-600 ms-2">Quyền lợi</span>
              </div>
              <img
                src={DoubArrowDownIcon}
                alt=""
                className="ms-auto arrow-icon"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContractItem;

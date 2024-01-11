import React from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

import addIcon from "../static/icons/add-icon.png";

import ContractItem from "../components/contract-item";
import { ContractList } from "../models/data";
import ContractModal from "../components/contract-modal";

import { Page } from "zmp-ui";
class Contracts extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Page>
        <section id="contract" className="bg-gray-1">
          <div className="container-fluid p-0 bg-white">
            <div className="heading p-3 d-flex border-bottom border-1 border-gray">
              <FontAwesomeIcon
                icon={faChevronLeft}
                className="fs-5 me-5"
                type="button"
              ></FontAwesomeIcon>
              <h6 className="fw-600">Thông tin các hợp đồng bảo hiểm</h6>
            </div>
          </div>
          <div className="mt-2">
            <Link to="/them-hop-dong">
              <div className="add-contract-link color-primary me-2 text-end">
                <span className="me-2">Thêm đồng hợp hiểm mới</span>
                <img src={addIcon} alt="" className="add-contract-icon mb-1" />
              </div>
            </Link>
          </div>
          <div className="contract-list row-cols-1 row row-cols-lg-4 g-0 py-4">
            {/* <ContractModal />x */}
            {ContractList &&
              ContractList.length > 0 &&
              ContractList.map((contract) => {
                return (
                  <>
                    <ContractItem contract={contract} />
                  </>
                );
              })}
          </div>
        </section>
      </Page>
    );
  }
}

export default Contracts;

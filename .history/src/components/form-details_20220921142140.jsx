import React from "react";

class FormDetails extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form className="form">
        <div className="input-group">
          <label className="form-label">Số hợp đồng bảo hiểm</label>
          <input type="text" className="form-control" />
        </div>
      </form>
    );
  }
}

export default FormDetails;

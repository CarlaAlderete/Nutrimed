import { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import doctorActions from "../redux/actions/doctorActions";

class Staff extends Component {
  state = {};
  componentDidMount() {
    this.props.doctors();
    // const { doctors } = this.props
  }
  render() {
    let result = this.state.doctor.map((item) => (
      <div className="doctorCardsContainer">
        <div className="doctorCard">
        <Link to="/information">
          <div
            className="doctor-image"
            style={{
              backgroundImage: `url('/assets/${item.src}')`,
            }}
          ></div>
        </Link>
        <div className="docCardText">
        <p>{item.name}</p>
        <p>Especialista en {item.specialty}</p>
        <p>Matrícula {item.dni}</p>

        </div>

        </div>
      </div>
    ));

    return (
      <div className="doctorCardsContainer">
        <p>{result}</p>
      </div>
    );
  }
}

const mapStateTopProps = (state) => {
  return {
    doctors: state.users.doctors,
  };
};

const mapDispatchToProps = {
  getDoctors: doctorActions.getDoctors,
};

export default connect(mapStateTopProps, mapDispatchToProps)(Staff);

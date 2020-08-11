import React, { Component } from "react";

class Login extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <div className="field">
          <p className="control has-icons-left has-icons-right">
            <input
              className="input"
              type="email"
              placeholder="Entrez un email..."
            />
            <span className="icon is-small is-left">
              <i className="fas fa-envelope"></i>
            </span>
            <span className="icon is-small is-right">
              <i className="fas fa-check"></i>
            </span>
          </p>
        </div>
        <div className="field">
          <p className="control has-icons-left">
            <input
              className="input"
              type="password"
              placeholder="Entrez un mot de passe..."
            />
            <span className="icon is-small is-left">
              <i className="fas fa-lock"></i>
            </span>
          </p>
        </div>
        <div className="field">
          <p className="control">
            <button className="button is-success">Se connecter</button>
          </p>
        </div>

        <style jsx>
          {`
            .container {
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              margin-top: 1%;
            }

            .field {
              width: 50%;
            }

            @media screen and (max-width: 600px) {
              .container {
                margin: 1%;
                margin-top: 2%;
                justify-content: flex-start;
                align-items: flex-start;
              }

              .field {
                width: 100%;
              }
            }
          `}
        </style>
      </div>
    );
  }
}

export default Login;

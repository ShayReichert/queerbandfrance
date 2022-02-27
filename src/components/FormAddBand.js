import React, { Component } from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Form = styled.div`
  display: flex;
  justify-content: center;
  margin: auto;
  padding-top: 3rem;
`
const FormBg = styled.div`
  z-index: 1;
  background-color: #c4c4c41f;
  -webkit-backdrop-filter: blur(20px);
  backdrop-filter: blur(20px);
  border-radius: 6px;
  width: 90vw;

  @media screen and (min-width: 768px) {
    height: 80vh;
    width: 80vw;
    overflow: scroll;
  }

  h1 {
    margin: 2rem 0 1rem 0;
    text-align: center;
    font-family: 'Archivo', Arial, Helvetica, sans-serif;
    @media screen and (min-width: 768px) {
      font-size: 3.4rem;
    }
  }
  .form-subtext {
    font-size: 1.4rem;
    text-align: center;
    max-width: 80%;
    margin: auto;
  }
  .form-subtext a:hover {
    color: #fff;
  }
  form {
    display: grid;
    gap: 8rem;
    margin: 4rem 2rem;
    @media screen and (min-width: 768px) {
      grid-template-columns: 1fr 1fr;
      margin: 4rem 5rem;
    }
  }
  .form-label {
    display: block;
    font-size: 1.5rem;
    color: #fff;
    @media screen and (min-width: 768px) {
      font-size: 1.8rem;
    }
  }
  .form-queer {
    margin-bottom: 1rem;
  }
  .form-queer-label {
    display: inline-block;
    margin-right: 0.5rem;
    @media screen and (min-width: 768px) {
      margin-right: 3rem;
    }
  }
  fieldset {
    margin-bottom: 1rem;
  }
  .form-input {
    margin: 0.3rem 0 1rem 0;
    padding: 0 0.5rem;
    border: none;
    border-radius: 3px;
    height: 3rem;
    width: 100%;
    background: var(--main-bg);
    color: #fff;
    @media screen and (min-width: 1440px) {
      margin-bottom: 3rem;
    }
  }
  .form-input::placeholder {
    font-style: italic;
    color: grey;
  }
  .form-input.textarea {
    height: 3rem;
    padding: 1rem 0.5rem;
    font-family: 'Roboto', Helvetica, sans-serif;
  }
  .form-styles {
    width: 45%;
  }
  .form-styles:first-of-type {
    margin-right: 1rem;
  }
  .form-btn-radio {
    display: inline-block;
    font-size: 1rem;
    color: #fff;
    @media screen and (min-width: 768px) {
      font-size: 1.5rem;
    }
  }
  .form-btn-radio:first-of-type {
    margin-top: 0.3rem;
  }
  .form-radio {
    margin-right: 1rem;
    @media screen and (min-width: 1440px) {
      margin-bottom: 3rem;
    }
  }
  .form-button {
    background: #fff;
    padding: 0.8rem 3rem;
    border-radius: 3px;
    border: none;
    font-size: 1.5rem;
    font-family: 'Archivo', Arial, Helvetica, sans-serif;
    font-weight: bold;
    cursor: pointer;
    transition: 200ms opacity;
  }
  .form-button:hover,
  .form-button:focus {
    opacity: 0.8;
  }
  .form-small-text {
    font-style: italic;
    font-size: 1.1rem;
    margin-top: 1rem;
  }
  .mobile-mail {
    margin-bottom: 1rem;
  }
  .form-label-mail {
    font-size: 1.2rem;
    color: #fff;
    @media screen and (min-width: 768px) {
      font-size: 1.5rem;
    }
  }
  .form-input-mail {
    margin: 0.1rem 1rem 0 0.3rem;
    padding: 0 0.5rem;
    border: none;
    border-radius: 3px;
    height: 2rem;
    background: var(--main-bg);
    color: #fff;
  }
  .form-flex {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-bottom: 1rem;
  }
`

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

class FormAddBand extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      image: '',
      queer: '',
      first_style: '',
      second_style: '',
      other_style: '',
      district: '',
      city: '',
      other: '',
      bandcamp: '',
      youtube: '',
      facebook: '',
      instagram: '',
      site: '',
      email: '',
    }
  }

  handleInputChange = (event) => {
    const target = event.target
    const value = target.value
    const name = target.name
    this.setState({
      [name]: value,
    })
  }

  handleSubmit = (event) => {
    fetch('/?no-cache=1', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...this.state }),
    })
      .then(this.handleSuccess)
      .catch((error) => alert(error))
    event.preventDefault()
  }

  handleSuccess = () => {
    this.setState({
      name: '',
      image: '',
      queer: '',
      first_style: '',
      second_style: '',
      other_style: '',
      district: '',
      city: '',
      other: '',
      bandcamp: '',
      youtube: '',
      facebook: '',
      instagram: '',
      site: '',
      email: '',
    })
  }

  render() {
    // Datas from "proposer-groupe.js"
    const { styles, districts, cities } = this.props

    return (
      <Form className="form">
        <FormBg className="form__bg">
          <h1>Proposer un groupe !</h1>
          <p className="form-subtext">
            Merci de checker les{' '}
            <Link to="/conditions-generales">conditions générales</Link> avant
            d'envoyer ta proposition 😺
          </p>
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot"
          >
            <div className="col-1">
              {/* HoneyPot */}
              <input type="hidden" name="form-name" value="contact" />
              <p hidden>
                <label>
                  Don’t fill this out:{' '}
                  <input name="bot" onChange={this.handleInputChange} />
                </label>
              </p>

              {/* Nom du groupe */}
              <fieldset>
                <legend hidden>Informations de base</legend>
                <p>
                  <label>
                    <span className="form-label">Nom du groupe * </span>
                    <input
                      type="text"
                      name="name"
                      placeholder="Hate The Sport !"
                      className="form-input"
                      value={this.state.name}
                      onChange={this.handleInputChange}
                      required
                    />
                  </label>
                </p>
                <p>
                  <label>
                    <span className="form-label">Image (url) *</span>
                    <input
                      type="url"
                      name="image"
                      placeholder="https://mon-image.com"
                      className="form-input"
                      value={this.state.image}
                      onChange={this.handleInputChange}
                      required
                    />
                  </label>
                </p>
                <p className="form-queer">
                  <span className="form-label form-queer-label">Queer ? *</span>
                  <label>
                    <span className="form-btn-radio">Oui </span>
                    <input
                      type="radio"
                      name="queer"
                      className="form-radio"
                      value="Oui"
                      onChange={this.handleInputChange}
                      checked={this.state.queer === 'Oui'}
                      required
                    />
                  </label>
                  <label>
                    <span className="form-btn-radio">Non </span>
                    <input
                      type="radio"
                      name="queer"
                      className="form-radio"
                      value="Non"
                      onChange={this.handleInputChange}
                      checked={this.state.queer === 'Non'}
                    />
                  </label>
                </p>
              </fieldset>

              {/* Styles du groupe */}
              <fieldset>
                <legend hidden>Styles du groupe</legend>
                <p>
                  <label>
                    <span className="form-label">Style(s) *</span>
                    <select
                      name="first_style"
                      className="form-input form-styles"
                      aria-label="style musical principal"
                      onChange={this.handleInputChange}
                      onBlur={this.handleInputChange}
                      defaultValue={this.state.first_style}
                      required
                    >
                      <option value="" className="placeholder">
                        Select...
                      </option>
                      {styles.map((style, key) => {
                        return (
                          <option value={style} key={key}>
                            {style}
                          </option>
                        )
                      })}
                    </select>
                    <select
                      name="second_style"
                      className="form-input form-styles"
                      aria-label="style musical secondaire"
                      onChange={this.handleInputChange}
                      onBlur={this.handleInputChange}
                      defaultValue={this.state.second_style}
                    >
                      <option value="">***</option>
                      {styles.map((style, key) => {
                        return (
                          <option value={style} key={key}>
                            {style}
                          </option>
                        )
                      })}
                    </select>
                  </label>
                </p>
                <p>
                  <label>
                    <span className="form-label">
                      Autre style (optionnel):{' '}
                    </span>
                    <input
                      type="text"
                      name="other_style"
                      placeholder="Musette-core"
                      className="form-input"
                      value={this.state.other_style}
                      onChange={this.handleInputChange}
                    ></input>
                  </label>
                </p>
              </fieldset>

              {/* Localisation du groupe */}
              <fieldset>
                <legend hidden>Localisation du groupe</legend>
                <p>
                  <label>
                    <span className="form-label">Région * </span>
                    <select
                      name="district"
                      className="form-input"
                      text="région"
                      onChange={this.handleInputChange}
                      onBlur={this.handleInputChange}
                      defaultValue={this.state.district}
                      required
                    >
                      <option value="">Select...</option>
                      {districts.map((district, key) => {
                        return (
                          <option value={district} key={key}>
                            {district}
                          </option>
                        )
                      })}
                    </select>
                  </label>

                  <label>
                    <span className="form-label">Ville * </span>
                    <select
                      name="city"
                      className="form-input"
                      text="ville"
                      onChange={this.handleInputChange}
                      onBlur={this.handleInputChange}
                      defaultValue={this.state.city}
                      required
                    >
                      <option value="">Select...</option>
                      {cities.map((city, key) => {
                        return (
                          <option value={city} key={key}>
                            {city}
                          </option>
                        )
                      })}
                    </select>
                  </label>
                </p>

                <p>
                  <label>
                    <span className="form-label">Autres </span>
                    <textarea
                      name="other"
                      maxLength="150"
                      placeholder="Précise ici par exemple ta région et/ou ta ville si elle ne figure pas dans la liste proposée."
                      className="form-input textarea"
                      value={this.state.other}
                      onChange={this.handleInputChange}
                    ></textarea>
                  </label>
                </p>
              </fieldset>
            </div>

            <div className="col-2">
              {/* Liens du groupe */}
              <fieldset>
                <legend hidden>Liens du groupe</legend>
                <p>
                  <label>
                    <span className="form-label">Bandcamp </span>
                    <input
                      type="url"
                      name="bandcamp"
                      placeholder="https://bandcamp/mongroupe.com"
                      className="form-input"
                      value={this.state.bandcamp}
                      onChange={this.handleInputChange}
                    />
                  </label>
                </p>
                <p>
                  <label>
                    <span className="form-label">Youtube </span>
                    <input
                      type="url"
                      name="youtube"
                      placeholder="https://youtube/mongroupe.com"
                      className="form-input"
                      value={this.state.youtube}
                      onChange={this.handleInputChange}
                    />
                  </label>
                </p>
                <p>
                  <label>
                    <span className="form-label">Facebook </span>
                    <input
                      type="url"
                      name="facebook"
                      placeholder="https://facebook/mongroupe.com"
                      className="form-input"
                      value={this.state.facebook}
                      onChange={this.handleInputChange}
                    />
                  </label>
                </p>
                <p>
                  <label>
                    <span className="form-label">Instagram </span>
                    <input
                      type="url"
                      name="instagram"
                      placeholder="https://instagram/mongroupe.com"
                      className="form-input"
                      value={this.state.instagram}
                      onChange={this.handleInputChange}
                    />
                  </label>
                </p>
                <p>
                  <label>
                    <span className="form-label">Site </span>
                    <input
                      type="url"
                      name="site"
                      placeholder="https://le-site-du-groupe.com"
                      className="form-input"
                      value={this.state.site}
                      onChange={this.handleInputChange}
                    />
                  </label>
                </p>
              </fieldset>

              <p className="form-flex">
                <span className="mobile-mail">
                  <label>
                    <span className="form-label-mail">Ton mail * </span>
                    <input
                      type="email"
                      name="email"
                      placeholder="toto@caramail.com"
                      className="form-input-mail"
                      value={this.state.mail}
                      onChange={this.handleInputChange}
                      required
                    />
                  </label>
                </span>
                <button className="form-button" type="submit">
                  Envoyer !
                </button>
              </p>
              <p className="form-small-text">* Champs requis</p>
              <p className="form-small-text">⚠ Format des urls : https://...</p>
            </div>
          </form>
        </FormBg>
      </Form>
    )
  }
}

FormAddBand.propTypes = {
  data: PropTypes.object,
}

export default FormAddBand

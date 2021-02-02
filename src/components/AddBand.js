import React, { Component } from 'react'
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
  height: 80vh;
  width: 80vw;
  overflow: scroll;
  h1 {
    margin-top: 2rem;
    text-align: center;
    font-family: 'Archivo', Arial, Helvetica, sans-serif;
    @media screen and (min-width: 768px) {
      font-size: 3.4rem;
    }
  }
  form {
    display: grid;
    gap: 8rem;
    margin: 4rem 5rem;
    @media screen and (min-width: 768px) {
      grid-template-columns: 1fr 1fr;
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
  .styles {
    width: 45%;
  }
  .styles:first-of-type {
    margin-right: 1rem;
  }
  .btn-radio {
    display: inline-block;
    font-size: 1rem;
    color: #fff;
    @media screen and (min-width: 768px) {
      font-size: 1.5rem;
    }
  }
  .btn-radio:first-of-type {
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
  .champs-requis {
    font-style: italic;
    font-size: 1.1rem;
    margin-top: 1rem;
  }
`

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

class AddBandForm extends Component {
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
      bandcamp: '',
      youtube: '',
      facebook: '',
      instagram: '',
      site: '',
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
      bandcamp: '',
      youtube: '',
      facebook: '',
      instagram: '',
      site: '',
    })
  }

  render() {
    // Datas from "proposer-groupe.js"
    const { styles, districts, cities } = this.props

    return (
      <Form className="form">
        <FormBg className="form__bg">
          <h1>Proposer un groupe !</h1>
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
                      placeholder="www.mon-image.com"
                      className="form-input"
                      value={this.state.image}
                      onChange={this.handleInputChange}
                      required
                    />
                  </label>
                  <span className="form-label">Queer ? *</span>
                  <label>
                    <span className="btn-radio">Oui </span>
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
                    <span className="btn-radio">Non </span>
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
                <p>
                  <label>
                    <span className="form-label">Style(s) *</span>
                    <select
                      name="first_style"
                      className="form-input styles"
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
                      className="form-input styles"
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
                <p>
                  <label>
                    <span className="form-label">Région * </span>
                    <select
                      name="district"
                      className="form-input"
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
              </fieldset>
            </div>

            <div className="col-2">
              {/* Liens du groupe */}
              <fieldset>
                <p>
                  <label>
                    <span className="form-label">Bandcamp (url) </span>
                    <input
                      type="url"
                      name="bandcamp"
                      placeholder="www.bandcamp/mongroupe.com"
                      className="form-input"
                      value={this.state.bandcamp}
                      onChange={this.handleInputChange}
                    />
                  </label>
                </p>
                <p>
                  <label>
                    <span className="form-label">Youtube (url) </span>
                    <input
                      type="url"
                      name="youtube"
                      placeholder="www.youtube/mongroupe.com"
                      className="form-input"
                      value={this.state.youtube}
                      onChange={this.handleInputChange}
                    />
                  </label>
                </p>
                <p>
                  <label>
                    <span className="form-label">Facebook (url) </span>
                    <input
                      type="url"
                      name="facebook"
                      placeholder="www.facebook/mongroupe.com"
                      className="form-input"
                      value={this.state.facebook}
                      onChange={this.handleInputChange}
                    />
                  </label>
                </p>
                <p>
                  <label>
                    <span className="form-label">Instagram (url) </span>
                    <input
                      type="url"
                      name="instagram"
                      placeholder="www.instagram/mongroupe.com"
                      className="form-input"
                      value={this.state.instagram}
                      onChange={this.handleInputChange}
                    />
                  </label>
                </p>
                <p>
                  <label>
                    <span className="form-label">Site (url) </span>
                    <input
                      type="url"
                      name="site"
                      placeholder="www.le-site-du-groupe.com"
                      className="form-input"
                      value={this.state.site}
                      onChange={this.handleInputChange}
                    />
                  </label>
                </p>
              </fieldset>

              <p>
                <button className="form-button" type="submit">
                  Envoyer !
                </button>
              </p>
              <p className="champs-requis">* Champs requis</p>
            </div>
          </form>
        </FormBg>
      </Form>
    )
  }
}

AddBandForm.propTypes = {
  data: PropTypes.object,
}

export default AddBandForm

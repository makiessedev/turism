import React from 'react'

export default function Home() {
  return (
    <div>
      <div className="container-fluid bg-primary py-5 mb-5 hero-header">
        <div className="container py-5">
          <div className="row justify-content-center py-5">
            <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
              <h1 className="display-3 text-white mb-3 animated slideInDown">
                Desfrute de férias inesquecíveis com a gente!
              </h1>
              <p className="fs-4 text-white mb-4 animated slideInDown">
                A Sua Viagem Inteligente e Personalizada por Angola.
              </p>
              <div className="position-relative w-75 mx-auto animated slideInDown">
                <input
                  className="form-control border-0 rounded-pill w-100 py-3 ps-4 pe-5"
                  type="text"
                  placeholder="Econstre o seu destino..."
                />
                <button
                  type="button"
                  className="btn btn-primary rounded-pill py-2 px-4 position-absolute top-0 end-0 me-2"
                  style={{ marginTop: 7 }}
                >
                  Pesquisa
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
            {/* About Start */}
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-5">
          <div
            className="col-lg-6 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ minHeight: 400 }}
          >
            <div className="position-relative h-100">
              <img
                className="img-fluid position-absolute w-100 h-100"
                src="assets/img/about.jpg"
                alt=""
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
            <h6 className="section-title bg-white text-start text-primary pe-3">
              Sobre Nós
            </h6>
            <h1 className="mb-4">
              Bem Vindo ao <span className="text-primary">CulturAngola</span>
            </h1>
            <p className="mb-2">
              A CulturAngola é uma empresa inovadora no setor de turismo em Angola, com a missão de transformar a
              forma como os viajantes exploram e vivenciam a riqueza cultural e natural do país.
            </p>
            <p className="mb-4">
              Combinamos tecnologia de ponta com um profundo conhecimento local para oferecer experiências turísticas inteligentes,
              personalizadas e inesquecíveis.
            </p>
            <div className="row gy-2 gx-4 mb-4">
              <div className="col-sm-6">
                <p className="mb-0">
                  <i className="fa fa-arrow-right text-primary me-2" />
                  Excelência em Serviços
                </p>
              </div>
              <div className="col-sm-6">
                <p className="mb-0">
                  <i className="fa fa-arrow-right text-primary me-2" />
                  Inteligência
                </p>
              </div>
              <div className="col-sm-6">
                <p className="mb-0">
                  <i className="fa fa-arrow-right text-primary me-2" />
                  Personalização
                </p>
              </div>
              <div className="col-sm-6">
                <p className="mb-0">
                  <i className="fa fa-arrow-right text-primary me-2" />
                  Valorização da Cultura
                </p>
              </div>
              <div className="col-sm-6">
                <p className="mb-0">
                  <i className="fa fa-arrow-right text-primary me-2" />
                  Inovação
                </p>
              </div>
              <div className="col-sm-6">
                <p className="mb-0">
                  <i className="fa fa-arrow-right text-primary me-2" />
                  Serviços 24/7
                </p>
              </div>
            </div>
            <a className="btn btn-primary py-3 px-5 mt-2" href="">
              Saber mais
            </a>
          </div>
        </div>
      </div>
    </div>
    {/* About End */}
    {/* Service Start */}
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h6 className="section-title bg-white text-center text-primary px-3">
            Serviços
          </h6>
          <h1 className="mb-5">Nossos Serviços</h1>
        </div>
        <div className="row g-4">
          <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="service-item rounded pt-3">
              <div className="p-4">
                <i className="fa fa-3x fa-globe text-primary mb-4" />
                <h5>Consultoria de Viagem</h5>
                <p>
                  Oferecemos consultoria especializada para auxiliar o cliente no planejamento da viagem, desde a escolha do destino até a reserva de voos e hospedagem.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
            <div className="service-item rounded pt-3">
              <div className="p-4">
                <i className="fa fa-3x fa-hotel text-primary mb-4" />
                <h5>Hospedagem de Qualidade</h5>
                <p>
                  Selecionamos hotéis, pousadas e outros tipos de acomodação que ofereçam conforto, segurança e qualidade nos serviços.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
            <div className="service-item rounded pt-3">
              <div className="p-4">
                <i className="fa fa-3x fa-user text-primary mb-4" />
                <h5>Transporte Privativo</h5>
                <p>
                  Oferecemos serviço de transporte privativo com motoristas qualificados para garantir o conforto e a segurança do viajante.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
            <div className="service-item rounded pt-3">
              <div className="p-4">
                <i className="fa fa-3x fa-cog text-primary mb-4" />
                <h5>Roteiros Inteligentes e Personalizados</h5>
                <p>
                  Elaboramos roteiros personalizados de acordo com as preferências do cliente, incluindo destinos, atividades, duração da viagem e nível de conforto.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="service-item rounded pt-3">
              <div className="p-4">
                <i className="fa fa-3x fa-globe text-primary mb-4" />
                <h5>Plataforma Digital</h5>
                <p>
                  Desenvolvemos uma plataforma digital intuitiva e completa, onde o viajante pode encontrar informações sobre os destinos, personalizar roteiros, reservar serviços e acessar conteúdos exclusivos.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
            <div className="service-item rounded pt-3">
              <div className="p-4">
                <i className="fa fa-3x fa-hotel text-primary mb-4" />
                <h5>Aplicativo Móvel</h5>
                <p>
                  Criamos um aplicativo móvel para facilitar o acesso às informações durante a viagem, com mapas offline, dicas de viagem, tradutor e outras funcionalidades.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
            <div className="service-item rounded pt-3">
              <div className="p-4">
                <i className="fa fa-3x fa-user text-primary mb-4" />
                <h5>Realidade Virtual</h5>
                <p>
                  Utilizamos a realidade virtual para apresentar os destinos de forma imersiva, permitindo que o viajante tenha uma prévia da experiência que o aguarda em Angola.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
            <div className="service-item rounded pt-3">
              <div className="p-4">
                <i className="fa fa-3x fa-cog text-primary mb-4" />
                <h5>Passeios e Excursões</h5>
                <p>
                  Organizamos passeios e excursões para os principais pontos turísticos de Angola, incluindo parques nacionais, reservas naturais, cidades históricas e centros culturais.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Service End */}
    {/* Destination Start */}
    <div className="container-xxl py-5 destination">
      <div className="container">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h6 className="section-title bg-white text-center text-primary px-3">
            Destinos
          </h6>
          <h1 className="mb-5">Destinos Populares</h1>
        </div>
        <div className="row g-3">
          <div className="col-lg-7 col-md-6">
            <div className="row g-3">
              <div
                className="col-lg-12 col-md-12 wow zoomIn"
                data-wow-delay="0.1s"
              >
                <a
                  className="position-relative d-block overflow-hidden"
                  href=""
                >
                  <img
                    className="img-fluid"
                    src="assets/img/destination-1.jpg"
                    alt=""
                  />
                  <div className="bg-white text-danger fw-bold position-absolute top-0 start-0 m-3 py-1 px-2">
                    Namibe - Huíla
                  </div>
                  <div className="bg-white text-primary fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2">
                    Serra da Leba
                  </div>
                </a>
              </div>
              <div
                className="col-lg-6 col-md-12 wow zoomIn"
                data-wow-delay="0.3s"
              >
                <a
                  className="position-relative d-block overflow-hidden"
                  href=""
                >
                  <img
                    className="img-fluid"
                    src="assets/img/destination-2.jpg"
                    alt=""
                  />
                  <div className="bg-white text-danger fw-bold position-absolute top-0 start-0 m-3 py-1 px-2">
                    Namibe
                  </div>
                  <div className="bg-white text-primary fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2">
                    Deserto do Namibe
                  </div>
                </a>
              </div>
              <div
                className="col-lg-6 col-md-12 wow zoomIn"
                data-wow-delay="0.5s"
              >
                <a
                  className="position-relative d-block overflow-hidden"
                  href=""
                >
                  <img
                    className="img-fluid"
                    src="assets/img/destination-3.jpg"
                    alt=""
                  />
                  <div className="bg-white text-danger fw-bold position-absolute top-0 start-0 m-3 py-1 px-2">
                    Luanda
                  </div>
                  <div className="bg-white text-primary fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2">
                    Ilha do Mussulo
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div
            className="col-lg-5 col-md-6 wow zoomIn"
            data-wow-delay="0.7s"
            style={{ minHeight: 350 }}
          >
            <a
              className="position-relative d-block h-100 overflow-hidden"
              href=""
            >
              <img
                className="img-fluid position-absolute w-100 h-100"
                src="assets/img/destination-4.jpg"
                alt=""
                style={{ objectFit: "cover" }}
              />
              <div className="bg-white text-danger fw-bold position-absolute top-0 start-0 m-3 py-1 px-2">
                Luanda
              </div>
              <div classNam12e="bg-white text-primary fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2">
                Museu da Escravatura
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
    {/* Destination Start */}
    {/* Package Start */}
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h6 className="section-title bg-white text-center text-primary px-3">
            Pacotess
          </h6>
          <h1 className="mb-5">Pacotes Incríveis</h1>
        </div>
        <div className="row g-4 justify-content-center">
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="package-item">
              <div className="overflow-hidden">
                <img className="img-fluid" src="assets/img/package-1.jpg" alt="" />
              </div>
              <div className="d-flex border-bottom">
                <small className="flex-fill text-center border-end py-2">
                  <i className="fa fa-map-marker-alt text-primary me-2" />
                  Benguela
                </small>
                <small className="flex-fill text-center border-end py-2">
                  <i className="fa fa-calendar-alt text-primary me-2" />3 Dias
                </small>
                <small className="flex-fill text-center py-2">
                  <i className="fa fa-user text-primary me-2" />2 Pessoas
                </small>
              </div>
              <div className="text-center p-4">
                <h3 className="mb-0">KZ 149.00</h3>
                <div className="mb-3">
                  <small className="fa fa-star text-primary" />
                  <small className="fa fa-star text-primary" />
                  <small className="fa fa-star text-primary" />
                  <small className="fa fa-star text-primary" />
                  <small className="fa fa-star text-primary" />
                </div>
                <p>
                  Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit
                  diam amet diam eos
                </p>
                <div className="d-flex justify-content-center mb-2">
                  <a
                    href="#"
                    className="btn btn-sm btn-primary px-3 border-end"
                    style={{ borderRadius: "30px 0 0 30px" }}
                  >
                    Saber mais
                  </a>
                  <a
                    href="#"
                    className="btn btn-sm btn-primary px-3"
                    style={{ borderRadius: "0 30px 30px 0" }}
                  >
                    Pagar agora
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
            <div className="package-item">
              <div className="overflow-hidden">
                <img className="img-fluid" src="assets/img/package-2.jpg" alt="" />
              </div>
              <div className="d-flex border-bottom">
                <small className="flex-fill text-center border-end py-2">
                  <i className="fa fa-map-marker-alt text-primary me-2" />
                  Malanje
                </small>
                <small className="flex-fill text-center border-end py-2">
                  <i className="fa fa-calendar-alt text-primary me-2" />3 Dias
                </small>
                <small className="flex-fill text-center py-2">
                  <i className="fa fa-user text-primary me-2" />2 Pessoas
                </small>
              </div>
              <div className="text-center p-4">
                <h3 className="mb-0">KZ 139.00</h3>
                <div className="mb-3">
                  <small className="fa fa-star text-primary" />
                  <small className="fa fa-star text-primary" />
                  <small className="fa fa-star text-primary" />
                  <small className="fa fa-star text-primary" />
                  <small className="fa fa-star text-primary" />
                </div>
                <p>
                  Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit
                  diam amet diam eos
                </p>
                <div className="d-flex justify-content-center mb-2">
                  <a
                    href="#"
                    className="btn btn-sm btn-primary px-3 border-end"
                    style={{ borderRadius: "30px 0 0 30px" }}
                  >
                    Saber mais
                  </a>
                  <a
                    href="#"
                    className="btn btn-sm btn-primary px-3"
                    style={{ borderRadius: "0 30px 30px 0" }}
                  >
                    Pagar agora
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
            <div className="package-item">
              <div className="overflow-hidden">
                <img className="img-fluid" src="assets/img/package-3.jpg" alt="" />
              </div>
              <div className="d-flex border-bottom">
                <small className="flex-fill text-center border-end py-2">
                  <i className="fa fa-map-marker-alt text-primary me-2" />
                  Humabo
                </small>
                <small className="flex-fill text-center border-end py-2">
                  <i className="fa fa-calendar-alt text-primary me-2" />3 Dias
                </small>
                <small className="flex-fill text-center py-2">
                  <i className="fa fa-user text-primary me-2" />2 Pessoas
                </small>
              </div>
              <div className="text-center p-4">
                <h3 className="mb-0">KZ 189.00</h3>
                <div className="mb-3">
                  <small className="fa fa-star text-primary" />
                  <small className="fa fa-star text-primary" />
                  <small className="fa fa-star text-primary" />
                  <small className="fa fa-star text-primary" />
                  <small className="fa fa-star text-primary" />
                </div>
                <p>
                  Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit
                  diam amet diam eos
                </p>
                <div className="d-flex justify-content-center mb-2">
                  <a
                    href="#"
                    className="btn btn-sm btn-primary px-3 border-end"
                    style={{ borderRadius: "30px 0 0 30px" }}
                  >
                    Saber mais
                  </a>
                  <a
                    href="#"
                    className="btn btn-sm btn-primary px-3"
                    style={{ borderRadius: "0 30px 30px 0" }}
                  >
                    Pagar agora
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Package End */}
    {/* Booking Start */}
    <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
      <div className="container">
        <div className="booking p-5">
          <div className="row g-5 align-items-center">
            <div className="col-md-6 text-white">
              <h6 className="text-white text-uppercase">Reverva</h6>
              <h1 className="text-white mb-4">Reserva Online</h1>
              <p className="mb-4">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit.
              </p>
              <p className="mb-4">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                sed stet lorem sit clita duo justo magna dolore erat amet
              </p>
              <a className="btn btn-outline-light py-3 px-5 mt-2" href="">
                Saber mais
              </a>
            </div>
            <div className="col-md-6">
              <h1 className="text-white mb-4">Reserve um passeio</h1>
              <form>
                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control bg-transparent"
                        id="name"
                        placeholder="Your Name"
                      />
                      <label htmlFor="name">Seu Nome</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="email"
                        className="form-control bg-transparent"
                        id="email"
                        placeholder="Your Email"
                      />
                      <label htmlFor="email">Seu Email</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div
                      className="form-floating date"
                      id="date3"
                      data-target-input="nearest"
                    >
                      <input
                        type="text"
                        className="form-control bg-transparent datetimepicker-input"
                        id="datetime"
                        placeholder="Date & Time"
                        data-target="#date3"
                        data-toggle="datetimepicker"
                      />
                      <label htmlFor="datetime">Data &amp; Hora</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating">
                      <select
                        className="form-select bg-transparent"
                        id="select1"
                      >
                        <option value={1}>Serra da Leba</option>
                        <option value={2}>Ilha do Mussulo</option>
                        <option value={3}>Quedas de Calandula</option>
                      </select>
                      <label htmlFor="select1">Destinos</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <textarea
                        className="form-control bg-transparent"
                        placeholder="Special Request"
                        id="message"
                        style={{ height: 100 }}
                        defaultValue={""}
                      />
                      <label htmlFor="message">Requisição Especial</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <button
                      className="btn btn-outline-light w-100 py-3"
                      type="submit"
                    >
                      Pagar Agora
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Booking Start */}
    {/* Process Start */}
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center pb-4 wow fadeInUp" data-wow-delay="0.1s">
          <h6 className="section-title bg-white text-center text-primary px-3">
            Processos
          </h6>
          <h1 className="mb-5">3 Passos Simples</h1>
        </div>
        <div className="row gy-5 gx-4 justify-content-center">
          <div
            className="col-lg-4 col-sm-6 text-center pt-4 wow fadeInUp"
            data-wow-delay="0.1s"
          >
            <div className="position-relative border border-primary pt-5 pb-4 px-4">
              <div
                className="d-inline-flex align-items-center justify-content-center bg-primary rounded-circle position-absolute top-0 start-50 translate-middle shadow"
                style={{ width: 100, height: 100 }}
              >
                <i className="fa fa-globe fa-3x text-white" />
              </div>
              <h5 className="mt-4">Escolher o Destino</h5>
              <hr className="w-25 mx-auto bg-primary mb-1" />
              <hr className="w-50 mx-auto bg-primary mt-0" />
              <p className="mb-0">
                Tempor erat elitr rebum clita dolor diam ipsum sit diam amet
                diam eos erat ipsum et lorem et sit sed stet lorem sit
              </p>
            </div>
          </div>
          <div
            className="col-lg-4 col-sm-6 text-center pt-4 wow fadeInUp"
            data-wow-delay="0.3s"
          >
            <div className="position-relative border border-primary pt-5 pb-4 px-4">
              <div
                className="d-inline-flex align-items-center justify-content-center bg-primary rounded-circle position-absolute top-0 start-50 translate-middle shadow"
                style={{ width: 100, height: 100 }}
              >
                <i className="fa fa-dollar-sign fa-3x text-white" />
              </div>
              <h5 className="mt-4">Pagamento Online</h5>
              <hr className="w-25 mx-auto bg-primary mb-1" />
              <hr className="w-50 mx-auto bg-primary mt-0" />
              <p className="mb-0">
                Tempor erat elitr rebum clita dolor diam ipsum sit diam amet
                diam eos erat ipsum et lorem et sit sed stet lorem sit
              </p>
            </div>
          </div>
          <div
            className="col-lg-4 col-sm-6 text-center pt-4 wow fadeInUp"
            data-wow-delay="0.5s"
          >
            <div className="position-relative border border-primary pt-5 pb-4 px-4">
              <div
                className="d-inline-flex align-items-center justify-content-center bg-primary rounded-circle position-absolute top-0 start-50 translate-middle shadow"
                style={{ width: 100, height: 100 }}
              >
                <i className="fa fa-plane fa-3x text-white" />
              </div>
              <h5 className="mt-4">Voe hoje</h5>
              <hr className="w-25 mx-auto bg-primary mb-1" />
              <hr className="w-50 mx-auto bg-primary mt-0" />
              <p className="mb-0">
                Tempor erat elitr rebum clita dolor diam ipsum sit diam amet
                diam eos erat ipsum et lorem et sit sed stet lorem sit
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Process Start */}
    {/* Team Start */}
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h6 className="section-title bg-white text-center text-primary px-3">
            Guia de viagem
          </h6>
          <h1 className="mb-5">Conheça nossos guia</h1>
        </div>
        <div className="row g-4">
          <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="team-item">
              <div className="overflow-hidden">
                <img className="img-fluid" src="assets/img/team-1.jpg" alt="" />
              </div>
              <div
                className="position-relative d-flex justify-content-center"
                style={{ marginTop: "-19px" }}
              >
                <a className="btn btn-square mx-1" href="">
                  <i className="fab fa-facebook-f" />
                </a>
                <a className="btn btn-square mx-1" href="">
                  <i className="fab fa-twitter" />
                </a>
                <a className="btn btn-square mx-1" href="">
                  <i className="fab fa-instagram" />
                </a>
              </div>
              <div className="text-center p-4">
                <h5 className="mb-0">Nome Completo</h5>
                <small>Designaçáo</small>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
            <div className="team-item">
              <div className="overflow-hidden">
                <img className="img-fluid" src="assets/img/team-2.jpg" alt="" />
              </div>
              <div
                className="position-relative d-flex justify-content-center"
                style={{ marginTop: "-19px" }}
              >
                <a className="btn btn-square mx-1" href="">
                  <i className="fab fa-facebook-f" />
                </a>
                <a className="btn btn-square mx-1" href="">
                  <i className="fab fa-twitter" />
                </a>
                <a className="btn btn-square mx-1" href="">
                  <i className="fab fa-instagram" />
                </a>
              </div>
              <div className="text-center p-4">
                <h5 className="mb-0">Nome Completo</h5>
                <small>Designaçáo</small>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
            <div className="team-item">
              <div className="overflow-hidden">
                <img className="img-fluid" src="assets/img/team-3.jpg" alt="" />
              </div>
              <div
                className="position-relative d-flex justify-content-center"
                style={{ marginTop: "-19px" }}
              >
                <a className="btn btn-square mx-1" href="">
                  <i className="fab fa-facebook-f" />
                </a>
                <a className="btn btn-square mx-1" href="">
                  <i className="fab fa-twitter" />
                </a>
                <a className="btn btn-square mx-1" href="">
                  <i className="fab fa-instagram" />
                </a>
              </div>
              <div className="text-center p-4">
                <h5 className="mb-0">Nome Completo</h5>
                <small>Designaçáo</small>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
            <div className="team-item">
              <div className="overflow-hidden">
                <img className="img-fluid" src="assets/img/team-4.jpg" alt="" />
              </div>
              <div
                className="position-relative d-flex justify-content-center"
                style={{ marginTop: "-19px" }}
              >
                <a className="btn btn-square mx-1" href="">
                  <i className="fab fa-facebook-f" />
                </a>
                <a className="btn btn-square mx-1" href="">
                  <i className="fab fa-twitter" />
                </a>
                <a className="btn btn-square mx-1" href="">
                  <i className="fab fa-instagram" />
                </a>
              </div>
              <div className="text-center p-4">
                <h5 className="mb-0">Nome Completo</h5>
                <small>Designaçáo</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Team End */}
    {/* Testimonial Start */}
    <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
      <div className="container">
        <div className="text-center">
          <h6 className="section-title bg-white text-center text-primary px-3">
            Testemunha
          </h6>
          <h1 className="mb-5">O Que Os Nossos Clientes Dizem!!!</h1>
        </div>
        <div className="owl-carousel testimonial-carousel position-relative">
          <div className="testimonial-item bg-white text-center border p-4">
            <img
              className="bg-white rounded-circle shadow p-1 mx-auto mb-3"
              src="assets/img/testimonial-1.jpg"
              style={{ width: 80, height: 80 }}
            />
            <h5 className="mb-0">John Doe</h5>
            <p>New York, USA</p>
            <p className="mb-0">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam
              amet diam et eos. Clita erat ipsum et lorem et sit.
            </p>
          </div>
          <div className="testimonial-item bg-white text-center border p-4">
            <img
              className="bg-white rounded-circle shadow p-1 mx-auto mb-3"
              src="assets/img/testimonial-2.jpg"
              style={{ width: 80, height: 80 }}
            />
            <h5 className="mb-0">John Doe</h5>
            <p>New York, USA</p>
            <p className="mt-2 mb-0">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam
              amet diam et eos. Clita erat ipsum et lorem et sit.
            </p>
          </div>
          <div className="testimonial-item bg-white text-center border p-4">
            <img
              className="bg-white rounded-circle shadow p-1 mx-auto mb-3"
              src="assets/img/testimonial-3.jpg"
              style={{ width: 80, height: 80 }}
            />
            <h5 className="mb-0">John Doe</h5>
            <p>New York, USA</p>
            <p className="mt-2 mb-0">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam
              amet diam et eos. Clita erat ipsum et lorem et sit.
            </p>
          </div>
          <div className="testimonial-item bg-white text-center border p-4">
            <img
              className="bg-white rounded-circle shadow p-1 mx-auto mb-3"
              src="assets/img/testimonial-4.jpg"
              style={{ width: 80, height: 80 }}
            />
            <h5 className="mb-0">John Doe</h5>
            <p>New York, USA</p>
            <p className="mt-2 mb-0">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam
              amet diam et eos. Clita erat ipsum et lorem et sit.
            </p>
          </div>
        </div>
      </div>
    </div>
    {/* Testimonial End */}
    </div>
  )
}

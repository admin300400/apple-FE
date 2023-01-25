import React from "react";

const L = () => {
  return (
    <div>
      {/* MATERIALIZE CSS LINK */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/css/materialize.min.css"
      />
      {/* MATERIALIZE ICONS */}
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      />
      {/* FONT AWESOME ICONS */}
      <link
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        rel="stylesheet"
        integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
        crossOrigin="anonymous"
      />
      <title>Apple (India)</title>
      <style
        dangerouslySetInnerHTML={{
          __html:
            '\n  nav {\n    height: 30px;\n    line-height: 30px;\n  }\n\n  nav i, nav [class^="mdi-"], nav [class*="mdi-"], nav i.material-icons {\n    height: 30px;\n    line-height: 30px;\n  }\n\n  nav .button-collapse i {\n    height: 30px;\n    line-height: 30px;\n  }\n\n  nav .brand-logo { \n    font-size: 1.6rem; \n  }\n\n  @media only screen and (min-width: 601px){\n    nav, nav .nav-wrapper i, nav a.button-collapse, nav a.button-collapse i {\n      height: 30px;\n      line-height: 30px;\n    }\n\n    a:hover ,a:active{\n      text-decoration: none;\n      color: #b3b3b3;\n      background-color: none;\n    }\n  ',
        }}
      />
      {/* NAVIGATION BAR WHICH IS FIXED AND MOBILE FRIENDLY*/}
      <div className="navbar-fixed">
        <nav className="black">
          <div className="nav-wrapper">
            <div className="container">
              <a className="brand-logo" href="#">
                <i className="fa fa-apple" />
              </a>
              <a
                className="button-collapse"
                data-activates="mobile-nav"
                href="#"
              >
                <i className="material-icons">menu</i>
              </a>
              <ul className="right hide-on-med-and-down">
                <li>
                  <a href="#">Mac</a>
                </li>
                <li>
                  <a href="#">iPad</a>
                </li>
                <li>
                  <a href="#">iPhone</a>
                </li>
                <li>
                  <a href="#">Watch</a>
                </li>
                <li>
                  <a href="#">TV</a>
                </li>
                <li>
                  <a href="#">Music</a>
                </li>
                <li>
                  <a href="#">Support</a>
                </li>
                <li>
                  <a href="#">Where to Buy</a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-search" />
                  </a>
                </li>
              </ul>
            </div>
            <ul className="side-nav" id="mobile-nav">
              <li>
                <a href="#">Mac</a>
              </li>
              <li>
                <a href="#">iPad</a>
              </li>
              <li>
                <a href="#">iPhone</a>
              </li>
              <li>
                <a href="#">Watch</a>
              </li>
              <li>
                <a href="#">TV</a>
              </li>
              <li>
                <a href="#">Music</a>
              </li>
              <li>
                <a href="#">Support</a>
              </li>
              <li>
                <a href="#">Where to Buy</a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-search" />
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div
        className="center black card"
        style={{ height: "150px", marginTop: "-34px", marginBottom: "-1px" }}
      >
        <span
          className="card-title"
          style={{ color: "white", textAlign: "center" }}
        >
          iPhone Xs
          <br />
          Welcome to the Big Screens
          <br />
          <a href="#">
            <i className="material-icons">arrow_right</i>Learn More
          </a>
          <a href="#">
            <i className="material-icons">arrow_right</i>Buy
          </a>
        </span>
      </div>
      <div className="black">
        <div className="row">
          <div className="col xl12">
            <div className="card">
              <div className="black card-image">
                <img
                  className="container"
                  style={{ alignItems: "center", height: "50%", width: "80%" }}
                  src="https://lh3.googleusercontent.com/VkkaynoXgHldd478vVAHXel6PZw4QD2qPFBvuZnFLMGFgFnInkW_PoWilFjNsuFi8V77QAjazZ8UBlqhkE1HXStKeDyLKG0lQ5UEerdkYvnCFZ8Dzbvfygs1A1cTnWbnBtaT4YPnQMELcgCLDbB_0URGhzfiAddg0r4utpHcrGFtBRW7TrvBPjYMQ3YSGmOAt9UHtMrOm2BvJSjh-yBVoaSN7tmOUA7s0l9DqWykNKvLwTdXdmu5ui8LN7zUuXCT2VjWP9eO8s-DOH4akwmFq3bXldvkpad31kFAFN_ESTGB2tw-W50Ambp2y_5q0FMl5kkk-zUS73iy0MbPSAEc71A6_jxMJU7zw5lUCqZ1WonqBpbagdJKGmh8tcUaXzayUorRywnzpQVF3QV_BvSnuT0HvtszRkVC5vyQiOZkGKUr8zcJ1R0g6jrLw-TQsbF9XCw9h47moDBHuF-vYQB7EwdtJa6l05fAgfIm0bRyrHMohpjavP4AHRk17KNP_grRA_vkDnXIojxa62DIlPCsv6QUEuIvLEm5SfPcq2tWa_vlW8d7Q-7nSd_5KAFbKgfoTMl9VCNOgRLInkB6iirtiD-revEjXCsXk1GPQ8MhJCmdihH2gXpTWV1Mwj5tBr7Lb2y9-VDnCUiG3MHw1p_2Efl3q6WZPjzqN2vmLRz_UTMQ=w1061-h338-no"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div />
      <div
        className="center black card"
        style={{ height: "150px", marginBottom: "-1px" }}
      >
        <span
          className="card-title"
          style={{ textAlign: "center", color: "white" }}
        >
          iPhone Xr
          <br />
          Brilliant.In every way.
          <br />
          <a href="#">
            <i className="material-icons">arrow_right</i>Learn More
          </a>
          <a href="#">
            <i className="material-icons">arrow_right</i>Buy
          </a>
        </span>
      </div>
      <div className="black">
        <div className="row">
          <div className="col xl12">
            <div className="card">
              <div className="black card-image">
                <img
                  className="container"
                  style={{ alignItems: "center", height: "50%", width: "80%" }}
                  src="https://lh3.googleusercontent.com/llY99dZs4MXz2A_J_B31E-om5HHPefzltTaffm1dO7x2nB8sjCpD9zrDgBn93R7Fub68AIB7BiYpjzdhyCg5OrAqEWT89JBXlD_2Ml_N4oT2FJYywagEjJAVJiib2PqBLum14vgpaqggS0mKhvB0Zi4ykx9y1CchJ4Zo89DiSa4JkG8PFgcr68CHYlcb2YGYcAUCTAVgnX-J6v6UGcxdjfsRfR5VaCWJbUUHGZh7d_79jzbBKJ-_DQKdsAyEl48hjEQRBha06G1s2pDe94sDxmKMC0zIw44rkgFmSKAcxIwuIbpAKHe9pFA1Z1tOvCjlliKTzXt4KdkR1Ir3tb1NcGtKRinPQkxpNw_C8ed_vFKGwHHHV-0Di_WGaATKJJYw8o4alnI8vfy2SRkb5ZIFu7SIHUGjRzIUsWtZbzEXPzNjGxa0T6NzuHWgshSXNUsoP3USPNpB7TQVz7Ri8SrdjN_PHoiE7evcmZOKdNCrSaLK9ofNCLMEltPTZK8vJBuBGltNitqKvj9WyqoE6xHVNPMdhkL6wVldA5NckVTFNJn5xTpQ05KgsAEgayPomVocl4mOS4Sih5IRRwZNkOLswJ07ZaB_GWmKv-7GZw6APM4-C3xBdE-A0nNOvfL6-iXO-Jf_J_nFLeF-j9BpIAb6QP_LxdO4xgylpRVMu-HITTKT=w1276-h413-no"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div />
      <div className="center valign-wrapper">
        <div className="container">
          <div className="row">
            <div className="col xl6">
              <h1>
                <i className="fa fa-apple" style={{ color: "black" }} />
                WATCH
              </h1>
              <h3 style={{ color: "red" }}>SERIES 4</h3>
              <h4>All New.For a better you.</h4>
              <h4>
                <a href="#">
                  <i className="material-icons">arrow_right</i>Learn More
                </a>
                <a href="#">
                  <i className="material-icons">arrow_right</i>Buy
                </a>
              </h4>
            </div>
            <div className="col xl6">
              <div>
                <img src="https://lh3.googleusercontent.com/MsdYs8IDawLunl1nuAqGTu9y7Vh0OuQ0_szfSuRh0yYaBNBn-xPnIBV6KmORgZmkrL5YjxU8zRSZyTvwrd20_HyoY29x3w7A2xpm1LXB3gNaydL7TwmNj8jPQEYeirP1qqw1_exGThxO-PoQQ5NWZP8dKT-Xd7MKxT1S1U_LfvAREpK4YIWI9y5XSB4yGgbYDAYDrnKPfLNg3awFQDdZT_hO5PlMC9DV0rxFX2jl9h8O5zdzguX_CRqucszPjFqC3T3C3jsM5HAJyJ2vP2Dz8ryx0Tcer-mZypYpJ7jFU3b1j7rHc7jzf5zR2oAeY3nb5nc7LzKdHhSOt4ap5tFtFSdUioR-RZIhMns_-DdOGLcJP0OKdgD0GLEfUwc5OPvjD3L_yA0NN0zB3VIHyRG4AN1kONqHcmKVPv4Rc5m0ERglQB6kPwHSHaD3cx_oxIDUOjUfbyY9TM2fr1rhYCwVt_kgbRE0QTk2u5DXm7EDbkl9QKgFTiWu-cNSj_rBDC9do3sFUCOPVf4M75cEZd4gder3EPjFa7OT1rAh0VPVupHOMa2GGzo_Jggj6bqfGbqobpTObnc4jwBG9mjmK4sGcpkVXByVybco7Vywba8A6P4yVS3k77TJu62l68yMwvNcsn47szlP2zbgWMY4mGy_weSS3yvJU4k2sXGVdRHc0L3h=w476-h580-no" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div />
      <div className="row">
        <div className="col xl6">
          <div className="center">
            <h3>iPad Pro</h3>
            <h5>All New.All Screen.All powerful.</h5>
            <h5>
              <a href="#">
                <i className="material-icons">arrow_right</i>Learn More
              </a>
            </h5>
          </div>
          <div>
            <img src="https://lh3.googleusercontent.com/xhwg9esV0zCv4xYqS_zs8xgp1Lgx9Gt0glM4hX8DWuO3IFg55f6w2CDm08mf3hgFlbuwDpmaCqvCQ4OkUN4-C1VWOGN5yHHaNr2p5dx6G5siwOgyvTBOxAAm-rlEbyi-DVSc-ag9PKAzOMPqY3yDyb1mZNeLmzVrkk4RkwYbf_i4RUl0ODcVoa6Wu65e4adSLVG-w5QqZ81L2Mr5Ie1VG6xAWAbnqsUb2nGOg-umTRuGghTprDV3F-1szZ81o6AnjZtkDxMMqe0CChS6M_QIJ8YZZE6zK_2PI9Ux0525epcPUdpJJIH9XTf0JbNQn9Epk9YVOIoUaoHyTD5IKAy76OjWRvlfRrqEWISATc464N5hpQWQ3K_Gn9mV5pGMH4Xm9j8frwNSceTYXJi5wtc7ZQV_-dey_f_04BNQTc4a_2LTvr5pAFk-Z-IDwY5QcXJbN_tyy5AQ4eqpovBhYFiTIYA3JSer_CXnSwsyjeWrbyWgi0J5iyJpW2H2VeyXvaZwCf34JTmEnDwDijW8vMZzMIsgDGaFKGbR4vbpYC9gyuqP9OtPnQmsHzfmmF_jiJVaH0XsrUYrZAIqobB2dD1CTTWcYfgNCxduHdfz9JUWSZyvCQjwHuJEDb-jdW09MEmTiCnCrP5a6ItRmpI6j58Blch4SOgIgxHDgz8n55QDXUqu=w580-h378-no" />
          </div>
        </div>
        <div className="col xl6">
          <div className="center">
            <h3>Macbook Air</h3>
            <h5>Lightness Strikes Again.</h5>
            <h5>
              <a href="#">
                <i className="material-icons">arrow_right</i>Learn More
              </a>
            </h5>
          </div>
          <div>
            <img src="https://lh3.googleusercontent.com/oK_TPT4hnlpRXl9QR9K-JaUApN5nXvDgq1ETP65Jz06IQbnoLJOH9M46mWzej6o3MccOsh37j1uah4SklVtC57VFEsfYPn3xj3Tq6MnWYQWL_qIoqLlCzXT7LeUQh7K2TgBmIZs6sVMgq2yzlevVZczPtzzgHqW9fq_b2Kz_NIbqlhRTW0gQ9zTm1fMk1Oa0t0ZeF0_T2ofdI_H_Y-qsmVIlxKJow2TG8AJQ-UPpIuZqyQY5m5npEANXgqKAfgHNCoKVOL3OaQ0kw3wgb4dXnIXdWr8FarTRQh4jK5JieAFPNe037yHNatgGxvQX_7QqTGrahYa3CnaW758n-_GMJMbN9YqK5Z4Q2kqGqnDcLt450viNN8iwhwxsfDci43MrM0BvcRrMOucZaz97tZHA_O6L8x-8Y7GkAi1Wc00xssMuMzgtRNvTPB2Xi9oS98hPrR85nvCf_62IBiWYK6FREpV0N0GWjoe-F92XDBIXRVZL1RUXM5eCmVoUyagnoIGN9vEU1rU1WSZu7BjnaGt3ui_W0djINq2A8gTUuJbdzu5ulRZ7DZM0SgGO5qWTJGo6uIOb0GpVm8Ju-GOrj0q9hOzq3wkZPZ8irDclHHTPacXz4MkowOSFK6pJK4KF2wMG3pLtfCecF93SdSkbujkawkDM9JNnwfSi03-J927AOcPi=w601-h303-no" />
          </div>
        </div>
      </div>
      <div />
      <div className="row">
        <div className="col xl6">
          <div className="center">
            <h3>Mac Mini</h3>
            <h5>Re-engineered in small way.</h5>
            <h5>
              <a href="#">
                <i className="material-icons">arrow_right</i>Learn More
              </a>
            </h5>
          </div>
          <div>
            <img src="https://lh3.googleusercontent.com/DQOUjK_0SURgU8fqHn6sOkZPSDhdo17_ArU6xan7lvluknhpWo71G5qbWgU49aL7yMEKN75cvTZU3e6Tir_oXQv8m-XgGs2VSQwcTItAnMJCpn9xgcO6fEBnNHG1kuMzwjmKcF0kBpsX7BErO5ox_uGISWiH-Le3FaDZxewHKP70ZuPNcVRacAJKqtR-EScTBA8reCtf18sD140K42IWivVbqjZAx7BK0GMzsKPrWrZgvJTzNCpoO3iOJYDYSuu9yEJCs1YlwExlBG6bVWYMyJW8RnsFKDCRUJLnKEizyAPoiDUvDYH-KxKoMtKVMKrS63zOSr0lD0MnQQOFVhGK04FfQ6v9Zqw7xEg6wZt_YfcJHbv1pjQtNPKaV2xVYHuZ9FMnfP-k1k_BUaJQ_mFf0oGlCiFtSXfcDbllRu5B-iYJ8cfpv2A36xnGK17F3iWgB1UCwEzT0241HBVwTepwV8p7A0Hog2uWoG2PzSgl4q4t2ELI2LhbtkeVmLeOjb229ztVcpgJ0vDLUL7JFaA80hJDF71Pwh6u_QjfZRersoOjASPy38fNgeBU_tBEvgwSwMTgdwV5PJzqYGeUMbf-tQBjAeAtnpu-jBTCfS3AGXp6dwwNUwDPIEv8SF8h42NuGtQelcQMVFsYNC-JMZ_yYhT-8uIShIw7RQR95yydF_Kb=w654-h367-no" />
          </div>
        </div>
        <div className="col xl6">
          <div className="center">
            <h3>
              <i className="fa fa-apple" />
              Music
            </h3>
            <h5>Loose yourself in 50 Million songs.</h5>
            <h5>
              <a href="#">
                <i className="material-icons">arrow_right</i>Learn More
              </a>
            </h5>
          </div>
          <div>
            <img src="https://lh3.googleusercontent.com/1jPwLbnC7DSdq-WTbSTeZNUzG8OpKbAlwo-qMq63kOserCniJVQ7XVZdvqFmqcU9xN_45DTBqHfGpOng3Xncc_TbuQoQIL2_dvdaviQ118Yrh15pD6K5JnAKP_uhPMb6Q5f_pnvWUiGFKHVOSzrBVoVVJeBklYK_vd2XWLeB9L3dp1QL6-BM12l8l9EShXhnkofMGMUX5RZN3gWmR8ZPSyagUO0VkPjBWih8Egnhqjy9jKkl00UxtT-lBB6Yi1g0WykWsr7oTjL_cS95F-BC2AXVsVf6Gr1UXPUvlIJ2NIuQtB6LF1reZo4cOBcdvCs2yyoJF701TzFJ_cvV658UMT9XjX-FoLDe4rdOHMjxwmDN5qr_ilZS2JT_d7oBGKfZMfeAfLMuiCn9TxRKWKIk6bkAQxYDSdLnnIGsZIrf4_NOyx87iHESWdWNmRv158heTHRmdsfHGTplZiJgsq8bQmI5A-8HxsnFuRxLZVOMhzITYpg3CSPACbLFPtXLcltB70_2SNiFLqEn5QJQ2k1Kq0FiOtTHvM6yV1Wj3DfdqZyCFHVGbpdMht03TsOXLZ2fMSt7sLNxZJh8UmaTmLaUN6C-rXFpNFGR4TL2OsxMjUc-T-ZbqNqmNUl4JzrQ7H6ptIdIrZlgiMSh-EjGKId3SnHT6amTZmHFN2oLXDHlQUaz=w662-h403-no" />
          </div>
        </div>
      </div>
      <div />
      <div className="row">
        <div className="col s6">
          <div className="center">
            <h3>Airpods</h3>
            <h5>Wireless. Effortless. Magical.</h5>
            <h5>
              <a href="#">
                <i className="material-icons">arrow_right</i>Learn More
              </a>
            </h5>
          </div>
          <div>
            <img src="https://lh3.googleusercontent.com/q2UXXyTYJxdQ5cFW-DNjrDS__1o9u-WpCWvMmHNGTL4yT7wJm1WpV862dli-hshgPJjtiGtxIDYGCQCt3C5GRUa492Pj9hlXJsqX8Lwc_3u3YI0aPxpfYgIpR3pnx1WxybjMtZ9T3PVsK0qIpFJULTD-AjnA8T8O6SL7aF6kqD4ITTFD5fV1Xl2fRUTkXPtZA1E3T9sfIOAzsa7d4L7NNi5ZNQUua0ndPLTA2qD5f8d0m_CgbenNejG8nVGP8ffbRdSBTt2OYtD1I6OAX4lbK_0KJR7ZctLUe0cd0pwyF48h8TKkuSxEFvhaWi35Wd3Tcj6hW3c_xMjDwUXPKmeDKEBrKI63aoecuV4v2KlBwnBCXyPh_Bbj9ogyOx6XOQv96gA_5bFXZQ5wPiHYt5pVOtr5Yu8wgVytD4b7Ob9bTS9TTlcR6gIvPiHt0DyPO9EKifwBtT_JjtYbiR43mm0mHJpPaalVJwjRzZ0plTm-XEjQKprRvWJ-2XxaZwBojzuffc4a7ocGs1hlP4RXDtmNXq9Z41dAyGK2aLNKsll_vxdcuRTiuofb_3yUo6-KM_rsFkVgDFGdwBHzu_5iDjl-y4_BNUkNMfyyWjd5NFTVLwKNy_EA65P53C9Gi4TJg9gyQegqPzwEOnuQ7PuyDslZghq4YOF7ioEpulMHk-E9JCZo=w663-h376-no" />
          </div>
        </div>
        <div className="col s6">
          <div className="center">
            <h3>
              <i className="fa fa-apple" />
              tv <strong>4K</strong>
            </h3>
            <h5>Cinematic in every sense.</h5>
            <h5>
              <a href="#">
                <i className="material-icons">arrow_right</i>Learn More
              </a>
              <a href="#">
                <i className="material-icons">arrow_right</i>Buy Now
              </a>
            </h5>
          </div>
          <div>
            <img src="https://lh3.googleusercontent.com/IIol666MfVJQ4pw7hTPIPlKK0r94jvuZ68C51PvJuT-RMUVTUu61Y1bQqwZqRrpbvkxkj6CpKQCFcZcMNy36XwzwSEPKc_OoQIFgklJ6_8SFBpYgJOMAqt0nMs7DX1gSHn-A66F58Q1_y0GR7wH9lQ7ql6ZcLg-92mf2O4wZ2oqTDI2-wHBG5KybodQpt3GrJpIfaYcGyug-RgKXP341ONRJmr7UGkizvSqXkyjaIkcwbZk6uoUQV6DwoRHDFKQy5RPpvnrC5ZQer_8H9sbyqjBUw5Th_tdM0G5E0JM98yVZQYDqiHpOkT_MdStvHFTTEPLacjy0fmWxHzoQeUrhskYWZX46jNfU7QI4W7aOqFypXQUFpBi9y_thj_vykFWFWraPdpGMLBsL4degFjrYxPMcOkxsGLF7xkbsCsHJiDub4M7Hv00V8NN_HvSayPtylf7Ht1_tUSfeZodBxgd6TWjdfJieJONRtMWtKQyq-DupNtH0Wl3KiQg6W2YfjS9ycfOcpHiUlKZYS47ZXnXippvnCDFrK5eEUb2qoK-egzx0-1CqeoO6B7g0TLegVXcOjIsBmdgluAfQl4EAoZ3D-0EFEruMtsTSIqa1PmN40iPGiz-AJD7Eem50JXnu2dgL2aSrROHpSVJHKPd1Fk4XFGMWqisstmUbwin0jEM_xYlB=w653-h412-no" />
          </div>
        </div>
      </div>
      <div />
      <footer className="page-footer" style={{ backgroundColor: "#f2f2f2" }}>
        <div className="container">
          <div className="row">
            <div className="col s12 l3">
              <span style={{ color: "black" }}>
                <strong>Explore</strong>
              </span>
              <ul>
                <li>
                  <a style={{ color: "#737373" }} href="#">
                    Mac
                  </a>
                </li>
                <li></li>
                <li>
                  <a style={{ color: "#737373" }} href="#">
                    ipad
                  </a>
                </li>
                <li>
                  <a style={{ color: "#737373" }} href="#">
                    iPhone
                  </a>
                </li>
                <li>
                  <a style={{ color: "#737373" }} href="#">
                    Watch
                  </a>
                </li>
                <li>
                  <a style={{ color: "#737373" }} href="#">
                    TV
                  </a>
                </li>
                <li>
                  <a style={{ color: "#737373" }} href="#">
                    Music
                  </a>
                </li>
                <li>
                  <a style={{ color: "#737373" }} href="#">
                    iPad
                  </a>
                </li>
                <li>
                  <a style={{ color: "#737373" }} href="#">
                    iPod touch
                  </a>
                </li>
              </ul>
            </div>
            <div className="col s12 l3">
              <span style={{ color: "black" }}>
                <strong>For Education</strong>
              </span>
              <ul>
                <li>
                  <a style={{ color: "#737373" }} href="#">
                    Apple and Education
                  </a>
                </li>
              </ul>
              <span style={{ color: "black" }}>
                <strong>For Business</strong>
              </span>
              <ul>
                <li>
                  <a style={{ color: "#737373" }} href="#">
                    Apple and Business
                  </a>
                </li>
              </ul>
            </div>
            <div className="col s12 l3">
              <span style={{ color: "black" }}>
                <strong>Account</strong>
              </span>
              <ul>
                <li>
                  <a style={{ color: "#737373" }} href="#">
                    Manage Your Apple ID
                  </a>
                </li>
                <li>
                  <a style={{ color: "#737373" }} href="#">
                    iCloud.com
                  </a>
                </li>
              </ul>
              <span style={{ color: "black" }}>
                <strong>Apple Values</strong>
              </span>
              <ul>
                <li>
                  <a style={{ color: "#737373" }} href="#">
                    Accessibility
                  </a>
                </li>
                <li>
                  <a style={{ color: "#737373" }} href="#">
                    Environment
                  </a>
                </li>
                <li>
                  <a style={{ color: "#737373" }} href="#">
                    Privacy
                  </a>
                </li>
                <li>
                  <a style={{ color: "#737373" }} href="#">
                    Supplier Responsibility
                  </a>
                </li>
              </ul>
            </div>
            <div className="col s12 l3">
              <span style={{ color: "black" }}>
                <strong>About Apple</strong>
              </span>
              <ul>
                <li>
                  <a style={{ color: "#737373" }} href="#">
                    Newsroom
                  </a>
                </li>
                <li></li>
                <li>
                  <a style={{ color: "#737373" }} href="#">
                    Apple Leadership
                  </a>
                </li>
                <li>
                  <a style={{ color: "#737373" }} href="#">
                    Job Oppurtunities
                  </a>
                </li>
                <li>
                  <a style={{ color: "#737373" }} href="#">
                    Investors
                  </a>
                </li>
                <li>
                  <a style={{ color: "#737373" }} href="#">
                    Events
                  </a>
                </li>
                <li>
                  <a style={{ color: "#737373" }} href="#">
                    Contact Apple
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <section>
          <div
            className="container"
            style={{ borderBottom: "1px solid black" }}
          >
            <span style={{ color: "black" }}>
              Where to Buy: <a href="#">Find a Retailer</a>
            </span>
          </div>
        </section>
      </footer>
      <div style={{ height: "10px" }} />
      {/* FOR THIS YOU HAVE TO SEARCH JQUERY CDN */}
      {/* YOU WILL FIND THIS ON MATERIALIZE CSS GET STARTED SECTION */}
      <title />
      <code>My Name is Aaveg Gupta.</code>
    </div>
  );
};

export default L;

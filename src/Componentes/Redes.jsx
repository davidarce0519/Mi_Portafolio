import './Redes.css'

const Redes = () => {
  return (
    <div>
      <div className="contenedorFB">
        <a href="https://www.facebook.com/davidalejandro.arceburbano/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/b/b9/2023_Facebook_icon.svg"
            alt="logo fb"
            className="logoFb"
          />
        </a>
        <h2 className="facebook">David Alejandro Arce Burbano</h2>
      </div>

      <div className="contenedorGm">
        <a href="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRrlzjtfgtGVJTCbVvGWVnqfrhFdszvGmxkkjnnHpxHNHDgLBNpZNfQMCPDLCFdTFnZKtBL">
          <img
            src="https://w7.pngwing.com/pngs/712/520/png-transparent-google-mail-gmail-logo-icon.png"
            alt="logoG"
            className="logoGm"
          />
        </a>
        <h2 className="Gmail">David Alejandro Arce Burbano</h2>
      </div>

      <div className="contenedorGit">
        <a href="https://github.com/davidarce0519">
          <img
            src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
            alt="logoG"
            className="logoGit"
          />
        </a>
        <h2 className="Git">David Alejandro Arce Burbano</h2>
      </div>

      <div className="Freddy">
        <img
          src="https://i.etsystatic.com/19428442/r/il/b40546/3136562326/il_570xN.3136562326_n2xs.jpg"
          alt="imagenItsMe"
          className="ItsMe"
        />
      </div>
    </div>  );
};

export default Redes;

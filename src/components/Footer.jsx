const Footer = () => {
  return (
    <div className="footer" name="contact">
      <p className="footer__me">
        Get a hold of me <span className="footer__arrow">-&gt;</span>
        <a href="mailto:arevaloluis89@yahoo.com" className="footer__button footer__button--purple">
          email
        </a>
      </p>
      <p className="footer__copyright">
        © {new Date().getFullYear()} by <span className="footer__name">Luis Arevalo </span>
      </p>
    </div>
  );
};

export default Footer;

const Footer = () => {
  return (
    <section className="c-space flex flex-wrap items-center justify-between gap-5 border-t border-black-300 pb-3 pt-7">
      <div className="flex gap-2 text-white-500">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>

      <div className="flex gap-3">
        <div className="social-icon">
          <a
            href="https://www.linkedin.com/in/https://www.linkedin.com/in/karam-al-takrity-231506270/?_l=en_US"
            target="_blank"
            className="flex items-center justify-center"
          >
            <img
              src="/assets/Linkedin.svg"
              alt="github"
              className="h-1/2 w-1/2"
            />
          </a>
        </div>
        <div className="social-icon">
          <img src="/assets/github.svg" alt="github" className="h-1/2 w-1/2" />
        </div>
      </div>

      <p className="text-white-500">©️ 2024 Karam. All rights reserved</p>
    </section>
  );
};

export default Footer;

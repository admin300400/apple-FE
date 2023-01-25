import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <section className="footer-base">
          <div className="footer-more-ways" x-ms-format-detection="none">
            More ways to shop: Visit an <a href="/retail/">Apple Store</a>,{" "}
            <span className="nowrap">
              call 1-800-MY-APPLE, or <a href="/">find a reseller</a>
            </span>
            .
          </div>
          <div className="footer-legal">
            <div className="footer-legal-copyright">
              Copyright © 2023 Apple Inc. All rights reserved.
            </div>
            <div className="footer-legal-links">
              <a href="/">Privacy Policy</a>
              <a href="/">Terms of Use</a>
              <a href="/">Sales and Refunds</a>
              <a href="/">Legal</a>
              <a href="/">Site Map</a>
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
};

export default Footer;

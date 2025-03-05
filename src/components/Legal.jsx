import "../styles/Legal.module.css";



const Legal = () => {
  return (
    <div className="legal-container">
      <h1 className="legal-title">Legal Information</h1>
      <div className="legal-card">
        <h2 className="legal-section">Privacy Policy</h2>
        <p className="legal-text">
          AL KARIM DRESSES values your privacy and is committed to protecting
          your personal data. We collect customer information solely for
          processing orders, enhancing customer experience, and ensuring
          efficient service delivery. Your information will never be sold,
          rented, or shared with third parties except where required by law.
          We implement strict security measures to safeguard your data from
          unauthorized access.
        </p>

        <h2 className="legal-section">Terms of Service</h2>
        <p className="legal-text">
          By accessing and using our website, you agree to comply with all
          applicable laws and regulations. AL KARIM DRESSES reserves the
          right to modify its policies, pricing, and terms at any time
          without prior notice. Our denim and knitwear products are designed
          with the highest standards. Misuse of our website or violation
          of any terms may result in the suspension of service.
        </p>

        <h2 className="legal-section">Delivery & Shipping</h2>
        <p className="legal-text">
          AL KARIM DRESSES is committed to delivering high-quality denim and
          knitwear products worldwide. Standard delivery time ranges from
          30-60 business days, depending on location and shipping method.
          International orders may be subject to customs duties and taxes,
          which are the responsibility of the recipient. Once an order is
          shipped, customers will receive tracking details. We are not
          liable for delays due to customs clearance or unforeseen
          circumstances beyond our control.
        </p>

       
      </div>
    </div>
  );
};

export default Legal;

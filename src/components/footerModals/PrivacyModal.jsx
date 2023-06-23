import Modal from 'components/modal';
import ButtonClose from 'components/buttonClose/ButtonClose';
import ModalTextWrap from 'components/modalTextWrap/ModalTextWrap';

function PrivacyModal({ showPrivacy }) {
  return (
    <>
      {showPrivacy && (
        <Modal variant="modal" closeModal={showPrivacy}>
          <ButtonClose
            variant="closeBtnLight"
            aria-label={'close'}
            type={'button'}
            onClick={() => showPrivacy(false)}
          />
          <ModalTextWrap title={'Privacy Policy'}>
            <p>Introduction</p>
            <p>
              This Privacy Policy ("Policy") outlines the procedures and
              practices of Royalcoinslot ("we," "us," or "our") regarding the
              collection, use, storage, and disclosure of personal information
              obtained from users ("you" or "your") of our website. This Policy
              applies to all products, services, and interactions provided by
              Royalcoinslot.
            </p>
            <p>Information We Collect</p>
            <p>
              Personal Information: We may collect personal information directly
              from you when you visit our website, register an account, make a
              purchase, subscribe to our newsletter, participate in surveys or
              contests, or engage with our website's features. This may include
              your name, email address, phone number, billing address, and
              payment information.
            </p>
            <p>
              Non-Personal Information: We also gather non-personal information
              automatically as you interact with our website. This includes your
              IP address, browser type, operating system, referring URLs, and
              other technical data. Such information is collected to improve our
              services and enhance your user experience.
            </p>
            <p>Use of Collected Information</p>
            <p>
              Personal Information: We use your personal information for the
              following purposes:
            </p>
            <ul>
              <li>
                a. To provide and personalize our services: We utilize your
                information to fulfill your requests, process transactions, and
                deliver relevant content and offerings tailored to your
                preferences.
              </li>
              <li>
                b. Communication: We may contact you via email or other provided
                contact details to respond to your inquiries, provide updates,
                or share important information related to our services.
              </li>
              <li>
                c. Marketing: With your consent, we may send you promotional
                emails, newsletters, or other marketing communications about our
                products, services, or special offers.
              </li>
            </ul>
            <p>
              Non-Personal Information: Non-personal information is utilized for
              statistical analysis, website improvement, and enhancing the
              overall user experience. This information helps us understand user
              preferences, trends, and patterns to optimize our services.
            </p>
            <p>Data Security and Disclosure</p>
            <p>
              Data Security: We prioritize the security of your personal
              information and employ industry-standard measures to protect it
              against unauthorized access, disclosure, alteration, or
              destruction. However, please note that no method of data
              transmission over the internet or electronic storage is completely
              secure, and we cannot guarantee absolute security.
            </p>
            <p>
              Disclosure of Information: We do not sell, trade, or rent your
              personal information to third parties without your explicit
              consent. However, we may share your information with trusted
              service providers, partners, or affiliates who assist us in
              delivering our services or conducting business operations on our
              behalf. These entities are bound by confidentiality agreements and
              will only access or use your information as necessary to fulfill
              their designated tasks.
            </p>
            <p>Third-Party Links and External Sites</p>
            <p>
              Our website may contain links to third-party websites, services,
              or resources that are not operated or controlled by us. We are not
              responsible for the privacy practices or content of these external
              sites. We encourage you to review the privacy policies and terms
              of these third-party platforms before engaging with them.
            </p>
            <p>Policy Updates</p>
            <p>
              We reserve the right to modify or update this Privacy Policy at
              any time. The updated version will be posted on our website, and
              the revised effective date will be indicated. It is your
              responsibility to review this Policy periodically for any changes.
              Your continued use of our services after the posting of any
              modifications signifies your acceptance of the revised Policy.
            </p>
            <p>Contact Us</p>
            <p>
              We reserve the right to update or modify this Policy at any time.
              We will notify you of any material changes to this Policy by
              posting the updated version on our website or through other
              reasonable means. Your continued use of our services after the
              effective date of any changes to this Policy constitutes your
              acceptance of such changes.
            </p>
            <p>Contact Us</p>
            <p>
              If you have any questions, concerns, or requests regarding this
              Privacy Policy or the handling of your personal information,
              please contact us.
            </p>
          </ModalTextWrap>
        </Modal>
      )}
    </>
  );
}

export default PrivacyModal;

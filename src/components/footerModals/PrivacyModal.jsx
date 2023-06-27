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
              This Privacy Policy describes how Royal Coinage ("we," "us," or
              "our") collects, uses, and protects the personal information of
              users ("you" or "your") when you visit or interact with our
              website Royalcoinage.com ("Website"). We are committed to
              safeguarding your privacy and ensuring the security of your
              personal information. By using our Website, you consent to the
              collection and use of your personal information as outlined in
              this Privacy Policy.
            </p>
            <p>Information We Collect</p>
            <p>
              Personal Information: We may collect personal information that you
              voluntarily provide to us when you interact with our Website, such
              as your name, email address and any other information you choose
              to provide. Usage Information: We may automatically collect
              certain information about your visit to our Website, including
              your IP address, browser type, operating system, referring URLs,
              pages visited, and the date and time of your visit. This
              information helps us analyze trends, administer the Website, track
              user movements, and gather demographic informatio
            </p>
            <p>Use of Information</p>
            <p>
              Personal Information: We may use the personal information you
              provide to us for the following purposes:
            </p>
            <ul>
              <li>
                To provide and maintain our services, including responding to
                your inquiries and fulfilling your requests.
              </li>
              <li>
                To personalize your experience on our Website and improve user
                experience.
              </li>
              <li>
                To send you promotional materials, newsletters, and other
                communications related to our services.
              </li>
              <li>
                To process transactions and complete orders for products or
                services you purchase from us.
              </li>
              <li>
                To comply with legal obligations, resolve disputes, and enforce
                our agreements.
              </li>
            </ul>
            <p>
              Usage Information: We may use the usage information collected to
              analyze and improve the functionality and performance of our
              Website, identify user preferences, and enhance user experience.
            </p>
            <p>Information Sharing</p>
            <p>
              Third-Party Service Providers: We may share your personal
              information with trusted third-party service providers who assist
              us in operating our Website, conducting our business, or providing
              services to you. These service providers have access to your
              personal information only as necessary to perform their functions
              and are obligated to maintain its confidentiality. Legal
              Compliance: We may disclose your personal information if required
              by law, regulation, legal process, or governmental request, or to
              protect our rights, property, or safety, as well as the rights,
              property, or safety of our users or others.
            </p>
            <p>Data Security</p>
            <p>
              We implement reasonable security measures to protect your personal
              information from unauthorized access, alteration, disclosure, or
              destruction. However, no method of data transmission over the
              internet or electronic storage is completely secure, and we cannot
              guarantee absolute security of your information.
            </p>
            <p>Links to Third-Party Websites</p>
            <p>
              Our Website may contain links to third-party websites. We have no
              control over the content, privacy policies, or practices of these
              websites. We encourage you to review the privacy policies of any
              third-party websites you visit.
            </p>
            <p>Children's Privacy</p>
            <p>
              Our Website is not intended for individuals under the age of 18.
              We do not knowingly collect or solicit personal information from
              anyone under the age of 18. If we become aware that we have
              collected personal information from a child under the age of 18,
              we will promptly delete it. If you believe that we have any
              information from or about a child under the age of 18, please
              contact us using the provided contact details.
            </p>
            <p>Changes to this Privacy Policy</p>
            <p>
              We reserve the right to update or modify this Privacy Policy at
              any time. Any changes will be effective immediately upon posting
              the revised Privacy Policy on our Website. We encourage you to
              review this Privacy Policy periodically for any updates or
              changes.
            </p>
            <p>Contact Us</p>
            <p>
              If you have any questions, comments, or concerns regarding this
              Privacy Policy or our privacy practices, please contact us at
              supportteam@royalcoinage.com.
            </p>
          </ModalTextWrap>
        </Modal>
      )}
    </>
  );
}

export default PrivacyModal;

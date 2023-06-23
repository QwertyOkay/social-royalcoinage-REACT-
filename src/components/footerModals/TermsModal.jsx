import Modal from 'components/modal';
import ButtonClose from 'components/buttonClose/ButtonClose';
import ModalTextWrap from 'components/modalTextWrap/ModalTextWrap';

function TermsModal({ showTerms }) {
  return (
    <>
      {showTerms && (
        <Modal variant="modal" closeModal={showTerms}>
          <ButtonClose
            aria-label={'close'}
            type={'button'}
            onClick={() => showTerms(false)}
          />
          <ModalTextWrap title={'Terms & Conditions'}>
            <p>
              Please read these Terms and Conditions ("Terms") carefully before
              accessing or using the Royalcoinslot website ("Website" or
              "Service") operated by Royalcoinslot ("we," "us," or "our"). These
              Terms apply to all visitors, users, and any other individuals or
              entities accessing or using our Website.
            </p>
            <p>Acceptance of Terms</p>
            <p>
              By accessing or using our Website, you acknowledge that you have
              read, understood, and agree to be bound by these Terms. If you do
              not agree with any part of these Terms, you are not permitted to
              use our Service.
            </p>
            <p>Use of the Website</p>
            <p>
              Eligibility: By accessing or using our Website, you represent and
              warrant that you are at least 18 years old. Individuals below the
              age of 18 are strictly prohibited from accessing or using our
              Service.
            </p>
            <p>
              License: Subject to these Terms, we grant you a limited,
              non-exclusive, non-transferable, and revocable license to access
              and use our Website for personal and non-commercial purposes. You
              agree not to reproduce, modify, distribute, display, or exploit
              any content on our Website without our prior written consent.
            </p>
            <p>Intellectual Property</p>
            <p>
              Ownership: All content, trademarks, logos, and intellectual
              property displayed on our Website are the exclusive property of
              [Company Name] or its licensors. You may not use, modify,
              reproduce, or distribute any of our intellectual property without
              our prior written authorization.
            </p>
            <p>
              User Submissions: If you submit any content, feedback, or
              suggestions to us through our Website, you grant us a
              non-exclusive, royalty-free, perpetual, and irrevocable right to
              use, reproduce, modify, adapt, publish, translate, distribute, and
              display such submissions in any form or medium.
            </p>
            <p>Disclaimer of Liability</p>
            <p>
              Website Content: The information provided on our Website is for
              general informational purposes only. We do not warrant the
              accuracy, completeness, or reliability of any content or materials
              on our Website. You acknowledge that the use of our Service is at
              your own risk.
            </p>
            <p>
              Limitation of Liability: To the maximum extent permitted by law,
              we shall not be liable for any direct, indirect, incidental,
              consequential, or punitive damages arising out of or in connection
              with your use of our Website or any content or services provided
              therein.
            </p>
            <p>Indemnification</p>
            <p>
              You agree to indemnify and hold harmless [Company Name], its
              officers, directors, employees, and agents from and against any
              claims, liabilities, damages, losses, costs, or expenses,
              including attorney's fees, arising out of or in connection with
              your use of our Website, violation of these Terms, or infringement
              of any third-party rights.
            </p>
            <p>Severability</p>
            <p>
              If any provision of these Terms is deemed invalid or unenforceable
              by a court of competent jurisdiction, the remaining provisions
              shall remain in full force and effect.
            </p>
            <p>Entire Agreement</p>
            <p>
              These Terms constitute the entire agreement between you and
              Royalcoinslot regarding the use of our Website and supersede any
              prior or contemporaneous agreements or understandings, whether
              oral or written.
            </p>
            <p>Contact Us</p>
            <p>
              If you have any questions, comments, or concerns regarding these
              Terms, please contact us.
            </p>
          </ModalTextWrap>
        </Modal>
      )}
    </>
  );
}

export default TermsModal;

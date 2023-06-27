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
              Please read these Terms and Conditions ("Agreement") carefully
              before using the Royalcoinage.com website ("Website"). This
              Agreement sets forth the legally binding terms and conditions for
              your use of the Website. By accessing or using the Website, you
              agree to be bound by this Agreement.
            </p>
            <p>Intellectual Property</p>
            <p>
              Ownership: The Website and its original content, features, and
              functionality are owned by Royal Coinage and are protected by
              international copyright, trademark, patent, trade secret, and
              other intellectual property or proprietary rights laws. Limited
              License: Subject to your compliance with this Agreement, we grant
              you a limited, non-exclusive, non-transferable, and revocable
              license to access and use the Website for personal, non-commercial
              purposes. Restrictions: You agree not to reproduce, distribute,
              modify, create derivative works of, publicly display, publicly
              perform, republish, download, store, or transmit any of the
              material on our Website, except as permitted by this Agreement.
            </p>
            <p>User Responsibilities</p>
            <p>
              Prohibited Conduct: You agree not to engage in any conduct that
              violates applicable laws, infringes upon the rights of others, or
              interferes with the operation or security of the Website.
              Prohibited conduct includes, but is not limited to:
            </p>
            <p>
              Uploading or transmitting any unauthorized or harmful content.
              Attempting to gain unauthorized access to the Website or its
              servers. Interfering with or disrupting the Website or its
              networks. Engaging in any activity that could damage, disable,
              overburden, or impair the Website.
            </p>
            <p>
              Account Registration: In order to access certain features of the
              Website, you may be required to create an account. You are
              responsible for maintaining the confidentiality of your account
              information and for all activities that occur under your account.
            </p>
            <p>
              User Submissions: If you submit any content, feedback, or
              suggestions to us through our Website, you grant us a
              non-exclusive, royalty-free, perpetual, and irrevocable right to
              use, reproduce, modify, adapt, publish, translate, distribute, and
              display such submissions in any form or medium.
            </p>
            <p>Disclaimer of Warranty</p>
            <p>
              The Website is provided on an "as-is" and "as available" basis. We
              make no representations or warranties of any kind, express or
              implied, regarding the operation, availability, accuracy,
              reliability, or suitability of the Website. To the fullest extent
              permitted by law, we disclaim all warranties, including but not
              limited to, implied warranties of merchantability and fitness for
              a particular purpose.
            </p>

            <p>Limitation of Liability</p>
            <p>
              To the maximum extent permitted by law, Royal Coinage and its
              affiliates, officers, directors, employees, agents, and partners
              shall not be liable for any direct, indirect, incidental,
              consequential, or special damages arising out of or in any way
              connected with your use of the Website or the content contained
              therein. This limitation of liability applies to all claims,
              whether based on contract, tort, negligence, strict liability, or
              any other legal theory.
            </p>
            <p>Modifications</p>
            <p>
              We reserve the right to modify or replace this Agreement at any
              time. Any changes will be effective immediately upon posting the
              updated Agreement on the Website. Your continued use of the
              Website after any such changes constitutes your acceptance of the
              modified terms.
            </p>
            <p>Severability</p>
            <p>
              If any provision of this Agreement is found to be invalid or
              unenforceable, the remaining provisions shall be enforced to the
              fullest extent permitted by law, and the unenforceable provision
              shall be deemed modified to the extent necessary to make it
              enforceable.
            </p>
            <p>Entire Agreement</p>
            <p>
              This Agreement constitutes the entire agreement between you and
              Royal Coinage regarding your use of the Website and supersedes all
              prior and contemporaneous agreements, representations, and
              understandings.
            </p>
            <p>Contact Us</p>
            <p>
              If you have any questions, comments, or concerns regarding these
              Terms and Conditions, please contact us at
              supportteam@royalcoinage.com.
            </p>
          </ModalTextWrap>
        </Modal>
      )}
    </>
  );
}

export default TermsModal;

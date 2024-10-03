document.getElementById('signature-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Capture user inputs
    const name = document.getElementById('name').value.trim();
    const title = document.getElementById('title').value.trim();
    const ext = document.getElementById('ext').value.trim();
    // Phone number is constant
    const phone = '888-585-4999';

    // Email signature HTML template with inline styles
    let template = `
<table cellpadding="0" cellspacing="0" border="0" style="font-family: Arial, sans-serif; color: #000000; max-width:600px; width:600px;">
  <tbody>
    <!-- Spacer Row -->
    <tr>
      <td colspan="3" height="90"></td>
    </tr>
    <tr>
      <td valign="top" style="width: 150px; padding-top:6px; padding-bottom:10px; border-top: 1px solid #2c7da5;">
        <img src="https://vhphoto.s3.us-east-2.amazonaws.com/Venhub+Logo+with+Black+-+Red+dot+no+background.png" alt="Logo" width="113" height="113" style="display: block; border: 0;">
      </td>
      <td style="width: 25px; border-top: 1px solid #2c7da5;"></td>
      <td valign="top" style="width: 425px; padding-top:6px; border-top: 1px solid #2c7da5;">
        <table cellpadding="0" cellspacing="0" border="0">
          <tr>
            <td style="font-size: 12pt; color: #2c7da5; font-weight: bold;">${name}</td>
          </tr>
          <tr>
            <td height="2"></td>
          </tr>
          <tr>
            <td style="font-size: 9pt; color: #000000;">${title}</td>
          </tr>
          <tr>
            <td height="10"></td>
          </tr>
          <tr>
            <td style="font-size: 9pt; color: #000000;">${phone}${ext ? ' | Ext. ' + ext : ''}</td>
          </tr>
          <tr>
            <td height="10"></td>
          </tr>
          <tr>
            <td style="font-size: 9pt; color: #000000;">
              VenHub is a Fully Robotic, Autonomous, and AI-Powered Smart Store.<br>
              Customer First | Innovate | Work Hard | Make History | Lead by Example
            </td>
          </tr>
          <tr>
            <td height="10"></td>
          </tr>
          <tr>
            <td>
              <table cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td style="padding-right: 5px;">
                    <a href="https://www.facebook.com/people/Venhub/100090915533691/" target="_blank">
                      <img src="https://www.mail-signatures.com/signature-generator/img/templates/wind-in-your-sails/fb.png" alt="Facebook" width="18" height="18" style="display: block; border: 0;">
                    </a>
                  </td>
                  <td style="padding-right: 5px;">
                    <a href="https://twitter.com/Venhubai" target="_blank">
                      <img src="https://www.mail-signatures.com/signature-generator/img/templates/wind-in-your-sails/tt.png" alt="Twitter" width="18" height="18" style="display: block; border: 0;">
                    </a>
                  </td>
                  <td style="padding-right: 5px;">
                    <a href="https://youtube.com/@Venhub" target="_blank">
                      <img src="https://www.mail-signatures.com/signature-generator/img/templates/wind-in-your-sails/yt.png" alt="YouTube" width="18" height="18" style="display: block; border: 0;">
                    </a>
                  </td>
                  <td>
                    <a href="https://www.linkedin.com/company/venhubai/" target="_blank">
                      <img src="https://www.mail-signatures.com/signature-generator/img/templates/wind-in-your-sails/ln.png" alt="LinkedIn" width="18" height="18" style="display: block; border: 0;">
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td height="10"></td>
          </tr>
          <tr>
            <td>
              <a href="http://www.venhub.com" style="display:inline-block; padding:7px 15px; background-color:#2c7da5; color:#ffffff; text-decoration:none; font-size:7pt; border-radius:4px; margin-right:10px;">Learn More</a>
              <a href="https://www.venhub.com/pre-order-main" style="display:inline-block; padding:7px 15px; background-color:#2c7da5; color:#ffffff; text-decoration:none; font-size:7pt; border-radius:4px;">Pre-Order</a>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </tbody>
</table>
`;

    // Display the generated signature in the output div
    const signatureOutput = document.getElementById('signature-output');
    signatureOutput.innerHTML = template;

    // Make the signature output contenteditable to facilitate copying
    signatureOutput.setAttribute('contenteditable', 'true');

    // Display the raw HTML code in the textarea
    document.getElementById('signature-html').value = template;

    // Show the Copy buttons
    document.getElementById('copy-signature-button').style.display = 'block';
    document.getElementById('copy-html-button').style.display = 'block';
});

// Copy Signature Button Functionality
document.getElementById('copy-signature-button').addEventListener('click', function() {
    const signatureOutput = document.getElementById('signature-output');

    // Select the content of the signature output div
    const range = document.createRange();
    range.selectNodeContents(signatureOutput);

    // Remove any existing selections
    const selection = window.getSelection();
    selection.removeAllRanges();

    // Add the new range to the selection
    selection.addRange(range);

    try {
        // Execute the copy command
        const successful = document.execCommand('copy');
        if (successful) {
            alert('Signature copied to clipboard!');
        } else {
            alert('Unable to copy. Please manually copy the signature.');
        }
    } catch (err) {
        console.error('Failed to copy: ', err);
        alert('Unable to copy. Please manually copy the signature.');
    }

    // Remove the selection
    selection.removeAllRanges();
});

// Copy HTML Code Button Functionality
document.getElementById('copy-html-button').addEventListener('click', async function() {
    const signatureHtml = document.getElementById('signature-html');
    try {
        await navigator.clipboard.writeText(signatureHtml.value);
        alert('HTML code copied to clipboard!');
    } catch (err) {
        console.error('Failed to copy: ', err);
        alert('Unable to copy. Please manually copy the HTML code.');
    }
});

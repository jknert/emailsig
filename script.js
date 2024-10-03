document.getElementById('signature-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Capture user inputs
    const name = document.getElementById('name').value.trim();
    const title = document.getElementById('title').value.trim();
    const ext = document.getElementById('ext').value.trim();
    // Phone number is constant
    const phone = '888-585-4999';

    // Email signature HTML template with placeholders
    let template = `<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN">
<HTML>
<HEAD>
  <TITLE>Email Signature</TITLE>
  <META content="text/html; charset=utf-8" http-equiv=Content-Type>
</HEAD>
<BODY style="font-size: 10pt; font-family: Tahoma, sans-serif;">
  <table cellspacing="0" cellpadding="0" border="0" style="font-family: Arial, sans-serif; color: #000000; max-width:600px; width:600px;">
    <tbody>
      <!-- Added padding before the blue line -->
      <tr>
        <td colspan="3" style="padding-top: 60px;"></td>
      </tr>
      <tr>
        <td style="width: 150px; font-size: 10pt; color: #000000; line-height:12pt; padding-top:6px; padding-bottom:10px; border-top: 1px solid #2c7da5;" valign="top">
          <p style="padding-right: 2px;">
            <img border="0" width="113" height="113" style="max-width:113px; height:auto; border:0;" src="https://vhphoto.s3.us-east-2.amazonaws.com/Venhub+Logo+with+Black+-+Red+dot+no+background.png"><br>
          </p>
        </td>
        <td style="width: 25px; border-top: 1px solid #2c7da5;"></td>
        <td valign="top" style="width: 425px; font-family: Arial, sans-serif; line-height:15px; padding-top:6px; padding-bottom:0px; border-top: 1px solid #2c7da5; word-wrap: break-word;">
          <span style="font-size: 12pt; color: #2c7da5;"><strong>${name}</strong></span><br style="line-height:2px;">
          <!-- Added 2px padding under the name for the title -->
          <span style="font-size: 9pt; color: #000000;">${title}<br><br></span>
          <!-- Phone number and extension formatted -->
          <span style="font-size: 9pt; color: #000000; line-height: 13pt;">
            ${phone}${ext ? ' | Ext. ' + ext : ''}<br>
          </span>
          <!-- Updated tagline with "VenHub" capitalization -->
          <span style="font-size: 9pt; color: #000000; line-height: 13pt;">
            VenHub is a Fully Robotic, Autonomous, and AI-Powered Smart Store. Customer First | Innovate | Work Hard | Make History | Lead by Example
          </span>
        </td>
      </tr>
      <tr>
        <td>
          <table cellspacing="0" cellpadding="0" border="0">
            <tbody>
              <tr>
                <td style="padding-right: 5px; height: 22px;">
                  <a href="https://www.facebook.com/people/Venhub/100090915533691/" target="_blank" rel="noopener">
                    <img border="0" width="18" height="18" style="border:0; height:18px; width:18px" src="https://www.mail-signatures.com/signature-generator/img/templates/wind-in-your-sails/fb.png">
                  </a>
                </td>
                <td style="padding-right: 5px;">
                  <a href="https://twitter.com/Venhubai" target="_blank" rel="noopener">
                    <img border="0" width="18" height="18" style="border:0; height:18px; width:18px" src="https://www.mail-signatures.com/signature-generator/img/templates/wind-in-your-sails/tt.png">
                  </a>
                </td>
                <td style="padding-right: 5px;">
                  <a href="https://youtube.com/@Venhub" target="_blank" rel="noopener">
                    <img border="0" width="18" height="18" style="border:0; height:18px; width:18px" src="https://www.mail-signatures.com/signature-generator/img/templates/wind-in-your-sails/yt.png">
                  </a>
                </td>
                <td style="padding-right: 5px;">
                  <a href="https://www.linkedin.com/company/venhubai/" target="_blank" rel="noopener">
                    <img border="0" width="18" height="18" style="border:0; height:18px; width:18px" src="https://www.mail-signatures.com/signature-generator/img/templates/wind-in-your-sails/ln.png">
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </td>
        <td style="width: 20px;"></td>
        <td valign="bottom" style="font-family: Arial, sans-serif; line-height:15px; padding-bottom:0px;">
          <!-- Moved buttons up and resized them -->
          <br>
          <a href="http://www.venhub.com" style="display:inline-block; padding:7px 15px; background-color:#2c7da5; color:#ffffff; text-decoration:none; font-size:7pt; border-radius:4px; margin-right:10px;">Learn More</a>
          <a href="https://www.venhub.com/pre-order-main" style="display:inline-block; padding:7px 15px; background-color:#2c7da5; color:#ffffff; text-decoration:none; font-size:7pt; border-radius:4px;">Pre-Order</a>
        </td>
      </tr>
    </tbody>
  </table>
</BODY>
</HTML>
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

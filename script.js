document.getElementById('signature-form').addEventListener('submit', function (e) {
    e.preventDefault();

    // Capture user inputs
    const name = document.getElementById('name').value.trim();
    const title = document.getElementById('title').value.trim();
    const ext = document.getElementById('ext').value.trim();
    // Phone number is constant
    const phone = '888-585-4999';

    // Disclaimer text
    const disclaimer = `This email and any files transmitted with it are confidential and intended solely for the use of the individual or 
    entity to whom they are addressed. If you have received this email in error please notify the system manager. This message contains 
    confidential information and is intended only for the individual named. If you are not the named addressee you should not disseminate, 
    distribute or copy this e-mail. Please notify the sender immediately by e-mail if you have received this e-mail by mistake and delete this e-mail 
    from your system. If you are not the intended recipient you are notified that disclosing, copying, distributing or taking any action in reliance on 
    the contents of this information is strictly prohibited. If you are not the intended recipient you are notified that disclosing, copying, distributing 
    or taking any action in reliance on the contents of this information is strictly prohibited. Nothing in this email should be construed as an agreement, 
    or intent to agree, or advise, or representation of the company’s position, or releasing any confidential information, can be used as any form of evidence. 
    This email is strictly as a basic form of communication and legal standing or official communication, all commitments, official communications, company’s 
    position with regards to any terms of communication must be in a form of a contract along with a non-disclosure agreement and non-compete agreement. Should 
    you disagree with any of the above, please notify the sender within 24 hours from receipt. As you read this email and not notify the sender of your objection 
    will be an acceptance by you.`;

// Email signature HTML template with placeholders
let template = `
<table cellpadding="0" cellspacing="0" border="0" style="font-family: Arial, sans-serif; color: #000000; width:600px;">
    <tr>
        <td colspan="3" style="padding-top: 60px;"></td>
    </tr>
    <tr>
        <!-- Logo Column -->
        <td valign="top" style="width: 150px; padding-top:6px; padding-bottom:10px; border-top: 1px solid #2c7da5;">
            <img src="https://vhphoto.s3.us-east-2.amazonaws.com/Venhub+Logo+with+Black+-+Red+dot+no+background.png" alt="VenHub Logo" style="border:0; max-width:113px; height:auto;">
        </td>
        <!-- Spacer Column -->
        <td style="width: 25px; border-top: 1px solid #2c7da5;"></td>
        <!-- Content Column -->
        <td valign="top" style="border-top: 1px solid #2c7da5;">
            <table cellpadding="0" cellspacing="0" border="0" style="width:100%;">
                <!-- Spacer Above Name -->
                <tr>
                    <td style="height: 7px;"></td>
                </tr>
                <!-- Name -->
                <tr>
                    <td style="font-size: 12pt; color: #2c7da5; font-weight: bold; line-height: 16pt;">${name}</td>
                </tr>
                <!-- Spacer Below Name -->
                <tr>
                    <td style="height: 2px;"></td>
                </tr>
                <!-- Title -->
                <tr>
                    <td style="font-size: 9pt; color: #000000; line-height: 12pt;">${title}</td>
                </tr>
                <!-- Spacer -->
                <tr>
                    <td style="height: 10px;"></td>
                </tr>
                <!-- Phone and Extension -->
                <tr>
                    <td style="font-size: 9pt; color: #000000; line-height: 12pt;">${phone}${ext ? ' | Ext. ' + ext : ''}</td>
                </tr>
                <!-- Spacer -->
                <tr>
                    <td style="height: 10px;"></td>
                </tr>
                <!-- Tagline -->
                <tr>
                    <td style="font-size: 9pt; color: #000000; line-height: 13pt;">
                        VenHub is a Fully Robotic, Autonomous, and AI-Powered Smart Store. Customer First | Innovate | Work Hard | Make History | Lead by Example
                    </td>
                </tr>
                <!-- Spacer -->
                <tr>
                    <td style="height: 10px;"></td>
                </tr>
                <!-- Buttons -->
                <tr>
                    <td>
                        <a href="http://www.venhub.com" style="display:inline-block; padding:7px 15px; background-color:#2c7da5; color:#ffffff; text-decoration:none; font-size:7pt; line-height: 9pt; border-radius:4px; margin-right:10px;">Learn More</a>
                        <a href="https://www.venhub.com/pre-order-main" style="display:inline-block; padding:7px 15px; background-color:#2c7da5; color:#ffffff; text-decoration:none; font-size:7pt; line-height: 9pt; border-radius:4px;">Pre-Order</a>
                    </td>
                </tr>
                <!-- Spacer After Buttons -->
                <tr>
                    <td style="height: 10px;"></td>
                </tr>
                <!-- Social Media Icons -->
                <tr>
                    <td>
                        <table cellpadding="0" cellspacing="0" border="0">
                            <tr>
                                <td style="padding-right: 5px;">
                                    <a href="https://www.facebook.com/people/Venhub/100090915533691/" target="_blank">
                                        <img src="https://www.mail-signatures.com/signature-generator/img/templates/wind-in-your-sails/fb.png" alt="Facebook" width="18" height="18" style="border:0;">
                                    </a>
                                </td>
                                <td style="padding-right: 5px;">
                                    <a href="https://twitter.com/Venhubai" target="_blank">
                                        <img src="https://www.mail-signatures.com/signature-generator/img/templates/wind-in-your-sails/tt.png" alt="Twitter" width="18" height="18" style="border:0;">
                                    </a>
                                </td>
                                <td style="padding-right: 5px;">
                                    <a href="https://youtube.com/@Venhub" target="_blank">
                                        <img src="https://www.mail-signatures.com/signature-generator/img/templates/wind-in-your-sails/yt.png" alt="YouTube" width="18" height="18" style="border:0;">
                                    </a>
                                </td>
                                <td>
                                    <a href="https://www.linkedin.com/company/venhubai/" target="_blank">
                                        <img src="https://www.mail-signatures.com/signature-generator/img/templates/wind-in-your-sails/ln.png" alt="LinkedIn" width="18" height="18" style="border:0;">
                                    </a>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
                <!-- Spacer -->
                <tr>
                    <td style="height: 20px;"></td>
                </tr>
                <!-- Disclaimer Section -->
                <tr>
                    <td style="font-size: 6pt; color: #888888; line-height: 8pt;">
                        ${disclaimer}
                    </td>
                </tr>
            </table>
        </td>
    </tr>
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
document.getElementById('copy-signature-button').addEventListener('click', function () {
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
document.getElementById('copy-html-button').addEventListener('click', async function () {
    const signatureHtml = document.getElementById('signature-html');
    try {
        await navigator.clipboard.writeText(signatureHtml.value);
        alert('HTML code copied to clipboard!');
    } catch (err) {
        console.error('Failed to copy: ', err);
        alert('Unable to copy. Please manually copy the HTML code.');
    }
});

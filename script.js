document.getElementById('signature-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Capture user inputs
    const name = document.getElementById('name').value.trim();
    const title = document.getElementById('title').value.trim();
    const email = document.getElementById('email').value.trim();
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
<table cellspacing="0" cellpadding="0" border="0" style="font-family: Arial, sans-serif; color: #000000; max-width:370px; background: transparent !important;">
<tbody>
<tr>
<td style="width: 105px; font-size: 10pt; padding-top: 15px; color: #000000; line-height:12pt; padding-bottom:10px; border-top: 1px solid #2c7da5;" valign="top">
<p style="padding-right: 2px;">
<img border="0" width="80" style="max-width:80px; height:auto; border:0;" src="https://static.wixstatic.com/media/c44583_759a11bf439b498096fc0dbb7fc0cea9~mv2.png"><br>
</p>
</td>
<td style="width: 25px; padding-top: 15px; border-top: 1px solid #2c7da5;"></td>
<td valign="top" style="padding-top: 15px; font-family: Arial, sans-serif; line-height:15px; padding-bottom:0px; border-top: 1px solid #2c7da5;">
<span style="font-size: 12pt; color: #2c7da5;"><strong>${name}</strong><br></span>
<span style="font-size: 9pt; color: #000000;">${title}<br><br></span>
<span style="font-size: 9pt; color: #000000; line-height: 13pt;">
<a href="mailto:${email}" style="font-size: 9pt; color: #000000; line-height: 13pt; text-decoration: none;">
<span style="font-size: 9pt; color: #000000; line-height: 13pt; text-decoration: none;">${email}</span>
</a><br>
</span>
<span style="font-size: 9pt; color: #000000; line-height: 13pt;">
${ext ? 'ext ' + ext + ' | ' : ''}${phone}<br>
</span>
<span style="font-size: 9pt; color: #000000; line-height: 13pt;">The Smartest Store On The Block</span>
</td>
</tr>
<tr>
<td>
<table cellspacing="0" cellpadding="0" border="0" style="background: transparent !important;">
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
<span>
<a href="http://www.venhub.com" target="_blank" rel="noopener" style="text-decoration:none; color:#2c7da5; font-size:9pt;">
<strong>www.venhub.com</strong>
</a>
</span>
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

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Customer Enquiry</title>
</head>

<body style="
    margin: 0;
    padding: 0;
    background-color: #f4f6f8;
    font-family: Arial, Helvetica, sans-serif;
    color: #333333;
">


<div style="
    font-family: Arial, sans-serif;
    max-width: 600px;
    padding: 20px;
    color: #333;
">

    <h2 style="
        margin-bottom: 25px;
        color: #222;
    ">
        New Customer Enquiry
    </h2>

    <p><strong>Name:</strong> {{ $mailData['name'] }}</p>

    <p><strong>Email:</strong> {{ $mailData['email'] }}</p>

    <p><strong>Phone:</strong> {{ $mailData['phone'] ?? 'Not provided' }}</p>

    <p><strong>Subject:</strong> {{ $mailData['subject'] ?? 'No subject' }}</p>

    <p style="margin-bottom: 8px;">
        <strong>Message:</strong>
    </p>

    <div style="
        padding: 12px 15px;
        background: #f5f5f5;
        border-left: 3px solid #0d6efd;
        margin-bottom: 25px;
    ">
        {{ $mailData['message'] }}
    </div>

    <p style="margin-top: 20px;">
        Thanks,<br>
        <strong>Your Website Team</strong>
    </p>

</div>



</body>
</html>


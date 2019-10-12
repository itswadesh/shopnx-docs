---
title: Settings (ShopNx)
date: 2019-10-12 06:40:12
---
## Server Settings

``` js
smsEnabled = true;
  emailEnabled = true;
  product: any = { moderate: false };

  reviewSettings: any = {
    enabled: true, // Enables review for products
    moderate: false // If enabled, the review will be visible to public after admin approval
  };
  // List of user roles
  userRoles: string[] = ['user', 'vendor', 'manager', 'admin']; // This should be in ascending order of authority. e.g. In this case guest will not have access to any other role, where as admin will have the role of guest+user+vendor+manager+admin

  CONTACT_US_EMAIL = 'admin@codenx.com'
  forgotPasswordEmail = (body: any) => { // Expects email id and password reset token
    return {
      from: 'passwordreset@codenx.com',
      to: body.email,
      subject: 'ShopNx Password Reset Request',
      text: 'You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n' +
      'Please click on the following link, or paste this into your browser to complete the process:\n\n' +
      process.env.DOMAIN + '/account/reset-password/' + body.token + '\n\n' +
      'If you did not request this, please ignore this email and your password will remain unchanged.\n'
    };
  };
  resetPasswordEmail = (body: any) => { // Expects email id and name
    return {
      from: 'passwordreset@codenx.com',
      to: body.email,
      subject: 'ShopNx Password Changed',
      text: 'Hello,\n\n' +
      'This is a confirmation that the password for your account ' + body.to + ' has just been changed.\n'
    };
  };
  orderPlacedEmail = (body: any) => { // Expects email id, orderNo, ...
    return {
      from: 'CodeNx <admin@codenx.com>',
      to: body.to,
      subject: 'Order Placed Successfully',
      text: 'Order No: ' + body.orderNo
      + '\n Status: ' + body.status
      + '\n\n Payment Method: ' + body.payment_method
      + '\n\n Payment ID: ' + body.id
      + '\n Amount: ' + body.amount.currency + ' ' + Math.round(body.amount.total * 100 / body.amount.exchange_rate) / 100
      + '\n\n Name: ' + body.address.recipient_name
      + '\n Address: ' + body.address.line1
      + '\n City: ' + body.address.city
      + '\n Zip: ' + body.address.postal_code
    };
  };
  orderUpdatedEmail = (body: any) => {
    return {
      from: 'CodeNx <admin@codenx.com>',
      to: body.to,
      subject: 'Your Order Status Updated',
      text: 'Order No: ' + body.orderNo
      + '\n Status: ' + body.status
      + '\n\n Payment Method: ' + body.payment_method
      + '\n\n Payment ID: ' + body.id
      + '\n Amount: ' + body.amount.currency + ' ' + Math.round(body.amount.total * 100 / body.amount.exchange_rate) / 100
      + '\n\n \n Name: ' + body.address.recipient_name
      + '\n Address: ' + body.address.line1
      + '\n City: ' + body.address.city
      + '\n State: ' + body.address.state
      + '\n Zip: ' + body.address.postal_code
    };
  };
```

### ENV Settings

``` js
NODE_ENV=production
DOMAIN=http://localhost:4200
MONGODB_URI=mongodb://localhost:27017/shopnx8
SESSION_SECRET=shopnx5-secret
PAYPAL_MODE=sandbox
PAYPAL_CLIENT_ID=YOUR_PAYPAL_CLIENT_ID
PAYPAL_CLIENT_SECRET=YOUR_PAYPAL_CLIENT_SECRET
STRIPE_APIKEY=sk_test_REST_OF_YOUR_KEY
SENDGRID_APIKEY=YOUR_SENDGRID_API_KEY
FACEBOOK_ID=YOUR_FACEBOOK_ID
FACEBOOK_SECRET=YOUR_FACEBOOK_SECRET
TWITTER_ID=YOUR_TWITTER_ID
TWITTER_SECRET=YOUR_TWITTER_SECRET
GOOGLE_ID=YOUR_GOOGLE_ID
GOOGLE_SECRET=YOUR_GOOGLE_SECRET
GOOGLE_MAPS_API=YOUR_GOOGLE_MAPS_API
```  

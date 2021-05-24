# authenticationTask

There are two roles 
1.User
2.Admin

When anyone uses the website for the first time, they have to register, and after that need to login and only after login the access to secret page and logout page will be given.
If users visit the secret page, they will be able to see the messages onlly but if admin visits the secret page, he will be able to see all the information of the account.
Only admin has access to admin page.
There are two types of logout feature-> 1. logout which logs off from single session only and 2. logoutall which logs off from all sessions/devices.
Used jwt for authentication and bcrypt for hashing of password.

Admin ccredentials
email: admin@gmail.com
password: admin

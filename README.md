# react-login-register-app

Bootstrap Based Registration and Login Page with Php/Mysqli as Backend.

Used Bootstrap cdn : 5.0

react-bootstrap: ^2.5.0 anf

for more details check package file.

A. Registration Form

B. Login Page.

C. Post Login Router used for navigation.

D. There is Dashboard Page with Charts JS.

E. Data Entry Page with Autorefresh Table with Modal Edit and Save.

F. Free Api used to Show some news.

G. To Deply in Wampserver. Follow the steps :
    
    1. First go to entry page, where router is setup for navigation. Then add basename={"/reactLoginApp"} in <Router > component. 
    Like <Router basename={"/reactLoginApp"}>.   
    Here, "reactLoginApp" is the folder name in wamp.
    
    2. Then goto package.json file. add ,"homepage": "http://localhost:81/reactLoginApp".
    homepage key will point the app homepage to mentioned url.
    
    3.Then Navigate to public folder and create a .Htaccess file. put content inside as mentioned below.
      Options -MultiViews
      RewriteEngine On
      RewriteCond %{REQUEST_FILENAME} !-f
      RewriteRule ^ index.html [QSA,L] 
    
    4. Then run command for build.
      npm run build
      
    5. Move the build folder content to wampserver app folder.
    
    6. Done
    

Many to come... 

<!-- For facebook Api --> Research by Zizette for facebook connection
The first step when loading your web page is figuring out if a person is already logged into your app with Facebook login. You start that process with a call to FB.getLoginStatus. That function will trigger a call to Facebook to get the login status and call your callback function with the results.
Taken from the sample code above, here's some of the code that's run during page load to check a person's login status:
<!-- ************** -->
FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
});

{
    status: 'connected',
    authResponse: {
        accessToken: '...',
        expiresIn:'...',
        signedRequest:'...',
        userID:'...'
    }
}  remaining explanation on the below link
https://developers.facebook.com/apps/1106885940690212/fb-login/quickstart/


<fb:login-button 
  scope="public_profile,email"
  onlogin="checkLoginState();">
</fb:login-button>

function checkLoginState() {
  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });
}
<script>
  window.fbAsyncInit = function() {
    FB.init({
      appId      : '{your-app-id}',
      cookie     : true,
      xfbml      : true,
      version    : '{api-version}'
    });
      
    FB.AppEvents.logPageView();   
      
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "https://connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));
</script>
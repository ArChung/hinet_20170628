if (ChungTool.isOnline()) {
    window.fbAsyncInit = function() {
        FB.init({
            appId: '1029354970544030',
            xfbml: true,
            version: 'v2.8'
        });
    };

    (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {
            return;
        }
        js = d.createElement(s);
        js.id = id;
        js.src = "//connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

}
var FBTool = FBTool || {};

(function() {

    //動態 load 外部js
    function shareFB_ui(url, imagesUrl, title, descriptiom, cb) {



        if (ChungTool.isPhone()) {
            FB.ui({
                method: 'share',
                href: url, // The same than link in feed method
                title: title, // The same than name in feed method
                picture: imagesUrl + '?r=' + Math.random(),
                caption: url,
                description: descriptiom,
            }, function(response) {
                if (response && !response.error_message) {
                    cb(response);
                } else {
                    console.log('Error while posting:' + response.error_message);
                }
            });
        } else {
            if (!navigator.userAgent.match("CriOS") && !navigator.userAgent.match("Line") && !navigator.userAgent.match("Chrome")) {
                FB.ui({
                        method: 'share_open_graph',
                        action_type: 'og.shares',
                        action_properties: JSON.stringify({
                            object: {

                                'og:url': url,
                                'og:title': title,
                                'og:description': descriptiom,
                                'og:image': imagesUrl
                            }
                        })
                    },
                    function(response) {
                        if (response && !response.error_message) {
                            cb(response);
                        } else {
                            cb('error');
                        }
                    }
                );
            } else {
                var share = 'https://www.facebook.com/dialog/share?' +
                    'app_id=1029354970544030' +
                    '&title=' + title +
                    '&caption=' +
                    '&description=' + descriptiom +
                    '&display=touch' +
                    '&href=' + url +
                    '&picture=' + imagesUrl +
                    '&redirect_uri=' + url
                window.location.href = share;
            }
        }
    }



    // This function is called when someone finishes with the Login
    // Button.  See the onlogin handler attached to it in the sample
    // code below.
    function checkLoginState(cb) {
        FB.getLoginStatus(function(response) {
            console.log(response);
            if (response.status === 'connected') {
                cb(response);
            } else if (response.status === 'not_authorized') {
                // The person is logged into Facebook, but not your app.
            } else {
                // The person is not logged into Facebook, so we're not sure if
                // they are logged into this app or not.
            }
        });
    }



    // Here we run a very simple test of the Graph API after login is
    // successful.  See statusChangeCallback() for when this call is made.
    function testAPI() {
        console.log('Welcome!  Fetching your information.... ');
        FB.api('/me', function(response) {
            console.log('Successful login for: ' + response.name);
            console.log(response);
        });


    }

    function login(cb) {

        FB.login(function(response) {
            if (response.authResponse) {
                FB.api('/me?fields=id,name,email', function(response) {
                    console.log(response);
                    cb(response);
                });
            } else {
                console.log('Auth cancelled.')
            }
        }, { scope: 'email' });
    }




    FBTool.shareFB_ui = shareFB_ui;
    FBTool.checkLoginState = checkLoginState;
    FBTool.login = login;

})();

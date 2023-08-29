document.addEventListener('DOMContentLoaded', async () => {
    const githubLoginButton = document.getElementById('githubLogin');
    const googleLoginButton = document.getElementById('googleLogin');

    // Fetch the configuration from the JSON file
    const response = await fetch('config.json');
    const config = await response.json();

    githubLoginButton.addEventListener('click', () => {
        const authUrl = `${config.githubAuthorizationEndpoint}?client_id=${config.githubClientId}&redirect_uri=${config.githubRedirectUri}`;
        window.location.href = authUrl;
    });

    googleLoginButton.addEventListener('click', () => {
        const authUrl = `${config.googleAuthUri}?client_id=${config.googleClientId}&redirect_uri=${config.googleRedirectUri}&response_type=code&scope=openid profile email`;
        window.location.href = authUrl;
    });
});

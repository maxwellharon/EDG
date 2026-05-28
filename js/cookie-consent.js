< !--Cookie Consent Banner-- >
<style>
  .cookie-consent-banner {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background: #1A685B; /* dark green */
    color: #fff;
    z-index: 1050;
    padding: 1.2rem 2rem;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0 -4px 20px rgba(0,0,0,0.2);
    font-family: 'Open Sans', sans-serif;
    transform: translateY(100%);
    transition: transform 0.5s ease;
  }
  .cookie-consent-banner.show {
    transform: translateY(0);
  }
  .cookie-consent-banner p {
    margin: 0;
    font-size: 0.95rem;
    flex: 1 1 300px;
    padding-right: 1.5rem;
    line-height: 1.5;
  }
  .cookie-consent-banner a {
    color: #FDC82F;
    text-decoration: underline;
    font-weight: 600;
  }
  .cookie-consent-banner .btn-group {
    display: flex;
    gap: 10px;
    flex-shrink: 0;
  }
  .cookie-consent-banner .btn {
    border: none;
    padding: 0.5rem 1.8rem;
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 600;
    letter-spacing: 0.5px;
    transition: 0.3s;
    border-radius: 0;
  }
  .cookie-consent-banner .btn-accept {
    background: #BF6212; /* orange */
    color: #fff;
  }
  .cookie-consent-banner .btn-accept:hover {
    background: #d4741a;
  }
  .cookie-consent-banner .btn-reject {
    background: transparent;
    border: 2px solid #fff;
    color: #fff;
  }
  .cookie-consent-banner .btn-reject:hover {
    background: rgba(255,255,255,0.1);
  }
  @media (max-width: 600px) {
    .cookie-consent-banner {
      flex-direction: column;
      text-align: center;
      padding: 1rem;
    }
    .cookie-consent-banner p {
      padding-right: 0;
      margin-bottom: 1rem;
    }
    .cookie-consent-banner .btn-group {
      width: 100%;
      justify-content: center;
    }
  }
</style>

<div id="cookieConsentBanner" class="cookie-consent-banner">
  <p>We use cookies and similar technologies to improve your experience, analyze traffic, and for marketing purposes. By clicking "Accept", you consent to our use of cookies as described in our <a href="privacy.html">Privacy Policy</a>. You can reject non‑essential cookies.</p>
  <div class="btn-group">
    <button id="acceptCookies" class="btn btn-accept">Accept</button>
    <button id="rejectCookies" class="btn btn-reject">Reject</button>
  </div>
</div>

<script>
  (function() {
    const banner = document.getElementById('cookieConsentBanner');
    const acceptBtn = document.getElementById('acceptCookies');
    const rejectBtn = document.getElementById('rejectCookies');

    // Check if choice already made
    if (localStorage.getItem('cookieConsent') === null) {
      // Show banner with slight delay for smooth animation
      setTimeout(() => {
        banner.classList.add('show');
      }, 500);
    }

    function hideBanner() {
      banner.classList.remove('show');
      // Optionally remove from DOM after transition
      setTimeout(() => {
        banner.style.display = 'none';
      }, 500);
    }

    acceptBtn.addEventListener('click', function() {
      localStorage.setItem('cookieConsent', 'accepted');
      hideBanner();
      // Here you could load analytics/scripts that require consent
    });

    rejectBtn.addEventListener('click', function() {
      localStorage.setItem('cookieConsent', 'rejected');
      hideBanner();
      // Ensure no tracking scripts are loaded
    });
  })();
</script>
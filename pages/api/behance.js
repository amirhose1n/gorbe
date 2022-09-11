export async function fetchBehance() {
  const res = await fetch(
    "https://www.behance.net/Everythingbygorbe/projects",
    {
      headers: {
        accept: "*/*",
        "accept-language": "en-GB-oxendict,en;q=0.9",
        "if-modified-since": "Sun, 11 Sep 2022 16:08:26 +0000",
        "sec-ch-ua":
          '"Google Chrome";v="105", "Not)A;Brand";v="8", "Chromium";v="105"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Windows"',
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        "x-bcp": "9b962c56-0b12-472a-92b9-e54108b5a8ee",
        "x-newrelic-id": "VgUFVldbGwsFU1BRDwUBVw==",
        "x-requested-with": "XMLHttpRequest",
        cookie:
          "gk_suid=27451204; gki=%7B%22webp_covers%22%3Afalse%2C%22google_one_tap_login%22%3Afalse%2C%22feature_user_dropdown%22%3Afalse%2C%22ccx_redirect_logged_out%22%3Afalse%7D; bcp=9b962c56-0b12-472a-92b9-e54108b5a8ee; AMCVS_9E1005A551ED61CA0A490D45%40AdobeOrg=1; AMCV_9E1005A551ED61CA0A490D45%40AdobeOrg=870038026%7CMCMID%7C09365507019887214033584069252251578123%7CMCAAMLH-1663517273%7C6%7CMCAAMB-1663517273%7CRKhpRz8krg2tLO6pguXWp5olkAcUniQYPHaMWWgdJ3xzPWQmdj0y%7CMCOPTOUT-1662919673s%7CNONE%7CMCAID%7CNONE%7CMCCIDH%7C-1155772203%7CvVersion%7C5.0.0; s_cc=true; OptanonAlertBoxClosed=2022-09-11T16:08:08.293Z; OptanonConsent=isIABGlobal=false&datestamp=Sun+Sep+11+2022+20%3A38%3A08+GMT%2B0430+(Iran+Daylight+Time)&version=6.9.0&hosts=&consentId=96658df8-cdbb-48d0-9e11-ff30ee823e2f&interactionCount=2&landingPath=NotLandingPage&groups=C0001%3A1%2CC0002%3A1%2CC0003%3A1%2CC0004%3A1; bcp_generated=1662912465677; _fbp=fb.1.1662912489868.943788773; gpv=behance.net:profile:default; s_sq=%5B%5BB%5D%5D; s_ppv=[%22www.behance.net/Everythingbygorbe%22%2C81%2C0%2C969%2C1920%2C612%2C1920%2C1080%2C1%2C%22P%22]; ilo0=true",
        Referer: "https://www.behance.net/Everythingbygorbe",
        "Referrer-Policy": "strict-origin-when-cross-origin",
      },
      body: null,
      method: "GET",
    }
  );
  const data = await res.json();
  return { props: { data } };
}

export default fetchBehance;

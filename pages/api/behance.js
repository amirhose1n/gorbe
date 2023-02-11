export async function fetchBehance() {
  try{
  const res = await fetch("https://www.behance.net/Everythingbygorbe/projects?offset=12", {
    "headers": {
      "accept": "*/*",
      "accept-language": "en-GB-oxendict,en;q=0.9",
      "sec-ch-ua": "\"Not_A Brand\";v=\"99\", \"Google Chrome\";v=\"109\", \"Chromium\";v=\"109\"",
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": "\"Windows\"",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin",
      "x-bcp": "112e52f7-9c4c-41a2-8e86-37f35090ce27",
      "x-newrelic-id": "VgUFVldbGwsFU1BRDwUBVw==",
      "x-requested-with": "XMLHttpRequest",
      "cookie": "OptanonConsent=groups=C0001:1,C0002:1,C0003:1,C0004:1; OptanonAlertBoxClosed=2024-01-27T12:13:58.514Z; _fbp=fb.1.1674821645864.685572955; gki={%22feature_adobe_checkout_modal_primary_nav%22:false}; bcp=112e52f7-9c4c-41a2-8e86-37f35090ce27; bcp_generated=1676150383339; AMCV_9E1005A551ED61CA0A490D45%40AdobeOrg=870038026%7CMCMID%7C80901385404989581404280593311157019834%7CMCAAMLH-1676755185%7C6%7CMCAAMB-1676755185%7CRKhpRz8krg2tLO6pguXWp5olkAcUniQYPHaMWWgdJ3xzPWQmdj0y%7CMCOPTOUT-1676157585s%7CNONE%7CMCAID%7CNONE%7CMCCIDH%7C9929131%7CvVersion%7C5.0.0; g_state={\"i_p\":1676236789790,\"i_l\":2}; gpv=behance.net:profile:default; gk_suid=38065512; ilo0=true; sat_domain=A; s_ppv=[%22www.behance.net/Everythingbygorbe%22%2C100%2C0%2C1329%2C1920%2C500%2C1920%2C1080%2C1%2C%22P%22]",
      "Referer": "https://www.behance.net/Everythingbygorbe",
      "Referrer-Policy": "strict-origin-when-cross-origin"
    },
    "body": null,
    "method": "GET"
  });
  const data = await res.json();
  return { props: { data } };
}
  catch(e){
    console.log(e,'errr')
  }

}

export default fetchBehance;
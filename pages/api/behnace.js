function Page({ data }) {
    // Render data...
 
  }
  

  export async function getServerSideProps() {
    
    const res = await fetch("https://www.behance.net/Everythingbygorbe/projects?offset=1", {
        "headers": {
          "accept": "/",
          "accept-language": "en-GB,en;q=0.9,fa-IR;q=0.8,fa;q=0.7,en-US;q=0.6,vi;q=0.5",
          "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"100\", \"Google Chrome\";v=\"100\"",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": "\"Windows\"",
          "sec-fetch-dest": "empty",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-origin",
          "x-bcp": "cbe722ef-8576-412b-864a-08fdc955df19",
          "x-newrelic-id": "VgUFVldbGwsFU1BRDwUBVw==",
          "x-requested-with": "XMLHttpRequest"
        },
        "referrer": "https://www.behance.net/Everythingbygorbe" ,
        "referrerPolicy": "strict-origin-when-cross-origin" ,
        "body": null ,
        "method": "GET",
        "mode": "cors",
        "credentials": "include"
      });
    const data = await res.json()
    console.log(data);
    
    return { props: { data } }
  }
  
  export default Page;
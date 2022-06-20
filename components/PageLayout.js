import Head from "next/head"

const PageLayout = (props) => {
    return(
      <>
      <Head>
      <title>Rally</title>
      {/* <meta name="title" content="Budgeting Made Easy"/>
      <meta name="description" content="All-in-One Financial Management Tool"></meta> */}
      <meta name="viewport" content="width=device-width"/>
    	<meta charSet="utf-8" />
      <meta property="og:type" content="website"/>
      <meta property="og:url" content="https://seo-exercise.vercel.app/"/>
      <meta property="og:title" content="Budgeting Made Easy" key="title" />
      <meta property="og:description" content="All-in-One Financial Management Tool"/>
      <meta property="og:image" content="https://ik.imagekit.io/gclk8b7ii/banner-image_tEQtSDIdi.png?ik-sdk-version=javascript-1.4.3&updatedAt=1655659010257"/>

      <meta property="twitter:card" content="summary_large_image"/>
      <meta property="twitter:url" content="https://seo-exercise.vercel.app/"/>
      <meta property="twitter:title" content="Budgeting Made Easy."/>
      <meta property="twitter:description" content="All-in-One Financial Management Tool"/>
      <meta property="twitter:image" content="https://ik.imagekit.io/gclk8b7ii/banner-image_tEQtSDIdi.png?ik-sdk-version=javascript-1.4.3&updatedAt=1655659010257"/>
      <meta />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css" rel="stylesheet" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Newsreader:ital,wght@0,600;1,600&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,300;0,500;0,600;0,700;1,300;1,500;1,600;1,700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,400;1,400&display=swap" rel="stylesheet" />
        <link href="css/styles.css" rel="stylesheet" />
      </Head>

      <div>
          {props.children}
      </div>
      </>
    )
}

export default PageLayout
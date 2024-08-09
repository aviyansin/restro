import React from 'react'
import Header from "../ Components/Header"
// import About from '../ Components/About'
import Awards from '../ Components/Awards'
import Menu from '../ Components/Menu'
import Our from  '../ Components/Our'
import Gallery from '../ Components/Gallery'
import Booking from '../ Components/Booking'
import Form from '../ Components/Form'
function Home() {
  return (
  <>
  {/* <Header 
     
     logobar={"https://ld-wp73.template-help.com/wordpress/prod_19755/v3/wp-content/uploads/2018/06/bl-3-Copy-1.png"}
     
     /> */}

<Awards 

awardimg= {"https://plus.unsplash.com/premium_photo-1676637000058-96549206fe71?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}


/>


{/* <About/> */}

<Menu  
imagesone={"https://s1.1zoom.me/big0/224/Fish_Food_Lemons_Vegetables_White_background_Plate_577924_1280x853.jpg"}
imagetwo={"https://us.images.westend61.de/0001361983pw/close-up-of-food-in-plate-against-white-background-EYF03817.jpg"}
/>

<div className='fleximgs'>


<Our

chefimg={"https://cdn.pixabay.com/photo/2024/04/09/01/00/ai-generated-8684799_1280.png"}
chefpost={"HEAD CHEF "}
chefname={"Chef-Yannick Alleno"}
para={"This French chef isn’t just about gathering stars, however. Since 2013, Alléno has been carrying out research and development on French cuisine to the point of starting his own culinary movement. This is termed Modern Cuisine. As part of his research, Alléno closely studied French sauces and evn patented his own technique, Extractions."}

/>

<Our
chefimg={"https://d3h1lg3ksw6i6b.cloudfront.net/media/image/2021/03/04/a06ffef30eb543ce904b76c5df31dd55_Mitou+Female+Chef+Asia+Michelin+Guide+Seoul.jpg"}
chefpost={"CHEF-FOUNDER "}
chefname={"Chef-Kim Bo-mi "}
para={" We aim for unique Japanese cuisine, especially based in Korea. Although Korea is geographically close to Japan, there are many differences in environment, society, and culture. Even if it's the same ingredient, the ripening season is different. Since the nature and water of the land where food ingredients are grown are different, even the same carrots grown in these regions would have different textures and varied results after cooking. "}

/>

<Our
chefimg={"https://thebestchefawards.com/wp-content/uploads/2024/07/zdj-1-1024x576.jpg"}
chefpost={"CHEF"}
chefname={"Chef-João Oliveira "}
para={"João Oliveira is an acclaimed Portuguese chef known for his innovative approach to seafood and commitment to local, sustainable ingredients. Born and raised in Porto, João initially aspired to be a veterinarian, but his passion for cooking was ignited while caring for his grandparents, leading him to shift his focus to the culinary arts at the age of 15. In 2015, "}

/>
</div>


<Gallery 

heading= {"GALLERY"}
/>

<div className='flexgall'>

<Gallery 

gallimg= {"https://ld-wp73.template-help.com/wordpress/prod_19755/v3/wp-content/uploads/2018/06/project-1.png"}

/>
<Gallery 

gallimg= {"https://ld-wp73.template-help.com/wordpress/prod_19755/v3/wp-content/uploads/2018/06/home-img-3.png"}
/>
<Gallery 

gallimg= {"https://ld-wp73.template-help.com/wordpress/prod_19755/v3/wp-content/uploads/2018/06/home-img-4.png"}
/>

<Gallery 

gallimg= {"https://ld-wp73.template-help.com/wordpress/prod_19755/v3/wp-content/uploads/2018/06/project-11.png"}
/>
</div>

<Booking/>

  <Form/>
  
  </>
  )
}

export default Home

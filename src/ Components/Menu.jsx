import React from 'react'

function Menu({imgone,imagesone,imagetwo}) {
  return (
    <>
    
    <div className='menulay'>
       
            <h1>MENU CARD</h1>
            <div className='flexmneu'> 
        <div className='menuone'>
            <h2>MAIN Menu</h2>
        <li><h3>GARLIC SHRIMP & TONNARELLI PASTA .........$19.99</h3> 
        <h5>Serrano ham, spinach, roasted red peppers, tomato, pil pil sauce</h5></li>
        <li><h3>GRILLED HANGER STEAK................................. $25.50</h3>
        <h5>Serrano ham, spinach, roasted red peppers, tomato, pil pil sauce</h5></li>
        <li><h3>PAN ROASTED ‘FLORIDA KEYS’ MAHI ........... $15.50</h3>
        <h5>Serrano ham, spinach, roasted red peppers, tomato, pil pil sauce</h5></li>

        <li><h3>GRILLED FREE RANGE CHICKEN SALAD..........$19.99</h3>
        <h5>Mesclun greens, pepperjack cheese, bacon, avocado, corn,</h5></li>
        <li><h3>RILLED BBQ BABY BACK RIBS........................ $23.00</h3>
        <h5>Hibiscus sweet ranch coleslaw, hand cut fries</h5></li>
        </div>

       
   


    
    <div className='picone'>
        <img src={imagesone} alt="" />
    </div>

    
    </div>
    </div>
    
    <div className='flextwo'>
<div className='pictwo'>
    <img src={imagetwo} alt="" />
</div>



    <div className='menutwo'>
            <h2>DINNER</h2>
        <li><h3>CHICKEN LIVER PARFAIT.................................$23.80</h3> 
        <h5>Chicken, onion, vegetable oil, Sour cream sauce, pepper, salt</h5></li>
        <li><h3>ITALIAN TASTING PLATTER.............................. $25.50</h3>
        <h5>Three Italian Favorites: Baked Clams, Fried Calamari and Stuffed</h5></li>
        <li><h3>PAN ROASTED ‘FLORIDA KEYS’ MAHI ............. $15.50</h3>
        <h5>Serrano ham, spinach, roasted red peppers, tomato, pil pil sauce</h5></li>

        <li><h3>CRAB CONGEE....................................................$19.99</h3>
        <h5>Biscuits with fresh sausage patties & country gravy</h5></li>
        <li><h3>SALT AND PEPPER CALAMARI........................... $23.00</h3>
        <h5>Rocket, lime, chipotle aioli</h5></li>
        </div>
                   
        </div>
       
        <div className='menubtn'><button>View All Menu</button></div>
       <div className='our'>
        <h1>OUR SPECIALIST</h1>
       </div>
    </>
  )
}

export default Menu

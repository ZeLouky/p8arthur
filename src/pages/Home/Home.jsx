// IMPORTS
import './home.css'

// ASSETS
import Banner from '../../assets/banner-home.png'

// COMPONENTS




// Page d'acceuil > Contient une bannière et le composant Cardlocation
function Home() {
   return (
      <section>
         
         <div className='BannerCont'>
            <img className='BannerImg' src={Banner} alt='Paysage' />
         </div>
         
         

      </section>
   )
 }
 
 export default Home
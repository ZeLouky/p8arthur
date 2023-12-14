// IMPORTS
import './about.css'

// COMPONENTS


// ASSETS
import Banner from '../../assets/banner-about.png'



// Page About > Contient une bannière et le composant Collapsehome
function About() {
   return (
      <section>
         <img className='BannerCont' alt='Paysage' src={Banner} />
         
      </section>
   )
 }
 
 export default About
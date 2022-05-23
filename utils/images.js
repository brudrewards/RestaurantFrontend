import rewards from '../public/assets/rewards_logo.png'
import invertedRewards from '../public/assets/rewards_logo_inverted.jpg'
import redeem from '../public/assets/Redeem.jpeg'
import redeem2 from '../public/assets/Redeem1.jpg'
import logo from '../public/assets/logo.png'
import experience from '../public/assets/Experience.jpeg'
import experience2 from '../public/assets/Experience1.jpg'
import earn from '../public/assets/Earn.jpeg'
import earn2 from '../public/assets/Earn1.jpg'
import coffee from '../public/assets/Coffee.png'
import coffee2 from '../public/assets/Coffee2.png'
import coffee3 from '../public/assets/Coffee3.png'
import cake from '../public/assets/Cake.png'
import background from '../public/assets/background.jpeg'
import background2 from '../public/assets/background.png'
import shopOutline from '../public/assets/1936-cafe-shop-outline.gif'
import noFood from '../public/assets/1916-no-food-outline.gif'
import closedOpen from '../public/assets/1656-closed-open-outline.gif'
import fastFood from '../public/assets/562-fastfood-outline.gif'
import cheeseOutline from '../public/assets/556-cheese-outline.gif'
import lockedOutline from '../public/assets/95-locked-before-outline.gif'
import approvedOutline from '../public/assets/24-approved-checked-outline.gif'
import holdingLatte from '../public/assets/woman-holding-latte.png'

import doron from '../public/assets/team/Doron.png'
import harini from '../public/assets/team/Harini.png'
import jesus from '../public/assets/team/Jesus.png'
import roop from '../public/assets/team/Roop.png'
import shayan from '../public/assets/team/Shayan.png'

class Image {
  constructor(src, alt = '') {
    this.src = src
    this.alt = alt
  }
}

const images = {
  rewards: new Image(rewards, "Bru'd rewards Logo"),
  rewardsInverted: new Image(invertedRewards, "Bru'd rewards Logo"),
  redeem: new Image(redeem, 'Redeem'),
  redeem2: new Image(redeem2, 'Redeem'),
  logo: new Image(logo, "Bru'd rewards Logo"),
  experience: new Image(experience, 'Happy Face'),
  experience2: new Image(experience2, 'Happy Face'),
  earn: new Image(earn, 'Earn'),
  earn2: new Image(earn2, 'Earn'),
  coffee: new Image(coffee, 'Coffee'),
  coffee2: new Image(coffee2, 'Three Coffee Cups'),
  coffee3: new Image(coffee3, 'Pouring Coffee'),
  cake: new Image(cake, 'Chocolate Cake'),
  background: new Image(background, 'Coffee Wallpaper'),
  background2: new Image(background2, 'Coffee Splash'),
  shopOutline: new Image(shopOutline, 'Shop'),
  noFood: new Image(noFood, 'No Food Available'),
  closedOpen: new Image(closedOpen, 'Closed/Open Sign'),
  fastFood: new Image(fastFood, 'Fast Food'),
  cheeseOutline: new Image(cheeseOutline, 'Cheese'),
  lockedOutline: new Image(lockedOutline, 'Locked'),
  approvedOutline: new Image(approvedOutline, 'Approved'),
  holdingLatte: new Image(holdingLatte, 'Women Holding Hot Latte'),
  doron: new Image(doron, 'Doron Portrait'),
  harini: new Image(harini, 'Harini Portrait'),
  jesus: new Image(jesus, 'Jesus Portrait'),
  roop: new Image(roop, 'Roop Portrait'),
  shayan: new Image(shayan, 'Shayan Portrait'),
}

export default images

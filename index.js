// axios.get(“https://donor-manage-bw.herokuapp.com/api/donations/total”).then((response) => { response.data }).response.data contains {total: 1000}

// class Avatar {
//     constructor(photo) {
//       // Assign this.element to the passed in DOM element
//       this.photo = photo;
      
//       // Get the custom data attribute on the Link
//       this.data = this.link.dataset.tab;
      
//       // Using the custom data attribute get the associated Item element
//       this.itemElement = document.querySelector(`.tabs-item[data-tab= "${this.data}"]`)
      
//       // Using the Item element, create a new instance of the TabItem class
//       this.tabItem = new TabItem(this.itemElement);
      
//       // Add a click event listener on this instance, calling the select method on click
//       this.link.addEventListener('click', () => this.tabItem.select())};
  
//     select() {
//       // Get all of the elements with the tabs-link class
//       const links = document.querySelectorAll('.tabs-link');
  
//       // Using a loop or the forEach method remove the 'tabs-link-selected' class from all of the links
//       Array.from(links).forEach(link => link.classList.remove('tabs-link-selected'));
  
//       // Add a class named "tabs-link-selected" to this link
//       this.element.classList.add('tabs-link-selected');
      
//       // Call the select method on the item associated with this link
//       this.element.classList.toggle('tabs-link-selected')
//     }
//   } 
  
//   class TabItem {
//     constructor(tabItem) {
//       // Assign this.element to the passed in element
//       this.tabItem = tabItem;
//     }
  
//     select() {
//       // Select all ".tabs-item" elements from the DOM
//       const items = document.querySelectorAll('.tabs-item');
  
//       // Remove the class "tabs-item-selected" from each element
//       Array.from(items).forEach(item => item.classList.remove('tabs-item-selected'));
//       // Add a class named "tabs-item-selected" to this element
//       this.tabItem.classList.add('tabs-item-selected');
//     }
//   }
  
//   /* START HERE: 
//   - Select all classes named ".tabs-link" and assign that value to the links variable
//   - With your selection in place, now chain a .forEach() method onto the links variable to iterate over the DOM NodeList
//   - In your .forEach() method's callback function, return a new instance of TabLink and pass in each link as a parameter
//   */
  
//   photos = document.querySelectorAll('.photo-box img');
//   photos.forEach(photo => new Avatar(photo));



let photos = document.querySelectorAll('.photo-box img');
Array.from(photos).forEach(photo => photo.addEventListener('click', () => event.target.style.border = "2px solid white"));
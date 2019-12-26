// let menu = null;
//         document.addEventListener('DOMContentLoaded', function(){
//             //make sure the right click menu is hidden
//             menus = document.querySelectorAll('#menus');
   

//             for(const menu of menus){
//                 menu.classList.add('off');
//             }


            
//             //add the right click listener to the box
//             let box = document.getElementById('box');
//             box.addEventListener('contextmenu', showmenu);
            
//             //add a listener for leaving the menu and hiding it


//             for(const menu of menus){
//                 menu.addEventListener('mouseleave', hidemenu); 
//                 addMenuListeners(menu);          
//             }           
            
//             //add the listeners for the menu items
            
//         });
        
//         function addMenuListeners(menu){
//             menu.querySelector('#quote').addEventListener('click', quote);
//             menu.querySelector('#quote2').addEventListener('click', quoteSelection);           
//         }
        
//         function quote(ev){
//             hidemenu();
//             console.log('abc')
//         }
        
//         function showmenu(ev){
//             //stop the real right click menu
//             ev.preventDefault(); 
//             //show the custom menu
//             console.log( ev.clientX, ev.clientY );
//             menu.style.top = `${ev.clientY - 20}px`;
//             menu.style.left = `${ev.clientX - 20}px`;
//             menu.classList.remove('off');
//         }
        
//         function hidemenu(ev){
//             menu.classList.add('off');
//             menu.style.top = '-200%';
//             menu.style.left = '-200%';
//         }











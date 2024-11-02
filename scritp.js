document.addEventListener('DOMContentLoaded', () => {
      const produits = document.querySelectorAll('.produit');
      const totalElement = document.querySelector('.total');
    
      produits.forEach(produit => {
        const btnPlus = produit.querySelector('.btnplus');
        const btnMoins = produit.querySelector('.btnmoins');
        const quantityElement = produit.querySelector('.quantity');
        const removeBtn = produit.querySelector('.btnremove');
        const likeBtn = produit.querySelector('.btnlike');
        const prixElement = produit.querySelector('.price');
        let quantity = parseInt(quantityElement.textContent);
        const prix = parseInt(prixElement.textContent.replace(' fcfa', ''));
    
        btnPlus.addEventListener('click', () => {
          quantity++;   
          quantityElement.textContent = quantity;
          updateTotal();
        });
    
        btnMoins.addEventListener('click', () => {
          if (quantity > 0) {
            quantity--;
            quantityElement.textContent = quantity;
            updateTotal();
          }
        });
    
        removeBtn.addEventListener('click', () => {
          produit.remove();
          updateTotal();
        });
    
        likeBtn.addEventListener('click', () => {
          likeBtn.classList.toggle('liked');
          if(likeBtn.textContent === `Like`){
            likeBtn.textContent =`Liked`
          }
          else{
            likeBtn.textContent = `Like`
          }
          likeBtn.classList.toggle('active');
        });

        
    
        function updateTotal() {
          let total = 0;
          document.querySelectorAll('.produit').forEach(produit => {
            const quantity = parseInt(produit.querySelector('.quantity').textContent);
            const prix = parseInt(produit.querySelector('.price').textContent.replace(' fcfa', ''));
            total += quantity * prix;
          });
          totalElement.textContent = `Total: ${total} fcfa`;
        }
    
        updateTotal();
      }); 
    });
    
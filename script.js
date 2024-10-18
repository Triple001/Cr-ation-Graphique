// Ajoute un événement de clic à chaque bouton "Acheter maintenant"
document.querySelectorAll('.buyNowBtn').forEach(button => {
    button.addEventListener('click', function() {
        alert('Merci pour votre achat ! Téléchargement de l'image...');
        
        // Simule le téléchargement de l'image après le paiement
        const productImage = this.previousElementSibling;
        const imageUrl = productImage.src;
        
        const link = document.createElement('a');
        link.href = imageUrl;
        link.download = imageUrl.split('/').pop();
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
});

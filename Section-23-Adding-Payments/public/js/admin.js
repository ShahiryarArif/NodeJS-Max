const deleteProduct = (btn) => {
  const prodId = btn.parentNode.querySelector('input[name="productId"]').value;
  const csrfToken = btn.parentNode.querySelector('input[name="_csrf"]').value;

  const productElement = btn.closest('article');

  fetch(`/admin/product/${prodId}`, {
    method: 'DELETE',
    headers: {
      'csrf-token': csrfToken
    }
  })
  .then(response => response.json())
  .then(data => {
    if (data.ok) {
      // Remove the product from the UI
      productElement.parentNode.removeChild(productElement);
    } else {
      console.error('Failed to delete product');
    }
  })
  .catch(err => console.error(err));
}
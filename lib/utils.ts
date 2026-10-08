export function formatPrice(price: number): string {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(price);
}

export function generateWhatsAppMessage(items: any[], total: number, customerData?: any): string {
  let message = 'Olá! Gostaria de finalizar meu pedido:%0A%0A';
  
  items.forEach((item, index) => {
    message += `${index + 1}. ${item.name} - Qtd: ${item.quantity} - ${formatPrice(item.price * item.quantity)}%0A`;
  });
  
  message += `%0ATotal: ${formatPrice(total)}%0A%0A`;
  
  if (customerData) {
    message += `Nome: ${customerData.name}%0A`;
    message += `Email: ${customerData.email}%0A`;
    message += `Telefone: ${customerData.phone}%0A`;
    message += `Endereço: ${customerData.address}%0A`;
  }
  
  return message;
}

export function createWhatsAppLink(phoneNumber: string, message: string): string {
  return `https://wa.me/${phoneNumber}?text=${message}`;
}

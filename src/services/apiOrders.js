import { API_URL } from '../utils/constants';

export async function getOrder(orderId) {
  const res = await fetch(`${API_URL}orders/${orderId}`);
  if (!res.ok) throw new Error('couldnt find order');
  const data = await res.json();
  return data;
}

export async function createOrder(newOrder) {
  try {
    const res = await fetch(`${API_URL}orders`, {
      method: 'POST',
      body: JSON.stringify(newOrder),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!res.ok) throw Error();
    const data = await res.json();
    return data;
  } catch {
    throw Error('Failed to create your order');
  }
}

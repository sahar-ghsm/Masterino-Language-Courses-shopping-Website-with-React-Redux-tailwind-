import { API_URL } from '@/utils/constants';

export async function getOrderById(orderId) {
  try {
    const res = await fetch(`${API_URL}orders?id=${orderId}`);
    if (!res.ok) throw new Error('couldnt find order');
    const data = await res.json();
    return data?.[0] || null;
  } catch {
    throw Error('Failed to create your order');
  }
}

export async function createOrder(newOrder) {
  try {
    newOrder['totalPrice'] = 800000;
    const res = await fetch(`${API_URL}orders`, {
      method: 'POST',
      body: JSON.stringify(newOrder),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!res.ok) throw Error();
    const data = await res.json();
    return data?.orders;
  } catch {
    throw Error('Failed to create your order');
  }
}

export async function updateOrder(id, updatedObject) {
  try {
    const res = await fetch(`${API_URL}orders/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(updatedObject),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!res.ok) throw Error();
    const data = await res.json();
    return data;
  } catch (err) {
    throw Error('Failed to Update Order');
  }
}

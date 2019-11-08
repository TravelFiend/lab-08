const URL = '/api';

export async function getPets() {
    const url = `${URL}/pets`;

    const response = await fetch(url);
    const data = await response.json();
    return data;
}

export async function getTypes() {
    const url = `${URL}/types`;

    const response = await fetch(url);
    const data = await response.json();
    return data;
}

export async function addPet(pet) {
    const url = `${URL}/pets`;

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(pet)
    });

    const data = await response.json();
    return data;
}
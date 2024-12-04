const items = {
    burger: [
        { name: "Classic Burger (Large)", price: 750.00 },
        { name: "Classic Burger (Regular)", price: 1500.00 },
        { name: "Turkey Burger", price: 1600.00 },
        { name: "Chicken Burger (Large)", price: 1400.00 },
        { name: "Chicken Burger (Regular)", price: 800.00 },
        { name: "Bacon Burger", price: 650.00 },
        { name: "Olive Burger", price: 1800.00 }
    ],
    Submarines: [
        { name: "Crispy Chicken Submarine (Large)", price: 2000.00 },
        { name: "Crispy Chicken Submarine (Regular)", price: 1500.00 },
        { name: "Chicken Submarine (Large)", price: 1800.00 },
        { name: "Chicken Submarine (Regular)", price: 1400.00 },
        { name: "Grinder Submarine", price: 2300.00 },
        { name: "Cheese Submarine", price: 2200.00 }
    ],
    Fries: [
        { name: "Steak Fries (Large)", price: 1200.00 },
        { name: "Steak Fries (Medium)", price: 600.00 },
        { name: "French Fries (Large)", price: 800.00 },
        { name: "French Fries (Medium)", price: 650.00 },
        { name: "French Fries (Small)", price: 450.00 },
        { name: "Sweet Potato Fries (Large)", price: 600.00 }
    ],
    Pasta: [
        { name: "Chicken n Cheese Pasta", price: 1600.00 },
        { name: "Chicken Penne Pasta", price: 1700.00 },
        { name: "Ground Turkey Pasta Bake", price: 2900.00 },
        { name: "Creamy Shrimp Pasta", price: 2000.00 },
        { name: "Lemon Butter Pasta", price: 1950.00 }
    ],
    Chicken: [
        { name: "Fried Chicken (Small)", price: 1200.00 },
        { name: "Fried Chicken (Regular)", price: 2300.00 },
        { name: "Fried Chicken (Large)", price: 3100.00 },
        { name: "Hot Wings (Large)", price: 2400.00 },
        { name: "Devilled Chicken (Large)", price: 900.00 },
        { name: "BBQ Chicken (Regular)", price: 2100.00 }
    ],
    Beverages: [
        { name: "Pepsi (330ml)", price: 990.00 },
        { name: "Coca-Cola (330ml)", price: 1230.00 },
        { name: "Sprite (330ml)", price: 1500.00 },
        { name: "Mirinda (330ml)", price: 850.00 }
    ]
};


function updateFoodOptions() {
    const itemType = document.getElementById("itemType").value;
    const foodSelect = document.getElementById("foodSelect");

    foodSelect.innerHTML = '<option value="">Select Food</option>';

    
    if (itemType) {
        items[itemType].forEach(item => {
            const option = document.createElement("option");
            option.value = item.name;
            option.textContent = `${item.name} - $${item.price}`;
            foodSelect.appendChild(option);
        });
    }
}


function placeOrder() {
    const foodName = document.getElementById("foodSelect").value;
    const quantity = document.getElementById("orderQuantity").value;

    if (!foodName || !quantity) {
        alert("Please select a food item and enter quantity");
        return;
    }

    let food;
    for (let type in items) {
        food = items[type].find(item => item.name === foodName);
        if (food) break;
    }

    const total = food.price * quantity;
    document.getElementById("orderTotal").textContent = `Total: $${total}`;

    const orderTable = document.getElementById("orderTable").getElementsByTagName('tbody')[0];
    const newRow = orderTable.insertRow();
    newRow.innerHTML = `
        <td>${document.getElementById("customerName").value}</td>
        <td>${foodName}</td>
        <td>${quantity}</td>
        <td>$${total}</td>
    `;
}


function addFoodItemsToTable() {
    const foodItemsTable = document.getElementById("foodItemsTable").getElementsByTagName('tbody')[0];

    foodItemsTable.innerHTML = ''; 

    
    for (const category in items) {
        items[category].forEach(item => {
            const newRow = foodItemsTable.insertRow();
            newRow.innerHTML = `
                <td>${item.name}</td>
                <td>${category}</td>
                <td>$${item.price}</td>
            `;
        });
    }
}


function addCustomer() {
    const customerName = document.getElementById("customerName").value;
    const customerContact = document.getElementById("customerContact").value;

    const customerTable = document.getElementById("customerTable").getElementsByTagName('tbody')[0];
    const newRow = customerTable.insertRow();
    newRow.innerHTML = `
        <td>${customerName}</td>
        <td>${customerContact}</td>
    `;

    document.getElementById("customerName").value = '';
    document.getElementById("customerContact").value = '';
}


window.onload = addFoodItemsToTable;

document.addEventListener('DOMContentLoaded', () => {
  const urlData = "https://brotherblazzard.github.io/canvas-content/fruit.json";

  async function getFruitsData(urlData) {
    try {
      const response = await fetch(urlData);
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error(`Failed to fetch fruits data: ${error}`);
    }
  }

  const fillFruitOptions = (fruits, selectId) => {
    const fruitSelect = document.getElementById(selectId);

    fruits.forEach((fruit) => {
      const option = document.createElement('option');
      option.value = fruit.id;
      option.textContent = `ID: ${fruit.id} - ${fruit.name}`;
      fruitSelect.appendChild(option);
    });
  }

  const calculateTotalNutrition = (selectedFruits, fruitsData) => {
    let totalCarbohydrates = 0;
    let totalProtein = 0;
    let totalFat = 0;
    let totalSugar = 0;
    let totalCalories = 0;

    selectedFruits.forEach((fruitName) => {
      const fruitData = fruitsData.find((fruit) => fruit.name.toLowerCase() === fruitName.toLowerCase());

      if (fruitData) {
        totalCarbohydrates += fruitData.nutritions.carbohydrates;
        totalProtein += fruitData.nutritions.protein;
        totalFat += fruitData.nutritions.fat;
        totalSugar += fruitData.nutritions.sugar;
        totalCalories += fruitData.nutritions.calories;
      }
    });

    return {
      totalCarbohydrates,
      totalProtein,
      totalFat,
      totalSugar,
      totalCalories,
    };
  };

  const displayOrderSummary = (event) => {
    event.preventDefault();

    const firstName = document.getElementById('firstName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const specialInstructions = document.getElementById('specialInstructions').value;

    const fruitSelect1 = document.getElementById('fruitSelect1');
    const fruitSelect2 = document.getElementById('fruitSelect2');
    const fruitSelect3 = document.getElementById('fruitSelect3');

    const selectedFruits = [
      fruitSelect1.value,
      fruitSelect2.value,
      fruitSelect3.value
    ];

    const orderDate = new Date().toLocaleDateString();

    const orderSummary = document.getElementById('orderOutput');
    orderSummary.innerHTML = `
      <p><strong>Order Summary</strong></p>
      <p>First Name: ${firstName}</p>
      <p>Email: ${email}</p>
      <p>Phone: ${phone}</p>
      <p>Special Instructions: ${specialInstructions}</p>
      <p>Order Date: ${orderDate}</p>
    `;

    getFruitsData(urlData)
      .then((fruitsData) => {
        const totalNutrition = calculateTotalNutrition(selectedFruits, fruitsData);

        orderSummary.innerHTML += `
          <p><strong>Total Nutrition</strong></p>
          <p>Total Carbohydrates: ${totalNutrition.totalCarbohydrates}</p>
          <p>Total Protein: ${totalNutrition.totalProtein}</p>
          <p>Total Fat: ${totalNutrition.totalFat}</p>
          <p>Total Sugar: ${totalNutrition.totalSugar}</p>
          <p>Total Calories: ${totalNutrition.totalCalories}</p>
        `;
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  };

  getFruitsData(urlData)
    .then((data) => {
      fillFruitOptions(data, 'fruitSelect1');
      fillFruitOptions(data, 'fruitSelect2');
      fillFruitOptions(data, 'fruitSelect3');

      const submitBtn = document.getElementById('submitBtn');
      submitBtn.addEventListener('click', displayOrderSummary);
    })
    .catch((error) => {
      console.log('Error:', error);
    });
});
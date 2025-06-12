const addEmployeeButton = document.querySelector('.add-employee');
const modalPopUp = document.getElementById('modal-popup');
const employeeForm = document.querySelector('.employee-form');
const nameInput = document.getElementById('name-input');
const addressInput = document.getElementById('address-input');
const salaryInput = document.getElementById('salary-input');
const employeesList = document.querySelector('.employee-list');
const displayName = document.getElementById('name');
const displaySalary = document.getElementById('salary');
const displayAddress = document.getElementById('address');

let employeeIdCounter = 1;

// Show Modal
function openModal() {
    modalPopUp.style.display = 'flex';
}

// Hide Modal and clear form
function closeModal() {
    modalPopUp.style.display = 'none';
    employeeForm.reset();
}

// Check if clicked outside form -> close modal
modalPopUp.addEventListener('click', (event) => {
    if (!employeeForm.contains(event.target)) {
        closeModal();
    }
});

// Open modal on button click
addEmployeeButton.addEventListener('click', openModal);

// Display employee details
function showEmployeeDetails(name, salary, address) {
    displayName.textContent = name;
    displaySalary.textContent = salary;
    displayAddress.textContent = address;
}

// Clear displayed details
function clearDisplayedDetails() {
    displayName.textContent = '';
    displaySalary.textContent = '';
    displayAddress.textContent = '';
}

// Create employee element
function createEmployeeElement(id, name, salary, address) {
    const employeeDiv = document.createElement('div');
    employeeDiv.id = id;
    employeeDiv.style.display = 'flex';
    employeeDiv.style.justifyContent = 'space-around';
    employeeDiv.style.alignItems = 'center';

    const nameTag = document.createElement('h3');
    nameTag.textContent = name;

    const nameWrapper = document.createElement('p');
    nameWrapper.appendChild(nameTag);

    const deleteBtn = document.createElement('span');
    deleteBtn.className = 'delete';
    deleteBtn.textContent = '❌';
    deleteBtn.style.cursor = 'pointer';

    // Delete functionality
    deleteBtn.addEventListener('click', (event) => {
        event.stopPropagation();
        employeeDiv.remove();

        const isDisplayed = (
            displayName.textContent === name &&
            displaySalary.textContent === salary &&
            displayAddress.textContent === address
        );

        if (isDisplayed) clearDisplayedDetails();
    });

    // Show details on employee click
    employeeDiv.addEventListener('click', () => {
        showEmployeeDetails(name, salary, address);
    });

    employeeDiv.append(nameWrapper, deleteBtn);
    return employeeDiv;
}

// Handle form submit
employeeForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = nameInput.value.trim();
    const address = addressInput.value.trim();
    const salary = salaryInput.value.trim();

    if (!name || !address || !salary) return;

    const employeeDiv = createEmployeeElement(employeeIdCounter++, name, salary, address);
    employeesList.appendChild(employeeDiv);

    closeModal();
});
const list = document.querySelector(".employee-list");
const addEmployeeButton = document.querySelector('.add-employee');
const modalPopUp = document.getElementById('modal-popup')
const employeeForm = document.querySelector('.employee-form');
const nameInput = document.getElementById('name-input')
const addressInput = document.getElementById('address-input')
const salaryInput = document.getElementById('salary-input')
let employeesList = document.querySelector('.employee-list')

modalPopUp.style.display = 'none';
let employees = [];
let employeeIds = 1;

function openModal() {
    modalPopUp.style.display = 'flex';
    nameInput.focus();
}

function closeModal() {
    modalPopUp.style.display = 'none';
    nameInput.value = "";
    addressInput.value = "";
    salaryInput.value = "";
}

modalPopUp.addEventListener('click', event => {
    if(!employeeForm.contains(event.target)) {
        closeModal();
    }
});

addEmployeeButton.addEventListener('click', () => {
    openModal();
});

// ******************************* Add Employee *******************************

employeeForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const employeeName = nameInput.value;
    const employeeAddress = addressInput.value;
    const salary = salaryInput.value;

    const employeeDiv = document.createElement('div');
    employeeDiv.setAttribute('id', employeeIds);
    employeeDiv.style.display = 'flex';
    employeeDiv.style.justifyContent = 'space-around'
    const nameSpan = document.createElement('p');
    nameSpan.innerHTML = `<h3>${employeeName}</h3>`;
    const deleteEmp = document.createElement('span');
    deleteEmp.setAttribute('class', 'delete');
    deleteEmp.innerHTML = '<p>❌</p>';
    deleteEmp.style.cursor = 'pointer'
    employeeDiv.append(nameSpan, deleteEmp);

    employeeDiv.addEventListener('click', () => {
        document.getElementById('name').textContent = employeeName;
        document.getElementById('salary').textContent = salary;
        document.getElementById('address').textContent = employeeAddress;
    });

    deleteEmp.addEventListener('click', function(e) {
        e.stopPropagation();
        employeeDiv.remove();

        const isSameEmployeeDisplayed =
        document.getElementById('name').textContent === employeeName &&
        document.getElementById('salary').textContent === salary &&
        document.getElementById('address').textContent === employeeAddress;

    if (isSameEmployeeDisplayed) {
        // Clear the displayed data
        document.getElementById('name').textContent = '';
        document.getElementById('salary').textContent = '';
        document.getElementById('address').textContent = '';
    }
    })

    employeesList.appendChild(employeeDiv);
    closeModal();
});